import type { Metadata } from 'next';
import { profilePageJsonLd, createBreadcrumbsJsonLd } from '@/lib/seo';

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  { name: 'Home', url: 'https://joelhagvall.com' },
  { name: 'About', url: 'https://joelhagvall.com/about' },
]);

export const metadata: Metadata = {
  title: 'About – Joel Hägvall',
  description: 'Learn more about Joel Hägvall – software developer based in Stockholm.',
  alternates: {
    canonical: 'https://joelhagvall.com/about',
    languages: {
      'en': 'https://joelhagvall.com/about',
      'x-default': 'https://joelhagvall.com/about',
    },
  },
  openGraph: {
    title: 'About – Joel Hägvall',
    description: 'Learn more about Joel Hägvall – software developer based in Stockholm.',
    url: 'https://joelhagvall.com/about',
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
    title: 'About – Joel Hägvall',
    description: 'Learn more about Joel Hägvall – software developer based in Stockholm.',
    images: ['/media/selfie.jpeg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {children}
    </>
  );
}


