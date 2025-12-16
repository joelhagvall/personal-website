import type { Metadata } from 'next';
import { createBreadcrumbsJsonLd } from '@/lib/seo';

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  { name: 'Home', url: 'https://joelhagvall.com' },
  { name: 'Resume', url: 'https://joelhagvall.com/resume' },
]);

export const metadata: Metadata = {
  title: 'Resume – Joel Hägvall',
  description: 'Resume and experience of Joel Hägvall – software developer based in Stockholm.',
  alternates: {
    canonical: 'https://joelhagvall.com/resume',
    languages: {
      'en': 'https://joelhagvall.com/resume',
      'x-default': 'https://joelhagvall.com/resume',
    },
  },
  openGraph: {
    title: 'Resume – Joel Hägvall',
    description: 'Resume and experience of Joel Hägvall – software developer based in Stockholm.',
    url: 'https://joelhagvall.com/resume',
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
    title: 'Resume – Joel Hägvall',
    description: 'Resume and experience of Joel Hägvall – software developer based in Stockholm.',
    images: ['/media/selfie.jpeg'],
  },
};

export default function ResumeLayout({
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


