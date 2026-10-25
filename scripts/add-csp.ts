// Writes the per-page CSP meta tag into every built HTML file. See scripts/csp.ts.
// Next's Vercel adapter copies the export to Vercel's output before postbuild runs,
// so the copy there is patched too. addCspMeta skips files that already have the tag.
import fs from "fs";
import path from "path";

import { addCspMeta } from "./csp";

const OUTPUT_DIRS = ["out", ".vercel/output/static", "/vercel/output/static"];

function htmlFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

for (const dir of OUTPUT_DIRS.map((d) => path.resolve(process.cwd(), d))) {
  if (!fs.existsSync(dir)) continue;
  const files = htmlFiles(dir);
  for (const file of files) fs.writeFileSync(file, addCspMeta(fs.readFileSync(file, "utf-8")));
  console.log(`CSP hashes added to ${files.length} HTML files in ${dir}`);
}
