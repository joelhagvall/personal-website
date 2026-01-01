import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SOCIAL } from "@/lib/constants";
import { SECURITY_CONTENT } from "@/data/security";

export default function SecurityPolicyPage() {
  const content = SECURITY_CONTENT;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{content.page.title}</h1>
        <p className="text-lg text-muted-foreground">{content.page.subtitle}</p>
      </div>

      <div className="space-y-6">
        {/* Responsible Disclosure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="destructive">
                {content.responsibleDisclosure.badge}
              </Badge>
              {content.responsibleDisclosure.title}
            </CardTitle>
            <CardDescription>
              {content.responsibleDisclosure.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{content.responsibleDisclosure.intro}</p>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                {content.responsibleDisclosure.whatToReport.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {content.responsibleDisclosure.whatToReport.items.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How to Report */}
        <Card>
          <CardHeader>
            <CardTitle>{content.howToReport.title}</CardTitle>
            <CardDescription>{content.howToReport.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {content.howToReport.steps.map((step) => (
                <div key={step.number} className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    {step.number}
                  </Badge>
                  <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}{" "}
                      {step.number === "1" && (
                        <a
                          href={`mailto:${SOCIAL.email}`}
                          className="text-primary hover:underline"
                        >
                          {SOCIAL.email}
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* What to Expect */}
        <Card>
          <CardHeader>
            <CardTitle>{content.whatToExpect.title}</CardTitle>
            <CardDescription>
              {content.whatToExpect.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {content.whatToExpect.timeline.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold">{item.time}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>{content.guidelines.title}</CardTitle>
            <CardDescription>{content.guidelines.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  {content.guidelines.do.badge}
                </Badge>
                <div>
                  <h4 className="font-semibold">{content.guidelines.do.title}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {content.guidelines.do.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <Badge variant="destructive" className="mt-1">
                  {content.guidelines.dont.badge}
                </Badge>
                <div>
                  <h4 className="font-semibold">
                    {content.guidelines.dont.title}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {content.guidelines.dont.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recognition */}
        <Card>
          <CardHeader>
            <CardTitle>{content.recognition.title}</CardTitle>
            <CardDescription>{content.recognition.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {content.recognition.text}
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>{content.contact.title}</CardTitle>
            <CardDescription>{content.contact.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>{content.contact.securityEmailLabel}</strong>{" "}
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="text-primary hover:underline"
                >
                  {SOCIAL.email}
                </a>
              </p>
              <p className="text-sm">
                <strong>{content.contact.securityTxtLabel}</strong>{" "}
                <a
                  href={content.contact.securityTxtPath}
                  className="text-primary hover:underline"
                >
                  {content.contact.securityTxtPath}
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                {content.contact.generalInquiries}{" "}
                <a href="/about" className="text-primary hover:underline">
                  {content.contact.aboutPageLink}
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
