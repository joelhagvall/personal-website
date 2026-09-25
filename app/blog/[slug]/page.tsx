import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { BlogPost } from "@/components/blog/BlogPost";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { blogPostingJsonLd, createBreadcrumbsJsonLd } from "@/lib/seo";
import { BREADCRUMBS } from "@/data/seo-metadata";
import { OG_IMAGE, PERSON, SITE } from "@/data/site";

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
    title: `${post.title} - ${PERSON.name}`,
    description: post.description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
      types: {
        "text/markdown": `${url}.md`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [PERSON.name],
      url,
      siteName: SITE.name,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbsJsonLd = createBreadcrumbsJsonLd([
    BREADCRUMBS.home,
    BREADCRUMBS.blog,
    { name: post.title, url: `${SITE.url}/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen text-foreground p-8 md:p-12 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <BlogPost post={post} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
