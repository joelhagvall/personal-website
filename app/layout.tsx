import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BackgroundStars } from "@/components/BackgroundStars";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { PAGE_METADATA } from "@/data/seo-metadata";

const isVercelDeployment = process.env["VERCEL"] === "1";

export const metadata: Metadata = PAGE_METADATA.home;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vercel.live https://va.vercel-scripts.com https://github-contributions-api.jogruber.de; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=(), interest-cohort=()"
        />
        <link rel="icon" href="/favicon_round.png?v=2" type="image/png" />
        <link
          rel="shortcut icon"
          href="/favicon_round.png?v=2"
          type="image/png"
        />
        <link rel="alternate icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
