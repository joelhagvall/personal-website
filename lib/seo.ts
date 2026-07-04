/**
 * SEO JSON-LD schemas
 * Uses centralized data from data/site.ts
 */

import { FREELANCE } from "@/data/freelance";
import { OG_IMAGE, PERSON, SITE, SOCIAL, SKILLS } from "@/data/site";

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

export const freelanceServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${PERSON.name} Work With Me`,
  description: FREELANCE.metadata.description,
  url: `${SITE.url}/work-with-me`,
  areaServed: "Worldwide",
  availableLanguage: ["English"],
  provider: {
    "@type": "Person",
    name: PERSON.name,
    url: SITE.url,
    jobTitle: PERSON.jobTitle,
    sameAs: [SOCIAL.linkedin.url, SOCIAL.github.url],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SOCIAL.freelanceEmail,
    areaServed: "Worldwide",
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

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}) {
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    keywords: post.tags,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: OG_IMAGE.url,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: PERSON.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Person",
      name: PERSON.name,
      url: SITE.url,
    },
  };
}
