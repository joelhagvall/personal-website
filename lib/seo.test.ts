import { FREELANCE } from "@/data/freelance";
import { PERSON, SITE, SOCIAL } from "@/data/site";
import {
  createBreadcrumbsJsonLd,
  createFaqPageJsonLd,
  freelanceServiceJsonLd,
} from "./seo";

describe("freelanceServiceJsonLd", () => {
  it("describes the freelance offering as a ProfessionalService", () => {
    expect(freelanceServiceJsonLd).toMatchObject({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${PERSON.name} Work With Me`,
      description: FREELANCE.metadata.description,
      url: `${SITE.url}/work-with-me`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SOCIAL.freelanceEmail,
      },
    });

    expect(freelanceServiceJsonLd.hasOfferCatalog.itemListElement).toHaveLength(
      FREELANCE.services.length
    );
    expect(
      freelanceServiceJsonLd.hasOfferCatalog.itemListElement.map(
        (item) => item.itemOffered.name
      )
    ).toEqual(FREELANCE.services.map((service) => service.title));
  });
});

describe("createFaqPageJsonLd", () => {
  it("maps FAQ items to schema.org questions and answers", () => {
    const result = createFaqPageJsonLd([
      {
        question: "What do you build?",
        answer: "Web products and product features.",
      },
      {
        question: "How do you work?",
        answer: "Short feedback loops with AI-assisted execution.",
      },
    ]);

    expect(result).toEqual({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What do you build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web products and product features.",
          },
        },
        {
          "@type": "Question",
          name: "How do you work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Short feedback loops with AI-assisted execution.",
          },
        },
      ],
    });
  });
});

describe("createBreadcrumbsJsonLd", () => {
  it("assigns breadcrumb positions in order", () => {
    const result = createBreadcrumbsJsonLd([
      { name: "Home", url: SITE.url },
      { name: "Work with me", url: `${SITE.url}/work-with-me` },
    ]);

    expect(result).toEqual({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work with me",
          item: `${SITE.url}/work-with-me`,
        },
      ],
    });
  });
});
