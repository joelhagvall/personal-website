import type { Metadata } from 'next';
import { createBreadcrumbsJsonLd } from '@/lib/seo';

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  { name: 'Home', url: 'https://joelhagvall.com' },
  { name: 'Projects', url: 'https://joelhagvall.com/projects' },
]);

export const metadata: Metadata = {
  title: 'Projects – Joel Hägvall',
  description: 'A selection of Joel Hägvall’s personal and academic projects.',
  alternates: {
    canonical: 'https://joelhagvall.com/projects',
    languages: {
      'en': 'https://joelhagvall.com/projects',
      'x-default': 'https://joelhagvall.com/projects',
    },
  },
  openGraph: {
    title: 'Projects – Joel Hägvall',
    description: 'A selection of Joel Hägvall’s personal and academic projects.',
    url: 'https://joelhagvall.com/projects',
    siteName: 'Joel Hägvall - Software Developer',
    type: 'website',
    images: [
      {
        url: '/media/selfie.jpeg',
        width: 1200,
        height: 630,
        alt: 'Joel Hägvall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects – Joel Hägvall',
    description: 'A selection of Joel Hägvall’s personal and academic projects.',
    images: ['/media/selfie.jpeg'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {children}
    </>
  );
}


