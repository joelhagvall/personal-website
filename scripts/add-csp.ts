// Writes the per-page CSP meta tag into every HTML file in out/. See scripts/csp.ts.
import fs from "fs";
import path from "path";

import { addCspMeta } from "./csp";

function htmlFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

const files = htmlFiles(path.join(process.cwd(), "out"));
for (const file of files) fs.writeFileSync(file, addCspMeta(fs.readFileSync(file, "utf-8")));
console.log(`CSP hashes added to ${files.length} HTML files`);
