/**
 * SEO JSON-LD schemas
 * Uses centralized data from data/site.ts
 */

import { PERSON, SITE, SOCIAL, SKILLS } from "@/data/site";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  jobTitle: PERSON.jobTitle,
  url: SITE.url,
  sameAs: [SOCIAL.linkedin.url, SOCIAL.github.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSON.location.city,
    addressCountry: PERSON.location.country,
  },
  knowsAbout: [...SKILLS],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: `${SITE.url}/`,
  name: SITE.title,
  alternateName: PERSON.name,
  description: PERSON.description,
  author: {
    "@type": "Person",
    name: PERSON.name,
  },
  inLanguage: "en-US",
} as const;

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    description: PERSON.description,
    image: `${SITE.url}${PERSON.avatar}`,
    jobTitle: PERSON.jobTitle,
    url: SITE.url,
    sameAs: [SOCIAL.linkedin.url, SOCIAL.github.url],
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.location.city,
      addressCountry: PERSON.location.country,
    },
    knowsAbout: SKILLS.slice(0, 10),
  },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
} as const;

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

// SoftwareApplication schema generator
export function createSoftwareApplicationJsonLd(project: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  programmingLanguage?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.url,
    codeRepository: project.url,
    programmingLanguage: project.programmingLanguage,
    author: {
      "@type": "Person",
      name: PERSON.name,
      url: SITE.url,
    },
    applicationCategory: project.applicationCategory,
  };
}
