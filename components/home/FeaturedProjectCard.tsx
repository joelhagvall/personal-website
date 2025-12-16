"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatedCard } from "@/components/AnimatedCard";
import { featuredProject } from "@/data/featured-project";
import { LINK_STYLES } from "@/lib/styles";

export function FeaturedProjectCard() {
  return (
    <AnimatedCard delay={0.3} className="col-span-full md:col-span-4">
      <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">{featuredProject.title}</h3>
        <p className="text-muted-foreground text-lg">
          {featuredProject.description}
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={featuredProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${LINK_STYLES.primary}`}
          >
            <GitHubLogoIcon />
            Source Code
          </a>
          <Link href="/projects" className={`ml-auto ${LINK_STYLES.button}`}>
            More Projects
            <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </AnimatedCard>
  );
}
