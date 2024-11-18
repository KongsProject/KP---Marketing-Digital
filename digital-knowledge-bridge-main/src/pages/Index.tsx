import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketingAreas } from "@/components/MarketingAreas";
import { MarketingStats } from "@/components/MarketingStats";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MarketingAreas />
      <MarketingStats />
    </main>
  );
};

export default Index;