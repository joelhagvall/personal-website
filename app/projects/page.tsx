import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { PROJECTS_CONTENT } from "@/data/content";
import { getProjectsWithStats } from "@/lib/projects";
import { createSoftwareApplicationJsonLd } from "@/lib/seo";
import { SITE } from "@/data/site";

export default async function Projects() {
  const projectsWithStats = await getProjectsWithStats();
  const featuredProjects = projectsWithStats.filter(
    (project) => project.prominence === "featured"
  );
  const supportingProjects = projectsWithStats.filter(
    (project) => project.prominence === "supporting"
  );
  const earlierProjects = projectsWithStats.filter(
    (project) => project.prominence === "earlier"
  );

  // Generate JSON-LD for each project
  const projectSchemas = projectsWithStats.map((project) =>
    createSoftwareApplicationJsonLd({
      name: project.title,
      description: project.description.replace(/\*\*/g, ""),
      url: project.githubUrl ?? `${SITE.url}/projects`,
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
      <main className="min-h-screen p-8 text-white md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 space-y-16">
            <ProjectsHeader />

            <section
              aria-labelledby="selected-case-studies"
              className="space-y-6"
            >
              <div className="max-w-3xl space-y-2">
                <h2
                  id="selected-case-studies"
                  className="text-3xl font-semibold tracking-tight"
                >
                  {PROJECTS_CONTENT.page.featuredTitle}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {PROJECTS_CONTENT.page.featuredDescription}
                </p>
              </div>
              <div className="space-y-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.repo ?? project.title} {...project} />
                ))}
              </div>
            </section>

            <section aria-labelledby="technical-work" className="space-y-6">
              <div className="max-w-3xl space-y-2">
                <h2
                  id="technical-work"
                  className="text-3xl font-semibold tracking-tight"
                >
                  {PROJECTS_CONTENT.page.supportingTitle}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {PROJECTS_CONTENT.page.supportingDescription}
                </p>
              </div>
              <div className="space-y-6">
                {supportingProjects.map((project) => (
                  <ProjectCard key={project.repo ?? project.title} {...project} />
                ))}
              </div>
            </section>

            <section aria-labelledby="earlier-projects" className="space-y-6">
              <div className="max-w-3xl space-y-2">
                <h2
                  id="earlier-projects"
                  className="text-3xl font-semibold tracking-tight"
                >
                  {PROJECTS_CONTENT.page.earlierTitle}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {PROJECTS_CONTENT.page.earlierDescription}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {earlierProjects.map((project) => (
                  <ProjectCard key={project.repo ?? project.title} {...project} />
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-white/10 bg-white/[0.04] p-8 md:flex md:items-center md:justify-between md:gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {PROJECTS_CONTENT.page.ctaTitle}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {PROJECTS_CONTENT.page.ctaDescription}
                </p>
              </div>
              <Link
                href="/work-with-me"
                className="mt-6 inline-flex flex-shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-gray-200 md:mt-0"
              >
                {PROJECTS_CONTENT.page.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>
        <Footer mailMode="copy" />
      </main>
    </>
  );
}
