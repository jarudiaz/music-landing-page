import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MusicSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
