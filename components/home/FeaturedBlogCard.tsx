import { MoveRight, Calendar } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/AnimatedCard";
import { LINK_STYLES } from "@/lib/styles";
import { HOME_CONTENT, LABELS } from "@/data/content";
import type { PostMeta } from "@/types/blog";

interface FeaturedBlogCardProps {
  post: PostMeta | null;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  if (!post) {
    return null;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <AnimatedCard as="section" aria-labelledby="featured-post-heading" className="col-span-full md:col-span-3" cardClassName="flex flex-col">
      <h2 id="featured-post-heading" className="text-2xl font-semibold mb-4">
        {HOME_CONTENT.featuredBlog.heading}
      </h2>
      <div className="space-y-3">
        <h3 className="text-xl font-medium">{post.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
        <p className="text-muted-foreground">{post.description}</p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <Link
          href={`/blog/${post.slug}`}
          scroll={true}
          aria-label={`Read post: ${post.title}`}
          className={`inline-flex items-center gap-2 ${LINK_STYLES.primary}`}
        >
          {LABELS.readPost}
        </Link>
        <Link
          href="/blog"
          scroll={true}
          className={`ml-auto ${LINK_STYLES.button}`}
        >
          {LABELS.allPosts}
          <MoveRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </AnimatedCard>
  );
}
