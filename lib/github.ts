import { cache } from "react";

export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
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
