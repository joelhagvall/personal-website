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

