import fs from "fs";
import path from "path";

interface HeaderCondition {
  type: string;
  key: string;
  value?: string;
}

interface Route {
  src?: string;
  dest?: string;
  status?: number;
  handle?: string;
  has?: HeaderCondition[];
  missing?: HeaderCondition[];
  headers?: Record<string, string>;
}

const config = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "vercel.json"), "utf-8")
) as { routes: Route[] };

const matches = (pattern: string, value: string) => new RegExp(pattern).test(value);

describe("vercel.json 404 fallback", () => {
  const routes = config.routes;
  const fsIndex = routes.findIndex((r) => r.handle === "filesystem");
  const fallbacks = routes.slice(fsIndex + 1);

  it("places the markdown 404 fallbacks after the filesystem phase", () => {
    expect(fsIndex).toBeGreaterThan(-1);
    expect(fallbacks.length).toBeGreaterThanOrEqual(2);
    for (const r of fallbacks) {
      expect(r.dest).toBe("/404.md");
      expect(r.status).toBe(404);
      expect(r.headers?.["Content-Type"]).toMatch(/^text\/markdown/);
      expect(r.headers?.["Vary"]).toBe("Accept");
      expect(matches(r.src!, "/some-path-that-does-not-exist")).toBe(true);
    }
  });

  it("serves markdown 404s to Accept: text/markdown clients", () => {
    const md = fallbacks.find((r) => r.has?.some((c) => c.key === "accept"));
    expect(md).toBeDefined();
    const cond = md!.has![0]!;
    expect(matches(cond.value!, "text/markdown")).toBe(true);
    expect(matches(cond.value!, "text/html,application/xhtml+xml")).toBe(false);
  });

  it("serves markdown 404s to clients that do not accept HTML, but never to browsers", () => {
    const nonHtml = fallbacks.find((r) => r.missing?.some((c) => c.key === "accept"));
    expect(nonHtml).toBeDefined();
    const cond = nonHtml!.missing![0]!;
    // Browser Accept header contains text/html -> condition present -> route skipped
    expect(matches(cond.value!, "text/html,application/xhtml+xml,*/*;q=0.8")).toBe(true);
    // curl / fetch default Accept does not -> route applies
    expect(matches(cond.value!, "*/*")).toBe(false);
    expect(matches(cond.value!, "application/json")).toBe(false);
  });

  it("keeps the markdown negotiation routes before the filesystem phase", () => {
    const before = routes.slice(0, fsIndex);
    expect(before.some((r) => r.dest === "/index.md")).toBe(true);
    expect(before.some((r) => r.dest === "/$1.md")).toBe(true);
  });
});
