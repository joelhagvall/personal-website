// Adds a per-page CSP meta tag that allows only the inline scripts the build itself wrote.
// The static export has no nonces, so the vercel.json header has to allow inline scripts.
// This meta policy is enforced on top of it and narrows inline scripts to these hashes.
import { createHash } from "crypto";

const SCRIPT_RE = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/g;
const NON_JS_TYPE = /\stype=["']?(?!text\/javascript|module)[^"'\s>]+/i;

export function inlineScriptHashes(html: string): string[] {
  const hashes = new Set<string>();
  for (const [, attrs = "", body = ""] of html.matchAll(SCRIPT_RE)) {
    if (/\ssrc=/i.test(attrs) || NON_JS_TYPE.test(attrs) || body === "") continue;
    hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }
  return [...hashes];
}

export function addCspMeta(html: string): string {
  if (html.includes('http-equiv="Content-Security-Policy"')) return html;
  const policy = ["script-src 'self'", ...inlineScriptHashes(html)].join(" ");
  return html.replace(/<head(\s[^>]*)?>/i, (head) => `${head}<meta http-equiv="Content-Security-Policy" content="${policy}"/>`);
}
