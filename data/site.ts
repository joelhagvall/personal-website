/**
 * Central site configuration
 * All basic site and personal information in one place
 */

export const SITE = {
  url: "https://joelhagvall.com",
  name: "Joel Hägvall",
  title: "Joel Hägvall - Software Engineer Based in Stockholm, Sweden",
  locale: "en_US",
  language: "en",
} as const;

export const PERSON = {
  name: "Joel Hägvall",
  alternateName: "joelhagvall",
  jobTitle: "Software Engineer",
  age: 26,
  birthYear: 2000,
  bio: "I'm a software engineer building enterprise systems, developer tooling, workflow automation and privacy-focused AI products.",
  shortBio: "Software engineer based in Stockholm, Sweden.",
  description: "Software engineer based in Stockholm, Sweden, working across TypeScript, React, .NET/C#, developer tooling, workflow automation and AI products.",
  avatar: "/media/selfie.webp",
  location: {
    city: "Stockholm",
    country: "Sweden",
    flag: "🇸🇪",
    description: "Born and raised.",
    coordinates: {
      lat: "59.3293° N",
      lng: "18.0686° E",
    },
  },
} as const;

// Generated 1200x630 OG image (app/opengraph-image.tsx) — correct dimensions
// for link previews, unlike the square avatar photo
export const OG_IMAGE = {
  url: `${SITE.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: PERSON.name,
} as const;

export const SOCIAL = {
  github: {
    url: "https://github.com/joelhagvall",
    username: "joelhagvall",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/",
  },
  email: "work@joelhagvall.com",
  freelanceEmail: "work@joelhagvall.com",
  buymeacoffee: {
    url: "https://buymeacoffee.com/joelhagvall",
  },
} as const;

export const SKILLS = [
  "Java",
  "Blockchain",
  "Web Development",
  "Python",
  "React",
  "Next.js",
  "Swift",
  "SwiftUI",
  "PHP",
  "MySQL",
  "Firebase",
  "Flutter",
  "Dart",
  "TypeScript",
  "JavaScript",
  "PySimpleGUI",
  "PostgreSQL",
  "Supabase",
  "TanStack Query",
  "TanStack Form",
] as const;

export const SEO_KEYWORDS = [
  PERSON.name,
  "Hägvall",
  "Software Developer Stockholm",
  ...SKILLS.filter((s) => !["Blockchain", "Web Development", "PySimpleGUI"].includes(s)),
  "Software Development",
  "Developer Sweden",
] as const;
