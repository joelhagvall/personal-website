import type { Metadata } from "next";
import { createBreadcrumbsJsonLd } from "@/lib/seo";
import { PAGE_METADATA, BREADCRUMBS } from "@/data/seo-metadata";

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  BREADCRUMBS.home,
  BREADCRUMBS.resume,
]);

export const metadata: Metadata = PAGE_METADATA.resume;

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
