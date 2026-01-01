/**
 * Centralized project data
 * All project information in one place
 */

import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "Data Wipe Mailer",
    description:
      "A simple, privacy-focused web app that helps Swedish citizens exercise their GDPR Article 17 right to erasure by sending deletion requests to Swedish data brokers like MrKoll, Ratsit, and others. Built with Next.js and hosted on Vercel, operating entirely client-side with no server data transmission. My LinkedIn post about this project received **2k+ likes** and **200k+ views** with overwhelmingly positive feedback.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
    owner: "joelhagvall",
    repo: "data-wipe-mailer",
    iconName: "shield",
    linkedinUrl:
      "https://www.linkedin.com/posts/joel-h%C3%A4gvall-810601147_sweden-is-one-of-the-few-countries-where-activity-7393215112825892864-88Yf?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOBw0wBEi2wQSiatRzxAKJ2zpXZfInx2iI",
    demoUrl: "https://data-wipe-mailer.vercel.app",
    image: "/media/data-wipe-mailer-screen.png",
  },
  {
    title: "Tor Onion Site Scraper",
    description:
      "Python-based web crawler developed as part of my bachelor thesis at Stockholm University, analyzing cybercrime services on the Tor network. Retrieves HTML pages, extracts data and saves them to CSV files for analysis using matplotlib and pandas.",
    technologies: ["Python", "Tor", "matplotlib", "pandas", "beautifulsoup"],
    owner: "joelhagvall",
    repo: "tor-onion-site-scraper",
    iconName: "code",
    publicationUrl:
      "https://su.diva-portal.org/smash/record.jsf?pid=diva2%3A1955538",
  },
  {
    title: "Carspotter",
    description:
      'Carspotter is a social media platform for car enthusiasts built by me and a group of students for the course "Project in Software Engineering" at Stockholm University, Spring term 2023. Users can upload images of cars they\'ve seen, keep track of them on a map, earn badges/achievements and look at profiles and the cars they\'ve seen on a grid.',
    technologies: [
      "Flutter",
      "Google Maps API",
      "Plate Recognizer API",
      "Firebase",
    ],
    owner: "joelhagvall",
    repo: "PVT15-Project",
    iconName: "smartphone",
  },
  {
    title: "Spotify Playlist Generator",
    description:
      "Python program that makes a random Spotify playlist, with a simple GUI.",
    technologies: ["Python", "PySimpleGUI", "Spotify API"],
    owner: "joelhagvall",
    repo: "spotify-random-playlist-generator",
    iconName: "headphones",
  },
];

/**
 * Helper to build GitHub URL from owner and repo
 */
export const getGitHubUrl = (owner: string, repo: string) =>
  `https://github.com/${owner}/${repo}`;
