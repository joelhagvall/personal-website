import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PROJECTS_CONTENT } from "@/data/content";
import { SOCIAL } from "@/data/site";

export function ProjectsHeader() {
  return (
    <header className="mx-auto max-w-4xl space-y-4 py-6 text-center">
      <h1
        className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
      >
        {PROJECTS_CONTENT.page.title}
      </h1>
      <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
        {PROJECTS_CONTENT.page.description}
      </p>
      <p className="pt-2 text-sm text-gray-500">
        {PROJECTS_CONTENT.page.githubPrefix}{" "}
        <Link
          href={SOCIAL.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white/70"
        >
          {PROJECTS_CONTENT.page.githubLink}
          <GitHubLogoIcon className="w-4 h-4" />
        </Link>
      </p>
    </header>
  );
}
