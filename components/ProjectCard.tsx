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
import type { IconName } from "@/types/project";
import { parseSimpleMarkdown } from "@/lib/markdown";
import { LABELS } from "@/data/content";

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
}

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  headphones: Headphones,
  shield: Shield,
  bot: Bot,
};

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
}: ProjectCardProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="project-card-item">
      <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 flex-wrap">
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
          </h2>

          <p className="text-muted-foreground text-lg">
            {parseSimpleMarkdown(description)}
          </p>

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
          {(stars !== undefined || forks !== undefined) && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400" aria-label="GitHub statistics">
              {stars !== undefined && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                  <span aria-label={`${stars} stars`}>{stars}</span>
                </div>
              )}
              {forks !== undefined && (
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <span aria-label={`${forks} forks`}>{forks}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 flex-wrap" role="group" aria-label="Project links">
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
          </div>
        </div>
      </Card>
    </div>
  );
}
