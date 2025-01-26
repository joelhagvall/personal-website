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
  title: "Joel Hägvall's Website",
  description: 'Personal website of Joel Hägvall',

  keywords: [
    'Joel Hägvall',
    'Hägvall',
    'Software Developer',
    'Blockchain',
    'tor onion site scraper',
    'Web Development',
    'React',
    'Next.js',
    'AI',
    'Sweden',
    'Stockholm',
    'Java',
    'Python',
    'PHP',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}