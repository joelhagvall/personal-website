import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { Rss } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen text-white p-8 md:p-12 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Blog
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <p className="text-xl text-gray-400">
                Thoughts, ideas, and things I&apos;ve learned along the way.
              </p>
              <Link
                href="/feed.xml"
                target="_blank"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                title="RSS Feed"
              >
                <Rss className="w-5 h-5" />
              </Link>
            </div>

            {posts.length === 0 ? (
              <p className="text-gray-400 text-lg text-center">No posts yet. Check back soon!</p>
            ) : (
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <BlogCard key={post.slug} {...post} delay={index * 0.1} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer mailMode="copy" />
    </main>
  );
}
