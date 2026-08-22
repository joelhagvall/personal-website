import { SITE } from "@/data/site";
import { buildPages } from "./markdown-pages";

describe("buildPages", () => {
  const pages = buildPages();

  it("emits a short markdown 404 page with recovery links", () => {
    const md = pages["404.md"];
    expect(md).toBeDefined();
    expect(md!.length).toBeLessThan(1200);
    expect(md).toMatch(/^# Page not found/);
    expect(md).toContain("(HTTP 404)");
    expect(md).toContain(`](${SITE.url}/)`);
    expect(md).toContain(`](${SITE.url}/llms.txt)`);
    expect(md).toContain(`](${SITE.url}/sitemap.xml)`);
    expect(md).toContain(`](${SITE.url}/agents.md)`);
  });

  it("tells agents how 404s behave in agents.md", () => {
    expect(pages["agents.md"]).toContain("Missing pages return a real HTTP 404");
    expect(pages["agents.md"]).toContain("Accept: text/markdown");
  });

  it("still emits the core page twins", () => {
    for (const p of ["index.md", "about.md", "projects.md", "blog.md", "contact.md", "llms.txt"]) {
      if (p === "llms.txt") continue; // generated elsewhere
      expect(pages[p]).toMatch(/^# /);
    }
  });
});
