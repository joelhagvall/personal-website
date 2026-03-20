import { WorkWithMeContent } from "@/components/freelance/WorkWithMeContent";
import { FREELANCE } from "@/data/freelance";
import { getProjectsByRepo, getProjectsWithStats } from "@/lib/projects";

export default async function WorkWithMePage() {
  const selectedProjects = getProjectsByRepo(FREELANCE.selectedProjectRepos);
  const projectsWithStats = await getProjectsWithStats(selectedProjects);

  return <WorkWithMeContent projectsWithStats={projectsWithStats} />;
}
