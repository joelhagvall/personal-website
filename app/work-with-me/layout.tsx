import type { Metadata } from "next";
import { BREADCRUMBS, PAGE_METADATA } from "@/data/seo-metadata";
import { createBreadcrumbsJsonLd, freelanceServiceJsonLd } from "@/lib/seo";

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  BREADCRUMBS.home,
  BREADCRUMBS.freelance,
]);

export const metadata: Metadata = PAGE_METADATA.freelance;

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freelanceServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {children}
    </>
  );
}
