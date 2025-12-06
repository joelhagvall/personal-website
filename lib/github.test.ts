import { getGitHubRepo } from './github';
import type { GitHubRepo } from './github';

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Suppress console.error in tests
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  mockFetch.mockReset();
});

afterEach(() => {
  jest.restoreAllMocks();
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
