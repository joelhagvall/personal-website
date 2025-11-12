import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { FooterClient } from "@/components/FooterClient";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { getGitHubRepo } from "@/lib/github";

// Define projects with their GitHub repos
const projects = [
  {
    title: "Data Wipe Mailer",
    description: "A simple, privacy-focused web app that helps Swedish citizens exercise their GDPR Article 17 right to erasure by sending deletion requests to Swedish data brokers like MrKoll, Ratsit, and others. Built with Next.js and operates entirely client-side with no server data transmission.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    owner: "joelhagvall",
    repo: "data-wipe-mailer",
    iconName: "shield" as const,
  },
  {
    title: "Tor Onion Site Scraper",
    description: "This project is a Python program that crawls websites on the Tor network, retrieves HTML pages, extracts classes and saves them to CSV files for easy analysis using packages such as matplotlib and pandas.",
    technologies: ["Python", "Tor", "matplotlib", "pandas", "beautifulsoup"],
    owner: "joelhagvall",
    repo: "tor-onion-site-scraper",
    iconName: "code" as const,
  },
  {
    title: "Carspotter",
    description: "Carspotter is a social media platform for car enthusiasts built by me and a group of students for the course \"Project in Software Engineering\" at Stockholm University, Spring term 2023. Users can upload images of cars they've seen, keep track of them on a map, earn badges/achievements and look at profiles and the cars they've seen on a grid.",
    technologies: ["Flutter", "Google Maps API", "Plate Recognizer API", "Firebase"],
    owner: "joelhagvall",
    repo: "PVT15-Project",
    iconName: "smartphone" as const,
  },
  {
    title: "Spotify Playlist Generator",
    description: "Python program that makes a random Spotify playlist, with a simple GUI.",
    technologies: ["Python", "PySimpleGUI", "Spotify API"],
    owner: "joelhagvall",
    repo: "spotify-random-playlist-generator",
    iconName: "headphones" as const,
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
      };
    })
  );

  return (
    <main className="min-h-screen bg-background text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none">
          <StarsBackground />
          <ShootingStars />
        </div>

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
              />
            ))}
          </div>
        </div>
      </div>
      <FooterClient />
    </main>
  );
}