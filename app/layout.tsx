import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "Joel Hägvall - Software Developer",
  description: 'Software developer based in Stockholm, Sweden specializing in blockchain technology, web development, and AI solutions. Experienced in React, Swift, Flutter, Python, and more.',
  
  keywords: [
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
    'Software Development',
    'Developer Sweden',
  ],
  
  openGraph: {
    title: 'Joel Hägvall - Software Developer',
    description: 'Professional portfolio showcasing development projects',
    url: 'https://yourdomain.com',
    siteName: 'Joel Hägvall - Software Developer',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  
  
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joel Hägvall',
    jobTitle: 'Software Developer',
    url: 'https://yourdomain.com',
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
      'PySimpleGUI'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}