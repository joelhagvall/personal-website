import { cache } from "react";

export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export interface GitHubContributionDay {
  contributionCount: number;
  date: string;
  weekday: number;
}

export interface GitHubContributionWeek {
  firstDay: string;
  contributionDays: GitHubContributionDay[];
}

export interface GitHubContributionCalendar {
  totalContributions: number;
  weeks: GitHubContributionWeek[];
}

// Use React.cache() for per-request deduplication
// See: https://vercel.com/blog/introducing-react-best-practices (rule 3.4)
// Multiple calls to getGitHubRepo with same owner/repo within a single request
// will only execute the fetch once
export const getGitHubRepo = cache(async (owner: string, repo: string): Promise<GitHubRepo | null> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      // Revalidate every 2 hours
      next: { revalidate: 7200 }
    });

    if (!response.ok) {
      console.error(`Failed to fetch repo ${owner}/${repo}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return {
      name: data.name,
      description: data.description,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      html_url: data.html_url,
    };
  } catch (error) {
    console.error(`Error fetching GitHub repo ${owner}/${repo}:`, error);
    return null;
  }
});

// Day entry from the public contributions API
// (https://github-contributions-api.jogruber.de), used for client-side
// refresh of the build-time calendar
export interface PublicContributionDay {
  date: string;
  count: number;
}

export function contributionsToCalendar(
  days: PublicContributionDay[],
  totalContributions?: number
): GitHubContributionCalendar {
  const weeks: GitHubContributionWeek[] = [];

  for (const day of days) {
    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();

    if (weekday === 0 || weeks.length === 0) {
      weeks.push({ firstDay: day.date, contributionDays: [] });
    }

    weeks[weeks.length - 1]!.contributionDays.push({
      contributionCount: day.count,
      date: day.date,
      weekday,
    });
  }

  return {
    totalContributions:
      totalContributions ?? days.reduce((sum, day) => sum + day.count, 0),
    weeks,
  };
}

/**
 * Wire-compact calendar: first day + one count per consecutive day. Used as
 * the client component's initial prop so the SSR HTML/RSC payload carries
 * ~371 integers instead of ~371 objects.
 */
export interface CompactContributionCalendar {
  total: number;
  start: string;
  counts: number[];
}

export function compactCalendar(
  calendar: GitHubContributionCalendar
): CompactContributionCalendar {
  const days = calendar.weeks.flatMap((week) => week.contributionDays);
  return {
    total: calendar.totalContributions,
    start: days[0]?.date ?? "",
    counts: days.map((day) => day.contributionCount),
  };
}

export function expandCalendar(
  compact: CompactContributionCalendar
): GitHubContributionCalendar | null {
  if (!compact.start || compact.counts.length === 0) {
    return null;
  }

  const start = new Date(`${compact.start}T00:00:00Z`);
  if (Number.isNaN(start.getTime())) {
    return null;
  }

  const days: PublicContributionDay[] = compact.counts.map((count, index) => {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + index);
    return { date: date.toISOString().slice(0, 10), count };
  });

  return contributionsToCalendar(days, compact.total);
}

const GITHUB_CONTRIBUTION_QUERY = `
  query GitHubContributionCalendar($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

export const getGitHubContributionCalendar = cache(
  async (username: string): Promise<GitHubContributionCalendar | null> => {
    const token =
      process.env["GITHUB_TOKEN"] ?? process.env["GITHUB_ACCESS_TOKEN"];

    if (!token) {
      return null;
    }

    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GITHUB_CONTRIBUTION_QUERY,
          variables: { username },
        }),
        next: { revalidate: 21600 },
      });

      if (!response.ok) {
        console.error(
          `Failed to fetch contribution calendar for ${username}: ${response.status}`
        );
        return null;
      }

      const data = await response.json();
      const calendar =
        data?.data?.user?.contributionsCollection?.contributionCalendar;

      if (data?.errors?.length || !calendar) {
        console.error(
          `Failed to parse contribution calendar for ${username}:`,
          data?.errors ?? "Missing contribution calendar data"
        );
        return null;
      }

      return {
        totalContributions: calendar.totalContributions,
        weeks: calendar.weeks,
      };
    } catch (error) {
      console.error(
        `Error fetching contribution calendar for ${username}:`,
        error
      );
      return null;
    }
  }
);
