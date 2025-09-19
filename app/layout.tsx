import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joelhagvall.com'),
  title: "Joel Hägvall - Software Developer",
  description: 'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
  icons: {
    icon: [
      { url: '/favicon_round.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
  },
  
  keywords: [
    'Joel Hägvall',
    'Hägvall',
    'Software Developer Stockholm',
    'Next.js',
    'React',
    'Python',
    'Java',
    'Swift',
    'SwiftUI',
    'PHP',
    'MySQL',
    'Firebase',
    'Flutter',
    'Dart',
    'TypeScript',
    'JavaScript',
    'Software Development',
    'Developer Sweden',
    'PostgreSQL',
    'Supabase',
    'TanStack Query',
    'TanStack Form',
  ],
  
  openGraph: {
    title: 'Joel Hägvall - Software Developer',
    description: 'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
    url: 'https://joelhagvall.com',
    siteName: 'Joel Hägvall - Software Developer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/media/selfie.jpeg',
        width: 1200,
        height: 630,
        alt: 'Joel Hägvall'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Hägvall - Software Developer',
    description: 'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
    images: ['/media/selfie.jpeg'],
  },
  
  alternates: {
    canonical: 'https://joelhagvall.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joel Hägvall',
    jobTitle: 'Software Developer',
    url: 'https://joelhagvall.com',
    sameAs: [
      'https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/',
      'https://github.com/joelhagvall'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stockholm',
      addressCountry: 'Sweden'
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
      'TanStack Form'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://joelhagvall.com/',
    name: 'Joel Hägvall - Software Developer',
    alternateName: 'Joel Hägvall',
    description: 'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
    author: {
      '@type': 'Person',
      name: 'Joel Hägvall'
    },
    inLanguage: 'en-US'
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vercel.live https://va.vercel-scripts.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
        <link rel="icon" href="/favicon_round.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/favicon_round.png?v=2" type="image/png" />
        <link rel="alternate icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main role="main">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}