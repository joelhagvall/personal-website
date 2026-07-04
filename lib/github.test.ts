import {
  contributionsToCalendar,
  getGitHubContributionCalendar,
  getGitHubRepo,
} from './github';
import type { GitHubContributionCalendar, GitHubRepo } from './github';

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;
const originalGitHubToken = process.env["GITHUB_TOKEN"];

// Suppress console.error in tests
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  mockFetch.mockReset();
  process.env["GITHUB_TOKEN"] = originalGitHubToken;
});

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(() => {
  process.env["GITHUB_TOKEN"] = originalGitHubToken;
});

describe('getGitHubRepo', () => {
  const mockRepoData = {
    name: 'test-repo',
    description: 'A test repository',
    stargazers_count: 42,
    forks_count: 10,
    html_url: 'https://github.com/owner/test-repo',
    // Extra fields that should be filtered out
    id: 12345,
    full_name: 'owner/test-repo',
    private: false,
  };

  it('returns repo data on successful fetch', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRepoData,
    });

    const result = await getGitHubRepo('owner', 'test-repo');

    expect(result).toEqual<GitHubRepo>({
      name: 'test-repo',
      description: 'A test repository',
      stargazers_count: 42,
      forks_count: 10,
      html_url: 'https://github.com/owner/test-repo',
    });
  });

  it('calls GitHub API with correct URL and headers', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRepoData,
    });

    await getGitHubRepo('octocat', 'hello-world');

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/octocat/hello-world',
      expect.objectContaining({
        headers: { Accept: 'application/vnd.github.v3+json' },
      })
    );
  });

  it('returns null on HTTP error (404)', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const result = await getGitHubRepo('owner', 'nonexistent');

    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      'Failed to fetch repo owner/nonexistent: 404'
    );
  });

  it('returns null on HTTP error (500)', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const result = await getGitHubRepo('owner', 'repo');

    expect(result).toBeNull();
  });

  it('returns null on network error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const result = await getGitHubRepo('owner', 'repo');

    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching GitHub repo owner/repo:',
      expect.any(Error)
    );
  });

  it('handles null description from API', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ ...mockRepoData, description: null }),
    });

    const result = await getGitHubRepo('owner', 'repo');

    expect(result?.description).toBeNull();
  });
});

describe('getGitHubContributionCalendar', () => {
  const mockCalendarData = {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: 123,
            weeks: [
              {
                firstDay: '2026-03-01',
                contributionDays: [
                  {
                    contributionCount: 0,
                    date: '2026-03-01',
                    weekday: 0,
                  },
                  {
                    contributionCount: 4,
                    date: '2026-03-02',
                    weekday: 1,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  };

  it('returns null without a GitHub token', async () => {
    delete process.env["GITHUB_TOKEN"];

    const result = await getGitHubContributionCalendar('missing-token-user');

    expect(result).toBeNull();
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('returns contribution calendar data on successful fetch', async () => {
    process.env["GITHUB_TOKEN"] = 'test-token';
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockCalendarData,
    });

    const result = await getGitHubContributionCalendar('calendar-success-user');

    expect(result).toEqual<GitHubContributionCalendar>({
      totalContributions: 123,
      weeks: [
        {
          firstDay: '2026-03-01',
          contributionDays: [
            {
              contributionCount: 0,
              date: '2026-03-01',
              weekday: 0,
            },
            {
              contributionCount: 4,
              date: '2026-03-02',
              weekday: 1,
            },
          ],
        },
      ],
    });
  });

  it('calls the GraphQL API with authorization and variables', async () => {
    process.env["GITHUB_TOKEN"] = 'test-token';
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockCalendarData,
    });

    await getGitHubContributionCalendar('graphql-request-user');

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/graphql',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: 'Bearer test-token',
          'Content-Type': 'application/json',
        }),
        body: expect.stringContaining('"username":"graphql-request-user"'),
      })
    );
  });

  it('returns null when GitHub responds with GraphQL errors', async () => {
    process.env["GITHUB_TOKEN"] = 'test-token';
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: null,
        errors: [{ message: 'Something went wrong' }],
      }),
    });

    const result = await getGitHubContributionCalendar('graphql-error-user');

    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      'Failed to parse contribution calendar for graphql-error-user:',
      [{ message: 'Something went wrong' }]
    );
  });
});

describe('contributionsToCalendar', () => {
  // 2026-06-28 is a Sunday
  const days = [
    { date: '2026-06-26', count: 2 }, // Friday
    { date: '2026-06-27', count: 0 }, // Saturday
    { date: '2026-06-28', count: 5 }, // Sunday — starts a new week
    { date: '2026-06-29', count: 1 }, // Monday
  ];

  it('groups days into weeks starting on Sundays', () => {
    const calendar = contributionsToCalendar(days, 8);

    expect(calendar.totalContributions).toBe(8);
    expect(calendar.weeks).toHaveLength(2);
    expect(calendar.weeks[0]).toEqual({
      firstDay: '2026-06-26',
      contributionDays: [
        { contributionCount: 2, date: '2026-06-26', weekday: 5 },
        { contributionCount: 0, date: '2026-06-27', weekday: 6 },
      ],
    });
    expect(calendar.weeks[1]?.firstDay).toBe('2026-06-28');
    expect(calendar.weeks[1]?.contributionDays).toHaveLength(2);
  });

  it('sums contribution counts when no total is provided', () => {
    const calendar = contributionsToCalendar(days);

    expect(calendar.totalContributions).toBe(8);
  });

  it('returns an empty calendar for no days', () => {
    expect(contributionsToCalendar([])).toEqual({
      totalContributions: 0,
      weeks: [],
    });
  });
});
