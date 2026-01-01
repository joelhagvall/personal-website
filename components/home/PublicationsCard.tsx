"use client";

import { FileText } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { publications } from "@/data/publications";
import { LINK_STYLES } from "@/lib/styles";
import { HOME_CONTENT, LABELS } from "@/data/content";

export function PublicationsCard() {
  const publication = publications[0];

  if (!publication) {
    return null;
  }

  return (
    <AnimatedCard delay={0.4} className="col-span-full">
      <h2 className="text-2xl font-semibold mb-4">
        {HOME_CONTENT.publications.heading}
      </h2>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">{publication.title}</h3>
        <p className="text-muted-foreground text-lg">
          {publication.description}
        </p>
        <p className="text-muted-foreground text-sm">
          {HOME_CONTENT.publications.urnLabel}{" "}
          <a
            href={publication.urnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_STYLES.primary}
          >
            https://urn.kb.se/resolve?urn={publication.urn}
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_STYLES.button}
          >
            <FileText className="h-4 w-4" />
            {LABELS.viewPdf}
          </a>
        </div>
      </div>
    </AnimatedCard>
  );
}
