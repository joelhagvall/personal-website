import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { BackgroundStars } from "@/components/BackgroundStars";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { PAGE_METADATA } from "@/data/seo-metadata";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const isVercelDeployment = process.env["VERCEL"] === "1";

export const metadata: Metadata = PAGE_METADATA.home;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        {/* Security headers live in vercel.json; scripts/add-csp.ts adds the hashed script CSP. */}
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Joel Hägvall - Blog"
          href="/feed.xml"
        />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Skip to main content link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="fixed inset-0 z-0 pointer-events-none bg-background">
          <BackgroundStars overlay />
        </div>
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
          {isVercelDeployment ? (
            <>
              <Analytics />
              <SpeedInsights />
            </>
          ) : null}
        </main>
      </body>
    </html>
  );
}
