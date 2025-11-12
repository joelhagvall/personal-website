"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Star, GitFork, Code, Smartphone, Headphones, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { IconName } from "@/types/project";
import { parseSimpleMarkdown } from "@/lib/markdown";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  iconName: IconName;
  delay: number;
  stars?: number | undefined;
  forks?: number | undefined;
  linkedinUrl?: string | undefined;
  demoUrl?: string | undefined;
}

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  headphones: Headphones,
  shield: Shield,
};

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  iconName,
  delay,
  stars,
  forks,
  linkedinUrl,
  demoUrl,
}: ProjectCardProps) {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 bg-primary/5 hover:bg-primary/10 transition-all duration-300 border border-primary/10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Icon className="text-primary" size={24} />
            {title}
          </h2>

          <p className="text-muted-foreground text-lg">
            {parseSimpleMarkdown(description)}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary">
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub Stats */}
          {(stars !== undefined || forks !== undefined) && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {stars !== undefined && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{stars}</span>
                </div>
              )}
              {forks !== undefined && (
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4 text-blue-400" />
                  <span>{forks}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              <GitHubLogoIcon />
              Source Code
            </Link>
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <LinkedInLogoIcon />
                LinkedIn Post
              </Link>
            )}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
