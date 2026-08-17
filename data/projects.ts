/**
 * Centralized project data
 * All project information in one place
 */

import type { Project } from "@/types/project";
import messages from "@/messages/en.json";

const projectCopy = messages.projects.items;

export const PROJECTS: Project[] = [
  {
    title: projectCopy.resiliaAI.title,
    description: projectCopy.resiliaAI.summary,
    technologies: [
      "React",
      "TypeScript",
      "TanStack",
      "Supabase",
      "PostgreSQL",
      "Vercel AI SDK",
      "OpenRouter",
      "Berget AI",
      "Hugging Face",
      "RAG",
      "AI Agents",
    ],
    iconName: "shield",
    status: projectCopy.resiliaAI.status,
    prominence: "featured",
    caseStudy: {
      problem: projectCopy.resiliaAI.problem,
      built: projectCopy.resiliaAI.built,
      proof: [{ text: projectCopy.resiliaAI.proof }],
    },
  },
  {
    title: projectCopy.maskera.title,
    description: projectCopy.maskera.summary,
    technologies: [
      "TypeScript",
      "ONNX",
      "Transformers.js",
      "WebGPU",
      "Hugging Face",
      "PyTorch",
    ],
    iconName: "shield",
    status: projectCopy.maskera.status,
    prominence: "featured",
    caseStudy: {
      problem: projectCopy.maskera.problem,
      built: projectCopy.maskera.built,
      proof: [{ text: projectCopy.maskera.proof }],
    },
    demoUrl: "https://maskera.dev",
    npmUrl: "https://www.npmjs.com/package/maskera",
    modelUrl: "https://huggingface.co/joelhagvall/maskera-sv-ner",
    image: "/media/maskera-demo.png",
    imagePriority: true,
  },
  {
    title: projectCopy.dataWipeMailer.title,
    description: projectCopy.dataWipeMailer.summary,
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    owner: "joelhagvall",
    repo: "data-wipe-mailer",
    iconName: "shield",
    prominence: "featured",
    caseStudy: {
      problem: projectCopy.dataWipeMailer.problem,
      built: projectCopy.dataWipeMailer.built,
      proof: [
        {
          text: projectCopy.dataWipeMailer.proof.dfri,
          source: {
            label: messages.projects.linkLabels.dfriReference,
            url: "https://www.dfri.se/sv/engagera-dig/hur-tar-jag-bort/",
            iconName: "dfri",
          },
        },
        {
          text: projectCopy.dataWipeMailer.proof.redditEarlyFeedback,
          source: {
            label: messages.projects.linkLabels.redditEarlyFeedback,
            url: "https://www.reddit.com/r/sweden/comments/1qqd4jp/hur_jag_raderade_mig_fr%C3%A5n_sidor_som_ratsit_mrkoll/",
            iconName: "reddit",
          },
        },
        {
          text: projectCopy.dataWipeMailer.proof.redditIndependentShare,
          source: {
            label: messages.projects.linkLabels.redditIndependentShare,
            url: "https://www.reddit.com/r/sweden/comments/1vomcas/v%C3%A4nlig_p%C3%A5minnelse_s%C3%A5_g%C3%B6r_du_f%C3%B6r_att_radera_din/",
            iconName: "reddit",
          },
        },
        {
          text: projectCopy.dataWipeMailer.proof.linkedin,
          source: {
            label: messages.projects.linkLabels.linkedinLaunch,
            url: "https://www.linkedin.com/posts/joel-h%C3%A4gvall-810601147_sweden-is-one-of-the-few-countries-where-activity-7393215112825892864-88Yf?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOBw0wBEi2wQSiatRzxAKJ2zpXZfInx2iI",
            iconName: "linkedin",
          },
        },
      ],
    },
    demoUrl: "https://data-wipe-mailer.vercel.app",
    image: "/media/data-wipe-mailer-screen.png",
  },
  {
    title: projectCopy.jarvis.title,
    description: projectCopy.jarvis.summary,
    technologies: ["SwiftUI", "Ollama", "MCP"],
    owner: "joelhagvall",
    repo: "jarvis-chat",
    iconName: "bot",
    prominence: "supporting",
    caseStudy: {
      problem: projectCopy.jarvis.problem,
      built: projectCopy.jarvis.built,
      proof: [{ text: projectCopy.jarvis.proof }],
    },
    image:
      "https://raw.githubusercontent.com/joelhagvall/jarvis-chat/main/screenshots/4.png",
  },
  {
    title: projectCopy.torScraper.title,
    description: projectCopy.torScraper.summary,
    technologies: ["Python", "Tor", "matplotlib", "pandas", "beautifulsoup"],
    owner: "joelhagvall",
    repo: "tor-onion-site-scraper",
    iconName: "code",
    prominence: "supporting",
    caseStudy: {
      problem: projectCopy.torScraper.problem,
      built: projectCopy.torScraper.built,
      proof: [{ text: projectCopy.torScraper.proof }],
    },
    publicationUrl:
      "https://su.diva-portal.org/smash/record.jsf?pid=diva2%3A1955538",
  },
  {
    title: projectCopy.carspotter.title,
    description: projectCopy.carspotter.summary,
    technologies: [
      "Flutter",
      "Google Maps API",
      "Plate Recognizer API",
      "Firebase",
    ],
    owner: "joelhagvall",
    repo: "PVT15-Project",
    iconName: "smartphone",
    prominence: "earlier",
  },
  {
    title: projectCopy.spotifyPlaylistGenerator.title,
    description: projectCopy.spotifyPlaylistGenerator.summary,
    technologies: ["Python", "PySimpleGUI", "Spotify API"],
    owner: "joelhagvall",
    repo: "spotify-random-playlist-generator",
    iconName: "headphones",
    prominence: "earlier",
  },
];

/**
 * Helper to build GitHub URL from owner and repo
 */
export const getGitHubUrl = (owner: string, repo: string) =>
  `https://github.com/${owner}/${repo}`;
