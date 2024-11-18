import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToMarketingAreas = () => {
    const marketingAreasSection = document.querySelector('#marketing-areas');
    marketingAreasSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] md:min-h-[80vh] flex items-center justify-center bg-primary text-white px-4 md:px-8 py-16 md:py-24 mt-16">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold animate-fade-up leading-tight">
          Marketing Digital: Do Básico ao Avançado
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-100 animate-fade-up [animation-delay:200ms]">
          Descubra o poder do Marketing Digital: desde conceitos fundamentais até estratégias avançadas. 
          Aprenda como transformar conhecimento em resultados reais e construir uma carreira lucrativa nesta área em constante crescimento.
        </p>
        <Button 
          className="bg-secondary hover:bg-secondary-dark text-white text-lg px-8 py-6 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-up [animation-delay:400ms]"
          onClick={scrollToMarketingAreas}
        >
          Começar Agora <ArrowRight className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};