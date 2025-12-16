import { Footer } from "@/components/Footer";
import {
  HeroSection,
  IntroductionCard,
  TechStackCard,
  FeaturedProjectCard,
  PublicationsCard,
} from "@/components/home";

export default function Home() {
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
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
