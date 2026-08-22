/**
 * Generates markdown versions of every page for AI agents.
 *
 * Served via Accept: text/markdown content negotiation (see the rewrites in
 * vercel.json) and directly at /<page>.md. Written to public/ (committed, so
 * `next build` copies them into out/) and mirrored into out/ when it exists
 * so the current build ships fresh copies.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PERSON, SITE, SOCIAL, SKILLS } from "../data/site";
import {
  ABOUT_CONTENT,
  CONTACT_CONTENT,
  PRIVACY_CONTENT,
  RESUME_CONTENT,
} from "../data/content";
import { techInterests, otherInterests } from "../data/about";
import { FREELANCE } from "../data/freelance";
import { PROJECTS } from "../data/projects";
import { publications } from "../data/publications";
import { featuredProject } from "../data/featured-project";
import { SECURITY_CONTENT } from "../data/security";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const OUT_DIR = path.join(process.cwd(), "out");

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  body: string;
}

function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8")
      );
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: (data["title"] as string) ?? "Untitled",
        date: (data["date"] as string) ?? "",
        description: (data["description"] as string) ?? "",
        tags: (data["tags"] as string[]) ?? [],
        body: content.trim(),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const footer = `---

Part of [${SITE.name}](${SITE.url}/) · [All pages](${SITE.url}/llms.txt) · Contact: ${SOCIAL.email}`;

function pageMd(title: string, intro: string, body: string): string {
  return `# ${title}\n\n> ${intro}\n\n${body.trim()}\n\n${footer}\n`;
}

function buildPages(): Record<string, string> {
  const posts = getAllPosts();
  const pages: Record<string, string> = {};

  pages["index.md"] = pageMd(
    SITE.title,
    PERSON.description,
    `${PERSON.bio}

## Work with me

${FREELANCE.page.intro} ${FREELANCE.page.summary} See [Work With Me](${SITE.url}/work-with-me) or email ${SOCIAL.freelanceEmail}.

## Featured project

**[${featuredProject.title}](${featuredProject.githubUrl})**: ${featuredProject.description}

## Publications

${publications.map((p) => `- **${p.title}** (${p.year}): ${p.description} [Publication record](${p.urnUrl})`).join("\n")}

## Latest from the blog

${posts.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}) (${p.date}): ${p.description}`).join("\n")}

## Tech stack

${SKILLS.join(", ")}

## Pages

- [About](${SITE.url}/about): background, skills and interests
- [Projects](${SITE.url}/projects): personal and open-source work
- [Resume](${SITE.url}/resume): experience and education
- [Work With Me](${SITE.url}/work-with-me): freelance services
- [Blog](${SITE.url}/blog): thoughts and technical writing
- [Contact](${SITE.url}/contact): how to reach me
- [Privacy](${SITE.url}/privacy): privacy policy
- [Security Policy](${SITE.url}/security-policy): responsible disclosure`
  );

  pages["about.md"] = pageMd(
    `About ${PERSON.name}`,
    PERSON.description,
    `${ABOUT_CONTENT.story
      .map((p) =>
        "link" in p ? `${p.text} [${p.link.label}](${SITE.url}${p.link.href}).` : p.text
      )
      .join("\n\n")}

## Where I live

${PERSON.location.city}, ${PERSON.location.country}. ${PERSON.location.description}

## Tech interests

${techInterests.map((t) => `- ${t}`).join("\n")}

## Other interests

${otherInterests.map((t) => `- ${t}`).join("\n")}`
  );

  pages["projects.md"] = pageMd(
    `Projects by ${PERSON.name}`,
    "Personal and academic projects: web apps, mobile apps and open-source work.",
    PROJECTS.map((p) => {
      const lines = [`## ${p.title}`, "", p.description, ""];
      if (p.status) lines.push(`- Status: ${p.status}`);
      lines.push(`- Technologies: ${p.technologies.join(", ")}`);
      if (p.owner && p.repo)
        lines.push(`- Source: https://github.com/${p.owner}/${p.repo}`);
      if (p.caseStudy) {
        lines.push("", `**Problem:** ${p.caseStudy.problem}`, "", `**Built:** ${p.caseStudy.built}`);
      }
      return lines.join("\n");
    }).join("\n\n")
  );

  pages["resume.md"] = pageMd(
    `Resume - ${PERSON.name}`,
    RESUME_CONTENT.introduction,
    `## ${RESUME_CONTENT.currentExperienceHeading}

${RESUME_CONTENT.experience
  .map((e) => {
    const status = "status" in e && e.status ? `\n- ${e.status}` : "";
    return `### ${e.role}, ${e.organization}\n\n- ${e.period}${status}\n\n${e.description}`;
  })
  .join("\n\n")}

## ${RESUME_CONTENT.educationHeading}

${RESUME_CONTENT.education.degree}, ${RESUME_CONTENT.education.school} (${RESUME_CONTENT.education.period})

[Resume as PDF](${SITE.url}${RESUME_CONTENT.pdfHref})`
  );

  pages["work-with-me.md"] = pageMd(
    FREELANCE.page.title,
    `${FREELANCE.page.intro} ${FREELANCE.page.summary}`,
    `- **Stack:** ${FREELANCE.page.techStack.items.join(", ")}
- **Value:** ${FREELANCE.page.availability.value}
- **How:** ${FREELANCE.page.responseTime.value}
- **Outcome:** ${FREELANCE.page.location.value}

## Packages

${FREELANCE.services.map((s) => `### ${s.title}\n\n${s.description}`).join("\n\n")}

## What you get

${FREELANCE.fit.map((f) => `- ${f}`).join("\n")}

## How delivery works

${FREELANCE.process.map((s) => `### ${s.title}\n\n${s.description}`).join("\n\n")}

## Start a project

Email ${SOCIAL.freelanceEmail} with a short description of what you're building, or book a call: ${FREELANCE.contact.calendlyUrl}`
  );

  pages["blog.md"] = pageMd(
    `Blog - ${PERSON.name}`,
    "Thoughts, ideas and technical writing.",
    posts
      .map(
        (p) =>
          `## [${p.title}](${SITE.url}/blog/${p.slug})\n\n- Published: ${p.date}\n- Tags: ${p.tags.join(", ")}\n\n${p.description}`
      )
      .join("\n\n")
  );

  for (const post of posts) {
    pages[`blog/${post.slug}.md`] = pageMd(
      post.title,
      post.description,
      `- Author: ${PERSON.name}\n- Published: ${post.date}\n- Tags: ${post.tags.join(", ")}\n\n${post.body}`
    );
  }

  pages["contact.md"] = pageMd(
    `Contact ${PERSON.name}`,
    CONTACT_CONTENT.subtitle,
    `${CONTACT_CONTENT.intro}

## ${CONTACT_CONTENT.channels.heading}

- **Email:** ${SOCIAL.email}. ${CONTACT_CONTENT.channels.email.description}
- **GitHub:** ${SOCIAL.github.url}. ${CONTACT_CONTENT.channels.github.description}
- **LinkedIn:** ${SOCIAL.linkedin.url}. ${CONTACT_CONTENT.channels.linkedin.description}

## ${CONTACT_CONTENT.freelance.heading}

${CONTACT_CONTENT.freelance.text} See [Work With Me](${SITE.url}/work-with-me).

## ${CONTACT_CONTENT.security.heading}

${CONTACT_CONTENT.security.text} See the [security policy](${SITE.url}/security-policy).`
  );

  pages["privacy.md"] = pageMd(
    PRIVACY_CONTENT.pageTitle,
    `${PRIVACY_CONTENT.subtitle}. ${PRIVACY_CONTENT.updated}.`,
    `${PRIVACY_CONTENT.intro}

${PRIVACY_CONTENT.sections
  .map((s) => `## ${s.heading}\n\n${s.paragraphs.join("\n\n")}`)
  .join("\n\n")}`
  );

  pages["agents.md"] = `# Agent instructions for ${SITE.url}

> Guidance for AI agents on when and how to use this site.

## When to use this site

- **Verify who ${PERSON.name} is**: ${PERSON.description} Identity, background and skills: ${SITE.url}/about and ${SITE.url}/resume.
- **Evaluate ${PERSON.name} for freelance work**: best-fit jobs are AI features for SaaS products (RAG assistants, embeddings/vector search, document ingestion, AI reports), full-stack feature sprints in React/Next.js/TypeScript with Supabase/PostgreSQL, and product polish with tests and release discipline. Details: ${SITE.url}/work-with-me.
- **Review past work**: ${SITE.url}/projects.
- **Cite or summarize writing**: ${SITE.url}/blog.
- **Contact**: email ${SOCIAL.email} (see ${SITE.url}/contact).

## When NOT to use this site

- Documentation for third-party tools or frameworks.
- Content in languages other than English.

## How to consume content

- Every page has a markdown twin: request any URL with \`Accept: text/markdown\`, or append \`.md\` to the path (e.g. ${SITE.url}/about.md).
- Page index: ${SITE.url}/llms.txt · Sitemap: ${SITE.url}/sitemap.xml · RSS: ${SITE.url}/feed.xml
- No authentication is required; the whole site is public and static.

${footer}
`;

  pages["security-policy.md"] = pageMd(
    SECURITY_CONTENT.page.title,
    SECURITY_CONTENT.page.subtitle,
    `${SECURITY_CONTENT.responsibleDisclosure.intro}

## ${SECURITY_CONTENT.responsibleDisclosure.whatToReport.title}

${SECURITY_CONTENT.responsibleDisclosure.whatToReport.items.map((i) => `- ${i}`).join("\n")}

## ${SECURITY_CONTENT.howToReport.title}

${SECURITY_CONTENT.howToReport.steps
  .map((s) =>
    s.number === "1"
      ? `${s.number}. **${s.title}**: ${s.description} ${SOCIAL.email}`
      : `${s.number}. **${s.title}**: ${s.description}`
  )
  .join("\n")}

## ${SECURITY_CONTENT.whatToExpect.title}

${SECURITY_CONTENT.whatToExpect.timeline.map((t) => `- **${t.time}:** ${t.description}`).join("\n")}`
  );

  return pages;
}

function main() {
  const pages = buildPages();
  const targets = [PUBLIC_DIR, ...(fs.existsSync(OUT_DIR) ? [OUT_DIR] : [])];

  for (const target of targets) {
    for (const [relPath, content] of Object.entries(pages)) {
      const outPath = path.join(target, relPath);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, content, "utf-8");
    }
  }
  console.log(
    `✓ Markdown pages generated: ${Object.keys(pages).length} pages → ${targets.join(", ")}`
  );
}

main();
