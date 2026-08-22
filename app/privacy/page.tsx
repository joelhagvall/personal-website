import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRIVACY_CONTENT } from "@/data/content";
import { PAGE_METADATA } from "@/data/seo-metadata";

export const metadata: Metadata = PAGE_METADATA.privacy;

export default function PrivacyPage() {
  const content = PRIVACY_CONTENT;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{content.pageTitle}</h1>
        <p className="text-lg text-muted-foreground">{content.subtitle}</p>
        <p className="text-sm text-muted-foreground mt-2">{content.updated}</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <p>{content.intro}</p>
          </CardContent>
        </Card>

        {content.sections.map((section) => (
          <Card key={section.heading}>
            <CardHeader>
              <CardTitle as="h2">{section.heading}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
