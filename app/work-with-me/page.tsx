import { WorkWithMeContent } from "@/components/freelance/WorkWithMeContent";
import { FREELANCE } from "@/data/freelance";
import { getProjectsByTitle, getProjectsWithStats } from "@/lib/projects";

export default async function WorkWithMePage() {
  const selectedProjects = getProjectsByTitle(FREELANCE.selectedProjectTitles);
  const projectsWithStats = await getProjectsWithStats(selectedProjects);

  return <WorkWithMeContent projectsWithStats={projectsWithStats} />;
}
