/**
 * Central site configuration
 * All basic site and personal information in one place
 */

export const SITE = {
  url: "https://joelhagvall.com",
  name: "Joel Hägvall",
  title: "Joel Hägvall - Software Developer Based in Stockholm, Sweden",
  locale: "en_US",
  language: "en",
} as const;

export const PERSON = {
  name: "Joel Hägvall",
  alternateName: "joelhagvall",
  jobTitle: "Software Developer",
  age: 26,
  birthYear: 2000,
  bio: "I'm a software developer with a big interest in technology and how it can be used to make a difference.",
  shortBio: "Software developer based in Stockholm, Sweden.",
  description: "Software developer based in Stockholm, Sweden. Experienced in building web and mobile applications with Java, Python, Swift, React, Next.js and more.",
  avatar: "/media/selfie.jpeg",
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
