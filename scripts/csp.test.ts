import { createHash } from "crypto";

import { addCspMeta, inlineScriptHashes } from "./csp";

const sha = (body: string) => `'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`;

describe("CSP hashes", () => {
  it("hashes only inline JavaScript", () => {
    const html = [
      '<script src="/a.js"></script>',
      '<script type="application/ld+json">{"a":1}</script>',
      "<script>self.x=1</script>",
      '<script id="_R_">self.y=2</script>',
      "<script></script>",
    ].join("");
    expect(inlineScriptHashes(html)).toEqual([sha("self.x=1"), sha("self.y=2")]);
  });

  it("puts the policy first in head and never inside a header element", () => {
    const html = "<html><head><meta charset=\"utf-8\"/><script>a()</script></head><body><header></header></body></html>";
    const out = addCspMeta(html);
    expect(out).toContain(`<head><meta http-equiv="Content-Security-Policy" content="script-src 'self' ${sha("a()")}"/>`);
    expect(out).toContain("<header></header>");
  });

  it("runs only once per file", () => {
    const once = addCspMeta("<head><script>a()</script></head>");
    expect(addCspMeta(once)).toBe(once);
  });
});
