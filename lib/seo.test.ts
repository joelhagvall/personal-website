import { FREELANCE } from "@/data/freelance";
import { PERSON, SITE, SOCIAL } from "@/data/site";
import {
  PERSON_ID,
  blogPostingJsonLd,
  createBreadcrumbsJsonLd,
  createProjectJsonLd,
  personJsonLd,
  profilePageJsonLd,
  createFaqPageJsonLd,
  freelanceServiceJsonLd,
} from "./seo";

describe("freelanceServiceJsonLd", () => {
  it("describes the freelance offering as a Service provided by the site's Person", () => {
    expect(freelanceServiceJsonLd).toMatchObject({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${PERSON.name} Work With Me`,
      description: FREELANCE.metadata.description,
      url: `${SITE.url}/work-with-me`,
      provider: { "@id": PERSON_ID },
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

describe("Person entity", () => {
  it("is one linked entity across the sitewide block and the profile page", () => {
    expect(personJsonLd["@id"]).toBe(PERSON_ID);
    expect(profilePageJsonLd.mainEntity["@id"]).toBe(PERSON_ID);
    expect(personJsonLd.email).toBe(`mailto:${SOCIAL.email}`);
    expect(personJsonLd.address.addressCountry).toBe("SE");
  });
});

describe("blogPostingJsonLd", () => {
  const post = {
    slug: "example",
    title: "Example",
    description: "An example post.",
    date: "2026-08-17",
    tags: ["ai"],
  };

  it("falls back to the publish date when the post was never updated", () => {
    expect(blogPostingJsonLd(post).dateModified).toBe("2026-08-17");
  });

  it("uses the updated date and links the author to the site's Person", () => {
    const result = blogPostingJsonLd({ ...post, updated: "2026-08-22" });
    expect(result.dateModified).toBe("2026-08-22");
    expect(result.author["@id"]).toBe(PERSON_ID);
  });
});

describe("createProjectJsonLd", () => {
  it("marks projects with a public repo as source code with real languages only", () => {
    const result = createProjectJsonLd({
      name: "Maskera",
      description: "Local PII redaction.",
      technologies: ["TypeScript", "ONNX", "PyTorch"],
      githubUrl: "https://github.com/joelhagvall/maskera",
      demoUrl: "https://maskera.dev/en",
    });
    expect(result).toMatchObject({
      "@type": "SoftwareSourceCode",
      url: "https://maskera.dev/en",
      codeRepository: "https://github.com/joelhagvall/maskera",
      programmingLanguage: ["TypeScript"],
    });
  });

  it("does not claim a code repository for closed projects", () => {
    const result = createProjectJsonLd({
      name: "ResiliaAI",
      description: "Pre-launch platform.",
      technologies: ["React", "RAG"],
    });
    expect(result["@type"]).toBe("CreativeWork");
    expect(result).not.toHaveProperty("codeRepository");
    expect(result.url).toBe(`${SITE.url}/projects`);
  });
});
