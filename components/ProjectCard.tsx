"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Star,
  GitFork,
  Code,
  Smartphone,
  Headphones,
  Shield,
  ExternalLink,
  FileText,
  Bot,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type {
  IconName,
  ProjectCaseStudy,
  ProjectProofItem,
  ProjectProofSource,
} from "@/types/project";
import { parseSimpleMarkdown } from "@/lib/markdown";
import { LABELS, PROJECTS_CONTENT } from "@/data/content";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string | undefined;
  iconName: IconName;
  status?: string | undefined;
  stars?: number | undefined;
  forks?: number | undefined;
  linkedinUrl?: string | undefined;
  demoUrl?: string | undefined;
  npmUrl?: string | undefined;
  modelUrl?: string | undefined;
  publicationUrl?: string | undefined;
  image?: string | undefined;
  imagePriority?: boolean | undefined;
  caseStudy?: ProjectCaseStudy | undefined;
}

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  headphones: Headphones,
  shield: Shield,
  bot: Bot,
};

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

function ProofSourceIcon({
  iconName,
}: {
  iconName: ProjectProofSource["iconName"];
}) {
  const iconClassName = "h-3 w-3";

  switch (iconName) {
    case "dfri":
      return (
        <Image
          src="/media/dfri-logo.png"
          alt=""
          width={12}
          height={12}
          className={`${iconClassName} rounded-[2px]`}
        />
      );
    case "reddit":
      return <RedditIcon className={`${iconClassName} text-[#FF4500]`} />;
    case "linkedin":
      return (
        <LinkedInLogoIcon
          className={`${iconClassName} text-[#0A66C2]`}
          aria-hidden="true"
        />
      );
  }
}

function ProofSourceChip({ source }: { source: ProjectProofSource }) {
  return (
    <Link
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Source: ${source.label} (opens in new tab)`}
      className="group ml-1.5 inline-flex translate-y-[-1px] items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] py-0.5 pl-1 pr-2 align-middle text-xs font-medium text-gray-300 transition-colors hover:border-white/20 hover:bg-white/[0.12] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/90">
        <ProofSourceIcon iconName={source.iconName} />
      </span>
      {source.label}
    </Link>
  );
}

function CaseStudyItem({
  label,
  items,
  className,
}: {
  label: string;
  items: readonly ProjectProofItem[];
  className?: string | undefined;
}) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-black/20 p-4 ${className ?? ""}`}
    >
      <dt className="text-sm font-medium tracking-normal text-gray-400">
        {label}
      </dt>
      <dd className="mt-3 space-y-3 leading-relaxed text-gray-200">
        {items.map((item) => (
          <p key={item.text}>
            {item.text}
            {item.source ? <ProofSourceChip source={item.source} /> : null}
          </p>
        ))}
      </dd>
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  iconName,
  status,
  stars,
  forks,
  linkedinUrl,
  demoUrl,
  npmUrl,
  modelUrl,
  publicationUrl,
  image,
  imagePriority,
  caseStudy,
}: ProjectCardProps) {
  const Icon = iconMap[iconName];
  const hasStars = stars !== undefined && stars > 0;
  const hasForks = forks !== undefined && forks > 0;

  return (
    <div className="project-card-item">
      <Card className="h-full p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 flex-wrap">
            <Icon className="text-primary" size={24} aria-hidden="true" />
            {title}
            {status && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <span
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  aria-hidden="true"
                />
                {status}
              </span>
            )}
          </h3>

          <p className="text-muted-foreground text-lg">
            {parseSimpleMarkdown(description)}
          </p>

          {caseStudy ? (
            <dl
              className={`grid gap-3 ${caseStudy.proof.length > 1 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
            >
              <CaseStudyItem
                label={PROJECTS_CONTENT.caseLabels.problem}
                items={[{ text: caseStudy.problem }]}
              />
              <CaseStudyItem
                label={PROJECTS_CONTENT.caseLabels.built}
                items={[{ text: caseStudy.built }]}
              />
              <CaseStudyItem
                label={PROJECTS_CONTENT.caseLabels.proof}
                items={caseStudy.proof}
                className={caseStudy.proof.length > 1 ? "md:col-span-2" : undefined}
              />
            </dl>
          ) : null}

          {image && (
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative w-full max-w-xl aspect-video rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  <Image
                    src={image}
                    alt={`${title} screenshot`}
                    fill
                    priority={imagePriority ?? false}
                    className="object-cover object-top"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 border-none bg-transparent">
                <DialogTitle className="sr-only">{title} screenshot</DialogTitle>
                <Image
                  src={image}
                  alt={`${title} screenshot`}
                  width={1920}
                  height={1080}
                  priority={imagePriority ?? false}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          )}

          <div className="flex flex-wrap gap-2">
            {technologies.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub Stats */}
          {(hasStars || hasForks) && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400" aria-label="GitHub statistics">
              {hasStars && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                  <span aria-label={`${stars} stars`}>{stars}</span>
                </div>
              )}
              {hasForks && (
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <span aria-label={`${forks} forks`}>{forks}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 flex-wrap" role="group" aria-label="Project links">
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${LABELS.liveDemo} of ${title} (opens in new tab)`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                {LABELS.liveDemo}
              </Link>
            )}
            {npmUrl && (
              <Link
                href={npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${LABELS.npmPackage} for ${title} (opens in new tab)`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                {LABELS.npmPackage}
              </Link>
            )}
            {modelUrl && (
              <Link
                href={modelUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${LABELS.huggingFaceModel} for ${title} (opens in new tab)`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                {LABELS.huggingFaceModel}
              </Link>
            )}
            {publicationUrl && (
              <Link
                href={publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${LABELS.publication} for ${title} (opens in new tab)`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                {LABELS.publication}
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${LABELS.sourceCode} for ${title} (opens in new tab)`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <GitHubLogoIcon aria-hidden="true" />
                {LABELS.sourceCode}
              </Link>
            )}
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${LABELS.linkedinPost} about ${title} (opens in new tab)`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <LinkedInLogoIcon aria-hidden="true" />
                {LABELS.linkedinPost}
              </Link>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
