/**
 * Centralized UI text and labels
 * All user-facing text in one place for easy maintenance
 */

import { PERSON } from "./site";

// ============================================
// Navigation & Common Labels
// ============================================
export const LABELS = {
  // Navigation
  home: "Home",
  about: "About",
  aboutMe: "About Me",
  projects: "Projects",
  resume: "Resume",

  // Common actions
  sourceCode: "Source Code",
  viewPdf: "View PDF",
  moreProjects: "More Projects",
  liveDemo: "Live Demo",
  publication: "Publication",
  linkedinPost: "LinkedIn Post",
  continue: "Continue",
  copyToClipboard: "Copy to clipboard",

  // Section headers
  introduction: "Introduction",
  featuredProject: "Featured Project",
  techStack: "Tech Stack",
  publications: "Publications",
  securityPolicy: "Security Policy",

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
    text: `Hi, i'm ${PERSON.name}. I'm a software developer and tech enthusiast from ${PERSON.location.city}, ${PERSON.location.country}. Welcome to my website! Check out the`,
    linkText: LABELS.aboutMe,
    linkSuffix: "page to get to know me better.",
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
} as const;

export const ABOUT_CONTENT = {
  pageTitle: LABELS.aboutMe,
  sections: {
    whoIAm: "Who I Am",
    whereILive: "Where I Live",
    myInterests: "My Interests",
  },
  interests: {
    techIntro: "For as long as I can remember, I've always been interested in technology. Today i'm also drawn to tech that makes a difference:",
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

export const PROJECTS_CONTENT = {
  pageTitle: LABELS.projects,
  description: `A selection of my personal and academic projects - more found on my`,
  githubLink: "GitHub",
  githubSuffix: "profile.",
} as const;

// ============================================
// Footer
// ============================================
export const FOOTER_CONTENT = {
  name: PERSON.name,
  tagline: `Software Developer based in ${PERSON.location.city}, ${PERSON.location.country}.`,
  copyright: (year: number) => `© ${year}`,
  builtWith: "Built with Next.js",
  securityPolicy: LABELS.securityPolicy,
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
