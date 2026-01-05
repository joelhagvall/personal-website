/**
 * Centralized SEO metadata for all pages
 * Single source of truth for titles, descriptions, and Open Graph data
 */

import type { Metadata } from "next";
import { PERSON, SITE } from "./site";

// ============================================
// Helper functions
// ============================================
const createPageTitle = (page: string) => `${page} – ${PERSON.name}`;

const createOpenGraph = (
  title: string,
  description: string,
  path: string = ""
) => ({
  title,
  description,
  url: `${SITE.url}${path}`,
  siteName: SITE.title,
  type: "website" as const,
  locale: SITE.locale,
  images: [
    {
      url: PERSON.avatar,
      width: 1200,
      height: 630,
      alt: PERSON.name,
    },
  ],
});

const createTwitter = (title: string, description: string) => ({
  card: "summary_large_image" as const,
  title,
  description,
  images: [PERSON.avatar],
});

const createAlternates = (path: string = "") => ({
  canonical: `${SITE.url}${path}`,
  languages: {
    en: `${SITE.url}${path}`,
    "x-default": `${SITE.url}${path}`,
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
    description: `Learn more about ${PERSON.name} – software developer based in ${PERSON.location.city}.`,
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
    description: `A selection of ${PERSON.name}'s personal and academic projects.`,
    alternates: createAlternates("/projects"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/projects");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  resume: {
    title: createPageTitle("Resume"),
    description: `Resume and experience of ${PERSON.name} – software developer based in ${PERSON.location.city}.`,
    alternates: createAlternates("/resume"),
    get openGraph() {
      return createOpenGraph(this.title as string, this.description as string, "/resume");
    },
    get twitter() {
      return createTwitter(this.title as string, this.description as string);
    },
  } satisfies Metadata,

  blog: {
    title: createPageTitle("Blog"),
    description: `Thoughts, ideas, and things ${PERSON.name} has learned along the way.`,
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
  projects: { name: "Projects", url: `${SITE.url}/projects` },
  resume: { name: "Resume", url: `${SITE.url}/resume` },
  blog: { name: "Blog", url: `${SITE.url}/blog` },
} as const;
