import type { Metadata } from "next";
import { profilePageJsonLd, createBreadcrumbsJsonLd } from "@/lib/seo";
import { PAGE_METADATA, BREADCRUMBS } from "@/data/seo-metadata";

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  BREADCRUMBS.home,
  BREADCRUMBS.about,
]);

export const metadata: Metadata = PAGE_METADATA.about;

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
