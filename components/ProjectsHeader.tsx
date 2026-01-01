"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PROJECTS_CONTENT } from "@/data/content";
import { SOCIAL } from "@/data/site";

export function ProjectsHeader() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
      >
        {PROJECTS_CONTENT.pageTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-gray-400 text-center mb-8"
      >
        {PROJECTS_CONTENT.description}{" "}
        <Link
          href={SOCIAL.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white/70"
        >
          {PROJECTS_CONTENT.githubLink}
          <GitHubLogoIcon className="w-4 h-4" />
        </Link>{" "}
        {PROJECTS_CONTENT.githubSuffix}
      </motion.p>
    </>
  );
}
