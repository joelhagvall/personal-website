"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  LayoutTemplate,
  Rocket,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { FreelanceInquiryForm } from "@/components/freelance/FreelanceInquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { FREELANCE } from "@/data/freelance";
import { fadeInUp, withDelay } from "@/lib/animations";
import { LINK_STYLES, TEXT_STYLES } from "@/lib/styles";
import type { ProjectWithStats } from "@/types/project";

const serviceIconMap = {
  rocket: Rocket,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  smartphone: Smartphone,
} as const;

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

function AnimatedSection({
  children,
  delay = 0,
  className,
  ...props
}: React.ComponentProps<typeof motion.section> & {
  delay?: number;
}) {
  return (
    <motion.section
      {...fadeInUp}
      {...props}
      transition={withDelay(delay)}
      className={className}
    >
      {children}
    </motion.section>
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
        <AnimatedSection delay={0} className="space-y-6 text-center">
          <motion.h1
            {...fadeInUp}
            transition={withDelay(0)}
            className={`text-4xl font-bold md:text-5xl ${TEXT_STYLES.gradientHeading}`}
          >
            {FREELANCE.page.title}
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={withDelay(0.1)}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
          >
            {FREELANCE.page.intro}
          </motion.p>
          <motion.p
            {...fadeInUp}
            transition={withDelay(0.2)}
            className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {FREELANCE.page.summary}
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={withDelay(0.3)}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="#contact" className={LINK_STYLES.button}>
              Start a project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              See all projects
            </Link>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="grid gap-4 lg:grid-cols-3">
          {[FREELANCE.page.availability, FREELANCE.page.responseTime, FREELANCE.page.location].map(
            (item, index) => (
              <motion.div
                key={item.label}
                {...fadeInUp}
                transition={withDelay(0.2 + index * 0.08)}
                className="rounded-lg border border-primary/10 bg-primary/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {item.label}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white">{item.value}</p>
              </motion.div>
            )
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.25} className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              title={FREELANCE.page.sections.services}
              description="What I can own and ship."
            />
            <div className="grid gap-4">
              {FREELANCE.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...fadeInUp}
                  transition={withDelay(0.3 + index * 0.08)}
                >
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
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={withDelay(0.4)}
            className="space-y-6"
          >
            <SectionHeading
              title={FREELANCE.page.sections.fit}
              description="Best fit if speed and quality both matter."
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
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.35} className="space-y-6">
          <SectionHeading
            title={FREELANCE.page.sections.work}
            description="Relevant work, not filler."
          />
          <div className="space-y-6">
            {projectsWithStats.map((project, index) => (
              <ProjectCard
                key={project.repo}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                iconName={project.iconName}
                delay={index * 0.1}
                stars={project.stars}
                forks={project.forks}
                linkedinUrl={project.linkedinUrl}
                demoUrl={project.demoUrl}
                publicationUrl={project.publicationUrl}
                image={project.image}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.45} className="space-y-6">
          <SectionHeading
            title={FREELANCE.page.sections.process}
            description="Short, direct, and built for delivery."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {FREELANCE.process.map((step, index) => (
              <motion.article
                key={step.title}
                {...fadeInUp}
                transition={withDelay(0.5 + index * 0.08)}
                className="rounded-lg border border-primary/10 bg-primary/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" delay={0.55} className="space-y-6 scroll-mt-24">
          <SectionHeading
            title={FREELANCE.contact.title}
            description={FREELANCE.contact.description}
          />
          <FreelanceInquiryForm />
        </AnimatedSection>

        <Footer mailMode="copy" />
      </div>
    </div>
  );
}
