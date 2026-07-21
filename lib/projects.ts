import { PROJECTS, getGitHubUrl } from "@/data/projects";
import { getGitHubRepo } from "@/lib/github";
import type { Project, ProjectWithStats } from "@/types/project";

export function getProjectsByTitle(titles: readonly string[]) {
  return titles
    .map((title) => PROJECTS.find((project) => project.title === title))
    .filter((project): project is Project => Boolean(project));
}

export async function getProjectsWithStats(
  projects: readonly Project[] = PROJECTS
): Promise<ProjectWithStats[]> {
  return Promise.all(
    projects.map(async (project) => {
      // Projects without a public repo (e.g. work in progress) have no GitHub link or stats.
      if (!project.owner || !project.repo) {
        return { ...project };
      }

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
