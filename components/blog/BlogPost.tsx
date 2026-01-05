import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";
import type { Post } from "@/types/blog";
import { mdxComponents } from "./mdx-components";

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/blog"
        scroll={true}
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to blog
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.date}>{formattedDate}</time>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark",
                    keepBackground: true,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
