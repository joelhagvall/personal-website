/**
 * The homepage cards must be <section> landmarks labelled by their own h2 so
 * agents and assistive tech get a real document outline, not a flat div soup.
 */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { FeaturedBlogCard } from "./FeaturedBlogCard";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { FreelanceCard } from "./FreelanceCard";
import { IntroductionCard } from "./IntroductionCard";
import { PublicationsCard } from "./PublicationsCard";
import { TechStackCard } from "./TechStackCard";

const post = {
  slug: "hello",
  title: "Hello world",
  date: "2026-01-01",
  description: "A post.",
  tags: ["ai"],
  featured: true,
};

const cards: Array<[string, string, React.ReactElement]> = [
  ["IntroductionCard", "introduction-heading", createElement(IntroductionCard)],
  ["FreelanceCard", "work-with-me-heading", createElement(FreelanceCard)],
  ["TechStackCard", "tech-stack-heading", createElement(TechStackCard)],
  ["FeaturedProjectCard", "featured-project-heading", createElement(FeaturedProjectCard)],
  ["PublicationsCard", "publications-heading", createElement(PublicationsCard)],
  ["FeaturedBlogCard", "featured-post-heading", createElement(FeaturedBlogCard, { post })],
];

describe.each(cards)("%s", (_name, headingId, element) => {
  const html = renderToStaticMarkup(element);

  it("renders as a section landmark labelled by its h2", () => {
    expect(html).toMatch(new RegExp(`<section[^>]*aria-labelledby="${headingId}"`));
    expect(html).not.toMatch(/<div[^>]*aria-labelledby/);
    expect(html).toMatch(new RegExp(`<h2[^>]*id="${headingId}"`));
    expect(html.match(/<h1[\s>]/g)).toBeNull();
  });
});
