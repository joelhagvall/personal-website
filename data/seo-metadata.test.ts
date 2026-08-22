import { FREELANCE } from "./freelance";
import { PAGE_METADATA, BREADCRUMBS } from "./seo-metadata";
import { SITE } from "./site";

describe("PAGE_METADATA.freelance", () => {
  it("uses the freelance metadata copy and canonical URLs", () => {
    expect(PAGE_METADATA.freelance.title).toBe(
      "Work With Me – Joel Hägvall | Product Development"
    );
    expect(PAGE_METADATA.freelance.description).toBe(FREELANCE.metadata.description);
    expect(PAGE_METADATA.freelance.alternates).toEqual({
      canonical: `${SITE.url}/work-with-me`,
      languages: {
        en: `${SITE.url}/work-with-me`,
        "x-default": `${SITE.url}/work-with-me`,
      },
      types: {
        "text/markdown": `${SITE.url}/work-with-me.md`,
      },
    });
  });

  it("builds Open Graph and Twitter metadata for the freelance page", () => {
    expect(PAGE_METADATA.freelance.openGraph).toMatchObject({
      title: PAGE_METADATA.freelance.title,
      description: FREELANCE.metadata.description,
      url: `${SITE.url}/work-with-me`,
      type: "website",
    });
    expect(PAGE_METADATA.freelance.twitter).toEqual({
      card: "summary_large_image",
      title: PAGE_METADATA.freelance.title,
      description: FREELANCE.metadata.description,
      images: [`${SITE.url}/opengraph-image`],
    });
  });
});

describe("BREADCRUMBS", () => {
  it("includes a breadcrumb entry for the freelance page", () => {
    expect(BREADCRUMBS.freelance).toEqual({
      name: "Work with me",
      url: `${SITE.url}/work-with-me`,
    });
  });
});
