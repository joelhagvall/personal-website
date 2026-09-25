import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { blogJsonLd, createBreadcrumbsJsonLd } from "@/lib/seo";
import { BREADCRUMBS } from "@/data/seo-metadata";
import { Rss } from "lucide-react";

const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
  BREADCRUMBS.home,
  BREADCRUMBS.blog,
]);

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-foreground p-8 md:p-12 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd(posts)) }}
      />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Blog
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <p className="text-xl text-muted-foreground">
                Thoughts, ideas, and things I&apos;ve learned along the way.
              </p>
              <a
                href="/feed.xml"
                target="_blank"
                className="text-muted-foreground hover:text-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="RSS Feed (opens in new tab)"
              >
                <Rss className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            {posts.length === 0 ? (
              <p className="text-muted-foreground text-lg text-center">No posts yet. Check back soon!</p>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
