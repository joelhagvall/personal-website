import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { getProjectsWithStats } from "@/lib/projects";
import { createSoftwareApplicationJsonLd } from "@/lib/seo";

export default async function Projects() {
  const projectsWithStats = await getProjectsWithStats();

  // Generate JSON-LD for each project
  const projectSchemas = projectsWithStats.map((project) =>
    createSoftwareApplicationJsonLd({
      name: project.title,
      description: project.description.replace(/\*\*/g, ""),
      url: project.githubUrl,
      applicationCategory: "DeveloperApplication",
      programmingLanguage: project.technologies,
    })
  );

  return (
    <>
      {projectSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen text-white p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <ProjectsHeader />

            <div className="space-y-6">
              {projectsWithStats.map((project) => (
                <ProjectCard
                  key={project.repo}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  iconName={project.iconName}
                  stars={project.stars}
                  forks={project.forks}
                  linkedinUrl={project.linkedinUrl}
                  demoUrl={project.demoUrl}
                  publicationUrl={project.publicationUrl}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer mailMode="copy" />
      </main>
    </>
  );
}
