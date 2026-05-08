import { PERSON, SITE, SOCIAL } from "./site";

export const FREELANCE = {
  heroBadge: "Available for client work",
  heroTitle: "AI SaaS features people can use.",
  heroDescription:
    "I build RAG assistants, embeddings/vector search, document ingestion, AI reports, recommender flows, and the SaaS layer around them.",
  primaryCta: {
    label: "Work with me",
    href: "/work-with-me",
  },
  secondaryCta: {
    label: "See projects",
    href: "/projects",
  },
  homeCard: {
    heading: "Work with me",
    availability: "Available for new projects.",
    description:
      "Product engineering for teams that need outcomes, not more process.",
    serviceHighlights: [
      "AI features users can try",
      "SaaS flows that can sell",
      "Tests and release discipline",
    ],
    primaryCta: {
      label: "See how I work",
      href: "/work-with-me",
    },
    secondaryCta: {
      label: "Start a project",
      href: `mailto:${SOCIAL.freelanceEmail}?subject=${encodeURIComponent("Project inquiry")}`,
    },
  },
  page: {
    eyebrow: "Work with me",
    title: "AI SaaS features people can use.",
    intro:
      "I build RAG assistants, embeddings/vector search, document ingestion, AI reports, recommender flows, and the SaaS layer around them.",
    summary:
      "Useful AI, connected to real data, shipped with auth, billing, audit logs, tests, and deployment.",
    techStack: {
      label: "Stack",
      items: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "AI SDK", "Auth", "Stripe"],
    },
    availability: {
      label: "Value",
      value: "One owner across product, frontend, backend, AI, and release.",
    },
    responseTime: {
      label: "How",
      value: "Short scope, AI-assisted build loops, direct updates, and targeted tests.",
    },
    location: {
      label: "Outcome",
      value: "A working flow users can test, teams can sell, and engineers can maintain.",
    },
    sections: {
      services: "Packages",
      fit: "What you get",
      work: "Proof",
      process: "How delivery works",
      contact: "Book a call",
    },
    primaryContactCta: "Book 15 min",
    secondaryProjectsCta: "See all projects",
  },
  services: [
    {
      icon: "rocket",
      title: "AI MVP Sprint",
      description:
        "A testable AI feature: RAG chat, vector search, document Q&A, report generator, recommender, or agent workflow.",
    },
    {
      icon: "layout",
      title: "SaaS Feature Sprint",
      description:
        "The SaaS layer around the feature: onboarding, auth, roles, billing, admin views, API, database, and release.",
    },
    {
      icon: "sparkles",
      title: "AI Product Polish",
      description:
        "Make an AI flow more useful: embeddings, retrieval quality, prompts, streaming UX, empty states, errors, and trust signals.",
    },
    {
      icon: "smartphone",
      title: "Shipping Hardening",
      description:
        "Multi-provider routing, cost tracking, audit logs, AI governance checks, eval cases, tests, CI/CD, and handover.",
    },
  ],
  fit: [
    "Concrete AI output: answers, recommendations, generated reports, completed tasks, or admin decisions.",
    "AI connected to product data, documents, embeddings, permissions, users, billing, and workflows.",
    "Measurable delivery: fewer manual steps, faster support/admin work, better retrieval quality, shorter time to MVP, or clearer conversion flow.",
    "Cleaner handover with prompts, tests, decisions, and code another engineer can continue from.",
  ],
  selectedProjectRepos: ["data-wipe-mailer", "jarvis-chat", "PVT15-Project"],
  process: [
    {
      title: "1. Scope",
      description:
        "Pick the exact job: answer from documents, draft reports, recommend actions, automate steps, or support admins.",
    },
    {
      title: "2. Build",
      description:
        "Connect ingestion, embeddings, retrieval, model calls, UI, permissions, logging, fallbacks, and the SaaS flow.",
    },
    {
      title: "3. Ship",
      description:
        "Deploy it, test real cases, check cost and failure modes, then hand over the next useful iteration.",
    },
  ],
  contact: {
    email: SOCIAL.freelanceEmail,
    calendlyUrl: "https://calendly.com/joel-hagvall/30min",
    title: "Book 15 min.",
    bookingLabel: "Book 15 min",
    bookingHeading: "Start with a focused call",
    bookingDescription:
      "Pick a time and we will map the outcome, scope, timeline, and first useful ship.",
    backupLabel: "or email:",
    backupDescription:
      "Use email if you are not ready to book yet or want to send context first.",
    copiedLabel: "Copied",
    copyFailedLabel: "Copy failed",
    submitLabel: "Open email draft",
    copyDraftLabel: "Copy project details",
    description:
      "High-ticket work closes on calls. Calendly is the main path, email is the backup.",
    note:
      "Good briefs include the user, the blocked flow, the deadline, and what should be true after the work is done.",
    emailCtaLabel: "Email directly",
    copyEmailLabel: "Copy email",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      projectType: "Project type",
      budget: "Budget",
      timeline: "Timeline",
      details: "Project brief",
    },
    placeholders: {
      name: "Your name",
      company: "Company or team",
      email: "your@email.com",
      details:
        "What are you building, what help do you need, and what outcome matters most?",
    },
    projectTypes: [
      "AI MVP",
      "RAG or vector search",
      "Document ingestion",
      "AI report generator",
      "Recommendation engine",
      "Tool-calling agent",
      "AI governance or audit logs",
      "SaaS feature delivery",
      "Internal tool",
      "Release hardening",
      "Other",
    ],
    budgetOptions: [
      "Under $500",
      "Under $2k",
      "$2k-$5k",
      "$5k-$10k",
      "$10k+",
      "Not defined yet",
    ],
    timelineOptions: [
      "ASAP",
      "Within 2 weeks",
      "This month",
      "Next 1-2 months",
      "Just exploring",
    ],
  },
  metadata: {
    title: `Work with me – ${PERSON.name}`,
    description:
      "AI product engineering, SaaS feature delivery, and internal tool builds for startups and small teams that need measurable outcomes.",
    canonical: `${SITE.url}/work-with-me`,
  },
} as const;
