/**
 * Centralized UI text and labels
 * All user-facing text in one place for easy maintenance
 */

import { PERSON, SOCIAL } from "./site";
import messages from "@/messages/en.json";

// ============================================
// Navigation & Common Labels
// ============================================
export const LABELS = {
  // Navigation
  home: "Home",
  about: "About",
  aboutMe: "About Me",
  workWithMe: "Work with me",
  projects: "Projects",
  resume: "Resume",

  // Common actions
  sourceCode: "Source Code",
  viewPdf: "View PDF",
  moreProjects: "More Projects",
  liveDemo: "Live Demo",
  npmPackage: "npm Package",
  huggingFaceModel: "Hugging Face Model",
  publication: "Publication",
  linkedinPost: "LinkedIn Post",
  continue: "Continue",
  copyToClipboard: "Copy to clipboard",
  copied: "Copied!",
  copyFailed: "Copy failed",

  // Section headers
  introduction: "Introduction",
  featuredProject: "Featured Project",
  featuredBlog: "Featured Post",
  techStack: "Tech Stack",
  publications: "Publications",
  securityPolicy: "Security Policy",

  // Blog
  readPost: "Read Post",
  allPosts: "All Posts",

  // Accessibility
  githubProfile: "GitHub profile",
  linkedinProfile: "LinkedIn profile",
  email: "Email",
} as const;

// ============================================
// Page Content
// ============================================
export const HOME_CONTENT = {
  introduction: {
    heading: LABELS.introduction,
    text: `Hi, I'm ${PERSON.name}. Software engineer from ${PERSON.location.city}, ${PERSON.location.country}. I automate everything possible and build privacy-first AI products. Get the full story on the`,
    linkText: LABELS.aboutMe,
    linkSuffix: "page.",
  },
  featuredProject: {
    heading: LABELS.featuredProject,
  },
  techStack: {
    heading: LABELS.techStack,
  },
  publications: {
    heading: LABELS.publications,
    urnLabel: "URN:",
  },
  featuredBlog: {
    heading: LABELS.featuredBlog,
  },
  githubActivity: {
    heading: "GitHub Activity",
    description: "A live contribution heatmap from the last 12 months.",
    totalSuffix: "contributions in the last year",
    viewProfile: "View profile",
    swipeHint: "Swipe to explore",
    unavailable: "Live contribution data is unavailable right now.",
    legendLess: "Less",
    legendMore: "More",
  },
} as const;

export const ABOUT_CONTENT = {
  pageTitle: LABELS.aboutMe,
  sections: {
    whoIAm: "Who I Am",
    whereILive: "Where I Live",
    myInterests: "My Interests",
  },
  story: [
    {
      text: `I'm ${PERSON.name}, ${PERSON.age} years old, born and raised in Stockholm. I've always liked figuring out how things work. These days that means workflows, systems and products. I studied Computer and Systems Sciences at Stockholm University and now build microservices, tooling and automated workflows at Scania.`,
    },
    {
      text: "My way of working is simple: find every blocker and remove it. Most of a normal workday isn't hard problems, it's glue between systems, so I automate everything possible. At work, in my own projects, and for clients. I wrote more about that in",
      link: { label: "Automate Everything Possible", href: "/blog/automate-everything" },
    },
    {
      text: "I also care a lot about privacy. Automating with AI means sending data somewhere, and a lot of that data should never leave your machine. That's why I built Maskera, a tool that redacts Swedish personal data completely locally.",
    },
    {
      text: "Next to my full-time job I do freelance work building AI SaaS features, and I'm the sole engineer at ResiliaAI, a pre-launch venture.",
    },
    {
      text: "I think the next few years belong to builders. People who can talk to the customer, design the flow, write the code, ship it and fix it. That's what I'm going for.",
    },
  ],
  interests: {
    techIntro: "For as long as I can remember, I've always been interested in technology. Today I'm also drawn to tech that makes a difference:",
    buildingIntro: "Thinking of new software ideas, iterating on them and actually building them. Open sourced on my",
    githubLink: "GitHub",
    githubSuffix: "profile.",
    otherIntro: "I'm also interested in other things, like:",
  },
  media: {
    description: "Some of my favourite media, swipe through the images!",
    movies: "Favorite Movies",
    music: "Favorite Music",
    books: "Favorite Books",
  },
} as const;

export const PROJECTS_CONTENT = messages.projects;

export const RESUME_CONTENT = {
  pageTitle: LABELS.resume,
  introduction:
    "Software Engineer working across enterprise systems, developer tooling, workflow automation, AI products and local-first privacy technology.",
  currentExperienceHeading: "Current Experience",
  experience: [
    {
      role: "Software Developer",
      organization: "Scania",
      period: "Sep 2024 - Present",
      description:
        "Building and maintaining internal .NET/C# microservices, TypeScript/React tooling, integrations and automated workflows.",
    },
    {
      role: "Creator & Maintainer",
      organization: "Maskera",
      period: "Jun 2026 - Present",
      status: "Public pre-release · Open-source launch planned Aug 2026",
      description:
        "Building Swedish-first, local PII redaction packages and an on-device NER model for browser, Node.js, edge and AI workflows.",
    },
    {
      role: "Sole Software Engineer",
      organization: "ResiliaAI",
      period: "2025 - Present",
      status: "Part-time, pre-launch venture",
      description:
        "Building the pre-launch platform in a three-person team alongside full-time work at Scania.",
    },
  ],
  educationHeading: "Education",
  education: {
    degree: "B.Sc. in Computer and Systems Sciences",
    school: "Stockholm University",
    period: "2021 - 2024 · 180 ECTS",
  },
  pdfHref: "/media/resume.pdf",
  pdfLabel: LABELS.viewPdf,
  pdfAriaLabel: "View Joel Hägvall's resume as a PDF",
} as const;

// ============================================
// Contact page
// ============================================
export const CONTACT_CONTENT = {
  pageTitle: "Contact",
  subtitle: `Get in touch with ${PERSON.name}`,
  intro: `The fastest way to reach me is email. I'm based in ${PERSON.location.city}, ${PERSON.location.country} (CET/CEST), and I usually reply within one or two business days. Whether you have a freelance project in mind, a question about something I've built or written, or just want to say hi — my inbox is open.`,
  channels: {
    heading: "Channels",
    email: {
      label: "Email",
      value: SOCIAL.email,
      description:
        "Best for project inquiries, collaboration and anything that needs a real answer. Include a short description of what you're building and I'll get back to you.",
    },
    github: {
      label: "GitHub",
      value: SOCIAL.github.url,
      description:
        "For issues, pull requests and discussions about my open-source projects.",
    },
    linkedin: {
      label: "LinkedIn",
      value: SOCIAL.linkedin.url,
      description: "For professional networking and recruiter contact.",
    },
  },
  freelance: {
    heading: "Hiring me for a project?",
    text: "Have a look at the Work With Me page first — it describes the kind of AI and SaaS product work I take on, how I work and what you get. Then send an email with your idea and timeline.",
    linkLabel: "Work with me",
    linkHref: "/work-with-me",
  },
  security: {
    heading: "Reporting a security issue?",
    text: "Please follow the responsible disclosure guidelines on the security policy page.",
    linkLabel: "Security policy",
    linkHref: "/security-policy",
  },
} as const;

// ============================================
// Privacy page
// ============================================
export const PRIVACY_CONTENT = {
  pageTitle: "Privacy Policy",
  subtitle: "What this site collects, and what it doesn't",
  updated: "Last updated: August 2026",
  intro: `This is the personal website of ${PERSON.name}. It's a static site — a portfolio and blog — and it's built to collect as little data about you as possible. This page explains exactly what happens when you visit.`,
  sections: [
    {
      heading: "What is collected",
      paragraphs: [
        "The site uses Vercel Analytics and Vercel Speed Insights to understand aggregate traffic and performance. These collect anonymized, aggregated data such as page views, referrers, country-level location, device type and Core Web Vitals. They do not use cookies and do not track you across sites. No personally identifiable information is stored.",
      ],
    },
    {
      heading: "What is never collected",
      paragraphs: [
        "There are no accounts, no forms that store your data, no advertising trackers, no third-party marketing pixels and no cross-site tracking cookies. The site does not sell, share or monetize visitor data in any way. If you email me, your message stays in my inbox and is used only to reply to you.",
      ],
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "The site is hosted on Vercel, which processes standard server logs (IP address, user agent) to serve requests and prevent abuse, per Vercel's own privacy policy. Fonts are self-hosted or loaded from Google Fonts. The GitHub contribution graph on the homepage fetches public data from a GitHub contributions API.",
      ],
    },
    {
      heading: "Your rights and contact",
      paragraphs: [
        `Since the site stores no personal data about visitors, there is nothing to request, correct or delete. If you have any questions about this policy, email ${SOCIAL.email}.`,
      ],
    },
  ],
} as const;

// ============================================
// Footer
// ============================================
export const FOOTER_CONTENT = {
  name: PERSON.name,
  tagline: `Software Developer based in ${PERSON.location.city}, ${PERSON.location.country}.`,
  copyright: (year: number) => `© ${year}`,
  contact: "Contact",
  privacy: "Privacy",
  securityPolicy: LABELS.securityPolicy,
  viewSource: "View source",
  sourceUrl: "https://github.com/joelhagvall/personal-website",
} as const;

// ============================================
// Social Links / Email Popover
// ============================================
export const EMAIL_POPOVER = {
  openMailTitle: "Open Mail App?",
  openMailDescription: (email: string) =>
    `This will open your default email application to send a message to: ${email}`,
  emailLabel: "Email",
} as const;
