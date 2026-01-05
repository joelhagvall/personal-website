import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostMeta } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): PostMeta[] {
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
      tags: (data["tags"] as string[]) ?? [],
      featured: (data["featured"] as boolean) ?? false,
    } satisfies PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: (data["title"] as string) ?? "Untitled",
    date: (data["date"] as string) ?? "",
    description: (data["description"] as string) ?? "",
    tags: (data["tags"] as string[]) ?? [],
    featured: (data["featured"] as boolean) ?? false,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getFeaturedPost(): PostMeta | null {
  const posts = getAllPosts();
  return posts.find((post) => post.featured) ?? null;
}
