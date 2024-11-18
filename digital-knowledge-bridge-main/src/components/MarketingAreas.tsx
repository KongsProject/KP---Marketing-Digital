import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  Share2, 
  Mail, 
  TrendingUp, 
  MessageSquare, 
  Camera,
  User,
  Target,
  Filter,
  Megaphone
} from "lucide-react";

export const areas = [
  {
    title: "SEO",
    icon: Search,
    description: "Domine as técnicas de otimização para mecanismos de busca e aumente sua visibilidade online de forma orgânica"
  },
  {
    title: "Mídias Sociais",
    icon: Share2,
    description: "Aprenda a criar estratégias eficientes para as principais redes sociais e construa uma presença digital impactante"
  },
  {
    title: "Email Marketing",
    icon: Mail,
    description: "Desenvolva campanhas de email marketing eficazes para nutrir leads e converter clientes"
  },
  {
    title: "Marketing de Conteúdo",
    icon: MessageSquare,
    description: "Crie conteúdo relevante e estratégico que atrai, engaja e converte sua audiência"
  },
  {
    title: "Marketing de Performance",
    icon: TrendingUp,
    description: "Aprenda a criar e otimizar campanhas pagas para maximizar seu retorno sobre investimento"
  },
  {
    title: "Marketing Visual",
    icon: Camera,
    description: "Desenvolva uma identidade visual forte e crie conteúdo visual que se destaca e gera resultados"
  },
  {
    title: "UX Design",
    icon: User,
    description: "Aprenda a criar experiências digitais centradas no usuário que aumentam a satisfação e a conversão"
  },
  {
    title: "Publicidade Digital",
    icon: Target,
    description: "Domine as principais plataformas de anúncios online e crie campanhas que geram resultados mensuráveis"
  },
  {
    title: "Funil de Marketing",
    icon: Filter,
    description: "Aprenda a criar e otimizar funis de vendas eficientes para converter leads em clientes fiéis"
  },
  {
    title: "SEM",
    icon: Megaphone,
    description: "Domine o Marketing de Busca e crie campanhas pagas eficientes no Google Ads e outras plataformas"
  }
];

export const MarketingAreas = () => {
  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/area/${slug}`);
  };

  return (
    <section id="marketing-areas" className="py-16 md:py-24 bg-primary-light px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-up">
            Áreas do Marketing Digital
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-up [animation-delay:200ms]">
            Explore as diferentes áreas do Marketing Digital e descubra como cada uma pode contribuir para seu sucesso profissional. 
            De iniciante a especialista, oferecemos o conhecimento necessário para você se destacar no mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <Card 
              key={area.title} 
              className="p-8 card-hover bg-primary-dark border-none cursor-pointer transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleCardClick(area.title)}
            >
              <area.icon className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">{area.title}</h3>
              <p className="text-gray-300 leading-relaxed">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};