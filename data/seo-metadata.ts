/**
 * Centralized SEO metadata for all pages
 * Single source of truth for titles, descriptions, and Open Graph data
 */

import type { Metadata } from "next";
import { OG_IMAGE, PERSON, SITE } from "./site";
import { FREELANCE } from "./freelance";
import { PROJECTS_CONTENT } from "./content";

// ============================================
// Helper functions
// ============================================
const createPageTitle = (page: string, suffix?: string) =>
  suffix ? `${page} - ${PERSON.name} | ${suffix}` : `${page} - ${PERSON.name} | Software Engineer`;

const createOpenGraph = (
  title: string,
  description: string,
  path: string = ""
) => ({
  title,
  description,
  url: `${SITE.url}${path}`,
  siteName: SITE.name,
  type: "website" as const,
  locale: SITE.locale,
  images: [OG_IMAGE],
});

const createTwitter = (title: string, description: string) => ({
  card: "summary_large_image" as const,
  title,
  description,
  images: [OG_IMAGE.url],
});

const createAlternates = (path: string = "") => ({
  canonical: `${SITE.url}${path}`,
  languages: {
    en: `${SITE.url}${path}`,
    "x-default": `${SITE.url}${path}`,
  },
  types: {
    "text/markdown": `${SITE.url}${path === "" ? "/index" : path}.md`,
  },
});

// ============================================
// Page Metadata
// ============================================
export const PAGE_METADATA = {
  home: {
    title: SITE.title,
    description: PERSON.description,
    metadataBase: new URL(SITE.url),
    icons: {
      icon: [
        { url: "/favicon_round.png", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: "/apple-touch-icon.png",
    },
    keywords: [
      PERSON.name,
      "Hägvall",
      "Software Developer Stockholm",
      "Next.js",
      "React",
      "Python",
      "Java",
      "Swift",
      "SwiftUI",
      "PHP",
      "MySQL",
      "Firebase",
      "Flutter",
      "Dart",
      "TypeScript",
      "JavaScript",
      "Software Development",
      "Developer Sweden",
      "PostgreSQL",
      "Supabase",
      "TanStack Query",
      "TanStack Form",
    ],
    openGraph: createOpenGraph(SITE.title, PERSON.description),
    twitter: createTwitter(SITE.title, PERSON.description),
    alternates: createAlternates(),
  } satisfies Metadata,

  about: {
    title: createPageTitle("About"),
    description: `About ${PERSON.name}, a software engineer in ${PERSON.location.city} who builds .NET and TypeScript tooling at Scania and made the open-source Maskera.`,
    alternates: createAlternates("/about"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/about");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  projects: {
    title: createPageTitle("Projects"),
    description: PROJECTS_CONTENT.page.metadataDescription,
    alternates: createAlternates("/projects"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/projects");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  freelance: {
    title: createPageTitle("Work With Me", "Product Development"),
    description: FREELANCE.metadata.description,
    alternates: createAlternates("/work-with-me"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/work-with-me");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  resume: {
    title: createPageTitle("Resume"),
    description: `Resume of ${PERSON.name}: software developer at Scania, creator of the open-source Maskera and sole engineer at ResiliaAI. B.Sc. from Stockholm University.`,
    alternates: createAlternates("/resume"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/resume");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  contact: {
    title: createPageTitle("Contact"),
    description: `Get in touch with ${PERSON.name} by email, GitHub or LinkedIn. Based in ${PERSON.location.city}, ${PERSON.location.country}, available for freelance product development work.`,
    alternates: createAlternates("/contact"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/contact");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  privacy: {
    title: createPageTitle("Privacy"),
    description: `Privacy policy for joelhagvall.com: what data is collected, how it is used, and what is never collected on ${PERSON.name}'s personal website.`,
    alternates: createAlternates("/privacy"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/privacy");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  blog: {
    title: createPageTitle("Blog", "Thoughts & Ideas"),
    description: `Posts by ${PERSON.name} on automation, AI and building software, written by a software engineer in ${PERSON.location.city}.`,
    alternates: createAlternates("/blog"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/blog");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,
} as const;

// ============================================
// Breadcrumb configurations
// ============================================
export const BREADCRUMBS = {
  home: { name: "Home", url: SITE.url },
  about: { name: "About", url: `${SITE.url}/about` },
  freelance: { name: "Work with me", url: `${SITE.url}/work-with-me` },
  projects: { name: "Projects", url: `${SITE.url}/projects` },
  resume: { name: "Resume", url: `${SITE.url}/resume` },
  blog: { name: "Blog", url: `${SITE.url}/blog` },
  contact: { name: "Contact", url: `${SITE.url}/contact` },
  privacy: { name: "Privacy", url: `${SITE.url}/privacy` },
  securityPolicy: { name: "Security policy", url: `${SITE.url}/security-policy` },
} as const;
