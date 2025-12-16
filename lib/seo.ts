export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joel Hägvall',
  jobTitle: 'Software Developer',
  url: 'https://joelhagvall.com',
  sameAs: [
    'https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/',
    'https://github.com/joelhagvall',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Stockholm',
    addressCountry: 'Sweden',
  },
  knowsAbout: [
    'Java',
    'Blockchain',
    'Web Development',
    'Python',
    'React',
    'Next.js',
    'Swift',
    'SwiftUI',
    'PHP',
    'MySQL',
    'Firebase',
    'Flutter',
    'Dart',
    'TypeScript',
    'JavaScript',
    'PySimpleGUI',
    'PostgreSQL',
    'Supabase',
    'TanStack Query',
    'TanStack Form',
  ],
} as const;

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://joelhagvall.com/',
  name: 'Joel Hägvall - Software Developer',
  alternateName: 'Joel Hägvall',
  description:
    'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
  author: {
    '@type': 'Person',
    name: 'Joel Hägvall',
  },
  inLanguage: 'en-US',
} as const;

export const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Joel Hägvall',
    alternateName: 'joelhagvall',
    description: 'Software developer based in Stockholm, Sweden. Experienced in React, TypeScript, Python and more.',
    image: 'https://joelhagvall.com/media/selfie.jpeg',
    jobTitle: 'Software Developer',
    url: 'https://joelhagvall.com',
    sameAs: [
      'https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/',
      'https://github.com/joelhagvall',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stockholm',
      addressCountry: 'Sweden',
    },
    knowsAbout: [
      'Java',
      'Blockchain',
      'Web Development',
      'Python',
      'React',
      'Next.js',
      'Swift',
      'SwiftUI',
      'TypeScript',
      'JavaScript',
    ],
  },
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
} as const;

// Breadcrumbs schema generator
export function createBreadcrumbsJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
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
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    url: project.url,
    codeRepository: project.url,
    programmingLanguage: project.programmingLanguage,
    author: {
      '@type': 'Person',
      name: 'Joel Hägvall',
      url: 'https://joelhagvall.com',
    },
    applicationCategory: project.applicationCategory,
  };
}

