import type { Metadata } from "next";
import { createBreadcrumbsJsonLd } from "@/lib/seo";
import { PAGE_METADATA, BREADCRUMBS } from "@/data/seo-metadata";

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  BREADCRUMBS.home,
  BREADCRUMBS.projects,
]);

export const metadata: Metadata = PAGE_METADATA.projects;

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
