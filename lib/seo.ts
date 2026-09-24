/**
 * SEO JSON-LD schemas
 * Uses centralized data from data/site.ts
 */

import { FREELANCE } from "@/data/freelance";
import { OG_IMAGE, PERSON, SITE, SOCIAL, SKILLS } from "@/data/site";

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  url: SITE.url,
} as const;

const personEntity = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  alternateName: PERSON.alternateName,
  description: PERSON.description,
  jobTitle: PERSON.jobTitle,
  url: SITE.url,
  image: `${SITE.url}${PERSON.avatar}`,
  email: `mailto:${SOCIAL.email}`,
  sameAs: [SOCIAL.linkedin.url, SOCIAL.github.url, SOCIAL.huggingface.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSON.location.city,
    addressCountry: PERSON.location.countryCode,
  },
  worksFor: { "@type": "Organization", name: PERSON.employer },
  alumniOf: { "@type": "CollegeOrUniversity", name: PERSON.almaMater },
  knowsAbout: [...SKILLS],
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  ...personEntity,
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE.url}/`,
  name: SITE.name,
  alternateName: [PERSON.alternateName, "joelhagvall.com"],
  description: PERSON.description,
  publisher: personRef,
  inLanguage: SITE.language,
} as const;

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE.url}/about`,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: personEntity,
} as const;

export const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE.url}/contact`,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: personRef,
} as const;

export const freelanceServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${PERSON.name} Work With Me`,
  serviceType: "Software engineering",
  description: FREELANCE.metadata.description,
  url: `${SITE.url}/work-with-me`,
  areaServed: "Worldwide",
  provider: personRef,
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${SITE.url}/work-with-me`,
    availableLanguage: ["English"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Client work services",
    itemListElement: FREELANCE.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
} as const;

export function createFaqPageJsonLd(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Breadcrumbs schema generator
export function createBreadcrumbsJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Actual languages; everything else in a project's stack goes in keywords
const PROGRAMMING_LANGUAGES = new Set([
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "Swift",
  "Dart",
  "PHP",
  "C#",
  "SQL",
]);

// Projects with a public repo are SoftwareSourceCode, the rest CreativeWork
export function createProjectJsonLd(project: {
  name: string;
  description: string;
  technologies: readonly string[];
  githubUrl?: string;
  demoUrl?: string;
}) {
  const programmingLanguage = project.technologies.filter((t) =>
    PROGRAMMING_LANGUAGES.has(t)
  );
  return {
    "@context": "https://schema.org",
    "@type": project.githubUrl ? "SoftwareSourceCode" : "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.demoUrl ?? project.githubUrl ?? `${SITE.url}/projects`,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.githubUrl && programmingLanguage.length > 0
      ? { programmingLanguage }
      : {}),
    keywords: project.technologies.join(", "),
    author: personRef,
  };
}

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
}) {
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    keywords: post.tags,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: OG_IMAGE.url,
    inLanguage: SITE.language,
    isPartOf: { "@id": WEBSITE_ID },
    author: personRef,
    publisher: personRef,
  };
}

export function blogJsonLd(posts: readonly { slug: string; title: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${PERSON.name} - Blog`,
    url: `${SITE.url}/blog`,
    isPartOf: { "@id": WEBSITE_ID },
    author: personRef,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE.url}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
}
