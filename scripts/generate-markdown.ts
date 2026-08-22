/**
 * Generates markdown versions of every page for AI agents.
 *
 * Served via Accept: text/markdown content negotiation (see the routes in
 * vercel.json) and directly at /<page>.md. Written to public/ (committed, so
 * `next build` copies them into out/) and mirrored into out/ when it exists
 * so the current build ships fresh copies.
 *
 * Also emits 404.md, which vercel.json serves with HTTP 404 to agents that
 * request a missing path with Accept: text/markdown (or any non-HTML Accept).
 */

import fs from "fs";
import path from "path";

import { buildPages } from "./markdown-pages";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const OUT_DIR = path.join(process.cwd(), "out");

function main() {
  const pages = buildPages();
  const targets = [PUBLIC_DIR, ...(fs.existsSync(OUT_DIR) ? [OUT_DIR] : [])];

  for (const target of targets) {
    for (const [relPath, content] of Object.entries(pages)) {
      const outPath = path.join(target, relPath);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, content, "utf-8");
    }
  }
  console.log(
    `✓ Markdown pages generated: ${Object.keys(pages).length} pages → ${targets.join(", ")}`
  );
}

main();
