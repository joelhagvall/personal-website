import Link from "next/link";
import {
  Bot,
  CheckCircle2,
  CreditCard,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { FreelanceInquiryForm } from "@/components/freelance/FreelanceInquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { FREELANCE } from "@/data/freelance";
import { TECH_STACK } from "@/data/tech-stack";
import { LINK_STYLES, TEXT_STYLES } from "@/lib/styles";
import type { ProjectWithStats } from "@/types/project";

const serviceIconMap = {
  rocket: Rocket,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  smartphone: Smartphone,
} as const;

const customTechIconMap = {
  "AI SDK": Bot,
  Auth: ShieldCheck,
  Stripe: CreditCard,
} as const;

type CustomTechName = keyof typeof customTechIconMap;

function isCustomTechName(name: string): name is CustomTechName {
  return name in customTechIconMap;
}

function TechStackRow() {
  return (
    <div
      className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 text-sm text-gray-300"
      aria-label={FREELANCE.page.techStack.label}
    >
      <span className="mr-1 text-xs uppercase tracking-[0.2em] text-gray-500">
        {FREELANCE.page.techStack.label}
      </span>
      {FREELANCE.page.techStack.items.map((name) => {
        const existingTech = TECH_STACK.find((tech) => tech.name === name);

        if (existingTech) {
          return (
            <a
              key={name}
              href={existingTech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition-colors hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <img
                src={existingTech.icon}
                alt=""
                aria-hidden="true"
                className={`h-4 w-4 ${"rounded" in existingTech && existingTech.rounded ? "rounded" : ""}`}
              />
              <span>{existingTech.name}</span>
            </a>
          );
        }

        if (isCustomTechName(name)) {
          const Icon = customTechIconMap[name];

          return (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
            >
              <Icon className="h-4 w-4 text-gray-200" aria-hidden="true" />
              <span>{name}</span>
            </span>
          );
        }

        return null;
      })}
    </div>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-2">
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${TEXT_STYLES.gradientHeading}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

interface WorkWithMeContentProps {
  projectsWithStats: ProjectWithStats[];
}

export function WorkWithMeContent({
  projectsWithStats,
}: WorkWithMeContentProps) {
  return (
    <div className="min-h-screen px-8 py-12 text-white md:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="space-y-5 text-center">
          <h1
            className={`pb-1 text-4xl font-bold leading-[1.12] md:text-5xl md:leading-[1.1] ${TEXT_STYLES.gradientHeading}`}
          >
            {FREELANCE.page.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            {FREELANCE.page.intro}
          </p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            {FREELANCE.page.summary}
          </p>
          <TechStackRow />
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={FREELANCE.contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_STYLES.button}
            >
              {FREELANCE.page.primaryContactCta}
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              {FREELANCE.page.secondaryProjectsCta}
            </Link>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {[FREELANCE.page.availability, FREELANCE.page.responseTime, FREELANCE.page.location].map(
            (item) => (
              <div
                key={item.label}
                className="rounded-lg border border-primary/10 bg-primary/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {item.label}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white">{item.value}</p>
              </div>
            )
          )}
        </section>

        <section className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              title={FREELANCE.page.sections.services}
              description="Clear offers with a concrete shipped result."
            />
            <div className="grid gap-4">
              {FREELANCE.services.map((service) => (
                <div key={service.title}>
                  <Card className="border-white/10 bg-white/[0.04] text-white">
                    <CardContent className="flex items-start gap-4 p-5">
                      {(() => {
                        const Icon = serviceIconMap[service.icon];

                        return (
                          <>
                            <div className="mt-0.5 rounded-md border border-white/10 bg-white/5 p-2">
                              <Icon className="h-4 w-4 text-gray-200" aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className="text-xl font-medium text-white">
                                {service.title}
                              </h3>
                              <p className="mt-2 leading-relaxed text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              title={FREELANCE.page.sections.fit}
              description="The practical upside of working with me."
            />
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-6">
              <div className="grid gap-4">
                {FREELANCE.fit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <p className="leading-relaxed text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title={FREELANCE.page.sections.work}
            description="Relevant work, not filler."
          />
          <div className="space-y-6">
            {projectsWithStats.map((project) => (
              <ProjectCard
                key={project.repo}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                iconName={project.iconName}
                stars={project.stars}
                forks={project.forks}
                linkedinUrl={project.linkedinUrl}
                demoUrl={project.demoUrl}
                publicationUrl={project.publicationUrl}
                image={project.image}
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title={FREELANCE.page.sections.process}
            description="Short, direct, and built for delivery."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {FREELANCE.process.map((step) => (
              <article
                key={step.title}
                className="rounded-lg border border-primary/10 bg-primary/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-6 scroll-mt-24">
          <SectionHeading
            title={FREELANCE.contact.title}
            description={FREELANCE.contact.description}
          />
          <FreelanceInquiryForm />
        </section>

        <Footer mailMode="copy" />
      </div>
    </div>
  );
}
