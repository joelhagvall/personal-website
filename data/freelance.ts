import { PERSON, SITE, SOCIAL } from "./site";

export const FREELANCE = {
  heroBadge: "Available for client work",
  heroTitle: "Product development for teams that need to ship.",
  heroDescription:
    "I build web products, MVPs, and product features with AI-assisted execution and a real engineering bar.",
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
      "For teams that need speed, leverage, and production-ready execution.",
    serviceHighlights: [
      "AI-assisted build loops",
      "Frontend and full-stack delivery",
      "CI/CD and testing discipline",
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
    title: "I ship product work fast, with quality.",
    intro:
      "For startups and small teams that need execution, leverage, and low-overhead delivery.",
    summary:
      "Based in Stockholm and work remotely. I use AI agents, Cursor, and Codex to compress build cycles, while keeping a real bar around CI/CD and tests.",
    availability: {
      label: "Availability",
      value: "Available for new projects.",
    },
    responseTime: {
      label: "Execution",
      value: "AI-assisted workflows, short feedback loops, and direct communication.",
    },
    location: {
      label: "Quality bar",
      value: "CI/CD, unit tests, integration tests, and E2E coverage where it matters.",
    },
    sections: {
      services: "What I can build",
      fit: "Best fit if",
      work: "Selected projects",
      process: "How I work",
      contact: "Send a short brief",
    },
  },
  services: [
    {
      icon: "rocket",
      title: "MVPs",
      description:
        "First versions you can put in front of users fast without building a mess.",
    },
    {
      icon: "layout",
      title: "Features",
      description:
        "Product features, internal tools, and scoped web app delivery.",
    },
    {
      icon: "sparkles",
      title: "Frontend",
      description:
        "Frontend that feels sharp, ships fast, and holds up in production.",
    },
    {
      icon: "smartphone",
      title: "Shipping systems",
      description:
        "CI/CD, testing, and release discipline so delivery stays fast as scope grows.",
    },
  ],
  fit: [
    "You need an MVP built.",
    "Your roadmap is blocked by lack of engineering time.",
    "You want modern engineering leverage without lowering the quality bar.",
  ],
  selectedProjectRepos: ["data-wipe-mailer", "jarvis-chat", "PVT15-Project"],
  process: [
    {
      title: "1. Scope",
      description:
        "Short brief. Scope, priorities, constraints, and what needs to ship first.",
    },
    {
      title: "2. Build",
      description:
        "Build in tight loops with AI-assisted execution, regular updates, and no unnecessary process.",
    },
    {
      title: "3. Ship",
      description:
        "Ship through CI/CD, cover risk with tests, hand over cleanly, and fix what needs fixing.",
    },
  ],
  contact: {
    email: SOCIAL.freelanceEmail,
    title: "Send a short brief.",
    submitLabel: "Open email draft",
    copyDraftLabel: "Copy project details",
    description:
      "Send the product, scope, timeline, and what help you need. If speed and quality both matter, this is the right place to start.",
    note:
      "If it is a fit, I will reply with next steps, open questions, and the fastest way to get moving.",
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
      "MVP",
      "Web app feature delivery",
      "Frontend implementation",
      "Mobile prototype",
      "Technical scoping",
      "Other",
    ],
    budgetOptions: [
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
      "I ship product work fast for startups and small teams, using AI-assisted workflows with a real engineering bar.",
    canonical: `${SITE.url}/work-with-me`,
  },
} as const;
