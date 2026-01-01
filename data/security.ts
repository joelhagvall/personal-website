/**
 * Centralized security policy content
 * All security-related text in one place
 */

export const SECURITY_CONTENT = {
  page: {
    title: "Security Policy",
    subtitle:
      "I take security seriously and welcome responsible disclosure of vulnerabilities.",
  },

  responsibleDisclosure: {
    badge: "Security",
    title: "Responsible Disclosure",
    description: "How to report security vulnerabilities responsibly",
    intro:
      "I appreciate security researchers who help me maintain the security and privacy of my website visitors. If you discover a security vulnerability, I encourage you to report it to me responsibly.",
    whatToReport: {
      title: "What to report:",
      items: [
        "Cross-site scripting (XSS)",
        "SQL injection",
        "Authentication bypass",
        "Data exposure",
        "Privilege escalation",
        "Any other security-related issues",
      ],
    },
  },

  howToReport: {
    title: "How to Report",
    description: "Steps to follow when reporting a security vulnerability",
    steps: [
      {
        number: "1",
        title: "Email me directly",
        description: "Send your report to:",
      },
      {
        number: "2",
        title: "Include detailed information",
        description:
          "Provide a clear description of the vulnerability, steps to reproduce, and potential impact.",
      },
      {
        number: "3",
        title: "Allow time for response",
        description:
          "I will acknowledge your report within 48 hours and provide updates on my progress.",
      },
    ],
  },

  whatToExpect: {
    title: "What to Expect",
    description: "My response process and timeline",
    timeline: [
      {
        time: "48 hours",
        description: "Initial acknowledgment of your report",
      },
      {
        time: "1-2 weeks",
        description: "Assessment and validation of the vulnerability",
      },
      {
        time: "2-4 weeks",
        description: "Fix development and testing",
      },
      {
        time: "Upon fix",
        description: "Public disclosure and acknowledgment",
      },
    ],
  },

  guidelines: {
    title: "Guidelines",
    description: "Important guidelines for security researchers",
    do: {
      badge: "✓",
      title: "Do",
      items: [
        "Test only on your own accounts or with explicit permission",
        "Avoid accessing or modifying other users' data",
        "Use the provided contact method for reporting",
        "Provide sufficient detail to reproduce the issue",
      ],
    },
    dont: {
      badge: "✗",
      title: "Don't",
      items: [
        "Perform actions that could harm the service or other users",
        "Access, modify, or delete data that doesn't belong to you",
        "Disclose the vulnerability publicly before we've had time to fix it",
        "Use automated tools that could impact service performance",
      ],
    },
  },

  recognition: {
    title: "Recognition",
    description: "How we acknowledge security researchers",
    text: "Security researchers who responsibly disclose vulnerabilities will be acknowledged on this page (with their permission) and may be eligible for recognition in my security hall of fame.",
  },

  contact: {
    title: "Contact Information",
    description: "Get in touch for security-related matters",
    securityEmailLabel: "Security Email:",
    securityTxtLabel: "Security.txt:",
    securityTxtPath: "/.well-known/security.txt",
    generalInquiries:
      "For general inquiries, please use the contact information on my",
    aboutPageLink: "about page",
  },
} as const;
