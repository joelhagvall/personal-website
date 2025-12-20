import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { getGitHubRepo } from "@/lib/github";
import { createSoftwareApplicationJsonLd } from "@/lib/seo";
import type { Project } from "@/types/project";

// Define projects with their GitHub repos
const projects: Project[] = [
  {
    title: "Data Wipe Mailer",
    description: "A simple, privacy-focused web app that helps Swedish citizens exercise their GDPR Article 17 right to erasure by sending deletion requests to Swedish data brokers like MrKoll, Ratsit, and others. Built with Next.js and hosted on Vercel, operating entirely client-side with no server data transmission. My LinkedIn post about this project received **2k+ likes** and **200k+ views** with overwhelmingly positive feedback.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    owner: "joelhagvall",
    repo: "data-wipe-mailer",
    iconName: "shield",
    linkedinUrl: "https://www.linkedin.com/posts/joel-h%C3%A4gvall-810601147_sweden-is-one-of-the-few-countries-where-activity-7393215112825892864-88Yf?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOBw0wBEi2wQSiatRzxAKJ2zpXZfInx2iI",
    demoUrl: "https://data-wipe-mailer.vercel.app",
    image: "/media/data-wipe-mailer-screen.png",
  },
  {
    title: "Tor Onion Site Scraper",
    description: "This project is a Python program that crawls websites on the Tor network, retrieves HTML pages, extracts classes and saves them to CSV files for easy analysis using packages such as matplotlib and pandas.",
    technologies: ["Python", "Tor", "matplotlib", "pandas", "beautifulsoup"],
    owner: "joelhagvall",
    repo: "tor-onion-site-scraper",
    iconName: "code",
  },
  {
    title: "Carspotter",
    description: "Carspotter is a social media platform for car enthusiasts built by me and a group of students for the course \"Project in Software Engineering\" at Stockholm University, Spring term 2023. Users can upload images of cars they've seen, keep track of them on a map, earn badges/achievements and look at profiles and the cars they've seen on a grid.",
    technologies: ["Flutter", "Google Maps API", "Plate Recognizer API", "Firebase"],
    owner: "joelhagvall",
    repo: "PVT15-Project",
    iconName: "smartphone",
  },
  {
    title: "Spotify Playlist Generator",
    description: "Python program that makes a random Spotify playlist, with a simple GUI.",
    technologies: ["Python", "PySimpleGUI", "Spotify API"],
    owner: "joelhagvall",
    repo: "spotify-random-playlist-generator",
    iconName: "headphones",
  },
];

export default async function Projects() {
  // Fetch GitHub stats for all projects
  const projectsWithStats = await Promise.all(
    projects.map(async (project) => {
      const repoData = await getGitHubRepo(project.owner, project.repo);
      return {
        ...project,
        githubUrl: `https://github.com/${project.owner}/${project.repo}`,
        stars: repoData?.stargazers_count,
        forks: repoData?.forks_count,
        linkedinUrl: project.linkedinUrl,
        demoUrl: project.demoUrl,
      };
    })
  );

  // Generate JSON-LD for each project
  const projectSchemas = projectsWithStats.map((project) =>
    createSoftwareApplicationJsonLd({
      name: project.title,
      description: project.description.replace(/\*\*/g, ''),
      url: project.githubUrl,
      applicationCategory: 'DeveloperApplication',
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
            {projectsWithStats.map((project, index) => (
              <ProjectCard
                key={project.repo}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                iconName={project.iconName}
                delay={index * 0.1}
                stars={project.stars}
                forks={project.forks}
                linkedinUrl={project.linkedinUrl}
                demoUrl={project.demoUrl}
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
