import Link from "next/link";
import { Briefcase, FileText, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { RESUME_CONTENT } from "@/data/content";

export default function Resume() {
  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold">{RESUME_CONTENT.pageTitle}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {RESUME_CONTENT.introduction}
          </p>
          <Link
            href={RESUME_CONTENT.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={RESUME_CONTENT.pdfAriaLabel}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <FileText size={18} aria-hidden="true" />
            {RESUME_CONTENT.pdfLabel}
          </Link>
        </div>

        <div className="space-y-6">
          <Card className="p-6 md:p-8 bg-primary/5">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase size={24} aria-hidden="true" />
              {RESUME_CONTENT.currentExperienceHeading}
            </h2>
            <div className="divide-y divide-primary/10">
              {RESUME_CONTENT.experience.map((item) => (
                <div key={`${item.organization}-${item.role}`} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-medium">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization} · {item.period}
                  </p>
                  {"status" in item && (
                    <p className="mt-2 text-sm font-medium text-primary">
                      {item.status}
                    </p>
                  )}
                  <p className="mt-3 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-primary/5">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={24} aria-hidden="true" />
              {RESUME_CONTENT.educationHeading}
            </h2>
            <h3 className="text-lg font-medium">{RESUME_CONTENT.education.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {RESUME_CONTENT.education.school} · {RESUME_CONTENT.education.period}
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
} 
