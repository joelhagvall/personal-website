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
  description: 'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
  
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
    'Software Development',
    'Developer Sweden',
  ],
  
  openGraph: {
    title: 'Joel Hägvall - Software Developer',
    description: 'Software developer based in Stockholm, Sweden. Experienced in Java, Python, Swift, React and more.',
    url: 'https://joel-hagvall.vercel.app',
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
  
  alternates: {
    canonical: 'https://joel-hagvall.vercel.app',
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
    url: 'https://joel-hagvall.vercel.app',
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