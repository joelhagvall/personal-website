import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://joelhagvall.com";
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const OUTPUT_DIR = path.join(process.cwd(), "public");

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: (data["title"] as string) ?? "Untitled",
      date: (data["date"] as string) ?? "",
      description: (data["description"] as string) ?? "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateRssFeed(): string {
  const posts = getAllPosts();
  const lastBuildDate = new Date().toUTCString();

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Joel Hägvall - Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Blog posts by Joel Hägvall</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

function main() {
  const feed = generateRssFeed();
  const outputPath = path.join(OUTPUT_DIR, "feed.xml");

  fs.writeFileSync(outputPath, feed, "utf-8");
  console.log(`✓ RSS feed generated: ${outputPath}`);
}

main();
