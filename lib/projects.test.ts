jest.mock("@/data/projects", () => ({
  PROJECTS: [
    {
      title: "Repo Alpha",
      description: "Alpha description",
      technologies: ["TypeScript"],
      owner: "team",
      repo: "repo-alpha",
      iconName: "code",
    },
    {
      title: "Repo Beta",
      description: "Beta description",
      technologies: ["Next.js"],
      owner: "team",
      repo: "repo-beta",
      iconName: "bot",
    },
  ],
  getGitHubUrl: jest.fn((owner: string, repo: string) => `https://github.com/${owner}/${repo}`),
}));

jest.mock("@/lib/github", () => ({
  getGitHubRepo: jest.fn(),
}));

import { PROJECTS, getGitHubUrl } from "@/data/projects";
import { getGitHubRepo } from "@/lib/github";
import { getProjectsByRepo, getProjectsWithStats } from "./projects";

const mockGetGitHubRepo = jest.mocked(getGitHubRepo);
const mockGetGitHubUrl = jest.mocked(getGitHubUrl);

describe("getProjectsByRepo", () => {
  it("preserves the requested order and skips unknown repos", () => {
    const result = getProjectsByRepo(["repo-beta", "missing-repo", "repo-alpha"]);

    expect(result).toEqual([PROJECTS[1], PROJECTS[0]]);
  });
});

describe("getProjectsWithStats", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("enriches the default project list with GitHub stats and URLs", async () => {
    mockGetGitHubRepo
      .mockResolvedValueOnce({
        name: "repo-alpha",
        description: "Alpha description",
        stargazers_count: 12,
        forks_count: 3,
        html_url: "https://github.com/team/repo-alpha",
      })
      .mockResolvedValueOnce(null);

    const result = await getProjectsWithStats();

    expect(mockGetGitHubRepo).toHaveBeenNthCalledWith(1, "team", "repo-alpha");
    expect(mockGetGitHubRepo).toHaveBeenNthCalledWith(2, "team", "repo-beta");
    expect(mockGetGitHubUrl).toHaveBeenNthCalledWith(1, "team", "repo-alpha");
    expect(mockGetGitHubUrl).toHaveBeenNthCalledWith(2, "team", "repo-beta");
    expect(result).toEqual([
      {
        ...PROJECTS[0],
        githubUrl: "https://github.com/team/repo-alpha",
        stars: 12,
        forks: 3,
      },
      {
        ...PROJECTS[1],
        githubUrl: "https://github.com/team/repo-beta",
        stars: undefined,
        forks: undefined,
      },
    ]);
  });

  it("supports enriching an explicit project subset", async () => {
    const selectedProjects = [PROJECTS[1]!];

    mockGetGitHubRepo.mockResolvedValueOnce({
      name: "repo-beta",
      description: "Beta description",
      stargazers_count: 4,
      forks_count: 1,
      html_url: "https://github.com/team/repo-beta",
    });

    const result = await getProjectsWithStats(selectedProjects);

    expect(mockGetGitHubRepo).toHaveBeenCalledTimes(1);
    expect(result).toEqual([
      {
        ...PROJECTS[1],
        githubUrl: "https://github.com/team/repo-beta",
        stars: 4,
        forks: 1,
      },
    ]);
  });
});
