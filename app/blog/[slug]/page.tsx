import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { BlogPost } from "@/components/blog/BlogPost";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { PERSON, SITE } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `${SITE.url}/blog/${slug}`;

  return {
    title: `${post.title} – ${PERSON.name}`,
    description: post.description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [PERSON.name],
      url,
      siteName: SITE.name,
      images: [
        {
          url: PERSON.avatar,
          width: 1200,
          height: 630,
          alt: PERSON.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [PERSON.avatar],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen text-white p-8 md:p-12 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <BlogPost post={post} />
          </div>
        </div>
      </div>
      <Footer mailMode="copy" />
    </main>
  );
}
