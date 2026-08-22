import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONTACT_CONTENT } from "@/data/content";
import { PAGE_METADATA } from "@/data/seo-metadata";

export const metadata: Metadata = PAGE_METADATA.contact;

export default function ContactPage() {
  const content = CONTACT_CONTENT;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{content.pageTitle}</h1>
        <p className="text-lg text-muted-foreground">{content.subtitle}</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <p>{content.intro}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle as="h2">{content.channels.heading}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">{content.channels.email.label}</h3>
              <p className="text-sm">
                <a
                  href={`mailto:${content.channels.email.value}`}
                  className="text-primary hover:underline"
                >
                  {content.channels.email.value}
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                {content.channels.email.description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">{content.channels.github.label}</h3>
              <p className="text-sm">
                <a
                  href={content.channels.github.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {content.channels.github.value}
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                {content.channels.github.description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {content.channels.linkedin.label}
              </h3>
              <p className="text-sm">
                <a
                  href={content.channels.linkedin.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {content.channels.linkedin.value}
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                {content.channels.linkedin.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle as="h2">{content.freelance.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {content.freelance.text}{" "}
              <a
                href={content.freelance.linkHref}
                className="text-primary hover:underline"
              >
                {content.freelance.linkLabel}
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle as="h2">{content.security.heading}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {content.security.text}{" "}
              <a
                href={content.security.linkHref}
                className="text-primary hover:underline"
              >
                {content.security.linkLabel}
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
