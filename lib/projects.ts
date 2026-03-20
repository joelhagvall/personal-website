import { PROJECTS, getGitHubUrl } from "@/data/projects";
import { getGitHubRepo } from "@/lib/github";
import type { Project, ProjectWithStats } from "@/types/project";

export function getProjectsByRepo(repos: readonly string[]) {
  return repos
    .map((repo) => PROJECTS.find((project) => project.repo === repo))
    .filter((project): project is Project => Boolean(project));
}

export async function getProjectsWithStats(
  projects: readonly Project[] = PROJECTS
): Promise<ProjectWithStats[]> {
  return Promise.all(
    projects.map(async (project) => {
      const repoData = await getGitHubRepo(project.owner, project.repo);

      return {
        ...project,
        githubUrl: getGitHubUrl(project.owner, project.repo),
        stars: repoData?.stargazers_count,
        forks: repoData?.forks_count,
      };
    })
  );
}
