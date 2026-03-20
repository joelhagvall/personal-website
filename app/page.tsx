import { Footer } from "@/components/Footer";
import {
  HeroSection,
  IntroductionCard,
  TechStackCard,
  FeaturedProjectCard,
  FeaturedBlogCard,
  PublicationsCard,
  GitHubCalendarCard,
} from "@/components/home";
import { getFeaturedPost } from "@/lib/blog";

export default function Home() {
  const featuredPost = getFeaturedPost();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <IntroductionCard />
            <TechStackCard />
            <FeaturedProjectCard />
            <PublicationsCard />
            <FeaturedBlogCard post={featuredPost} />
            <GitHubCalendarCard />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
