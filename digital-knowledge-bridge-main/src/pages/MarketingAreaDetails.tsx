import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { areas } from "@/components/MarketingAreas";

const MarketingAreaDetails = () => {
  const { area } = useParams();
  const navigate = useNavigate();
  
  const areaDetails = areas.find((a) => a.title.toLowerCase().replace(/\s+/g, '-') === area);

  if (!areaDetails) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Área não encontrada</h1>
          <Button
            onClick={() => navigate('/')}
            variant="secondary"
            className="hover:bg-secondary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary p-4 md:p-8 py-16">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate('/')}
          variant="secondary"
          className="mb-8 hover:bg-secondary/90 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
        </Button>

        <div className="bg-primary-dark rounded-lg p-8 md:p-12 text-white shadow-xl animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <areaDetails.icon className="w-16 h-16 md:w-20 md:h-20 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold">{areaDetails.title}</h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed">{areaDetails.description}</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">O que é?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {getAreaDescription(areaDetails.title)}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const getAreaDescription = (title: string) => {
  const descriptions: Record<string, string> = {
    "SEO": "Search Engine Optimization (SEO) é um conjunto de técnicas e estratégias que visam melhorar o posicionamento de um site nos resultados orgânicos dos mecanismos de busca. Através de otimizações técnicas, criação de conteúdo relevante e construção de autoridade, o SEO ajuda a aumentar a visibilidade online e atrair mais visitantes qualificados.",
    "Mídias Sociais": "O Marketing em Mídias Sociais envolve a criação e compartilhamento de conteúdo nas redes sociais para atingir objetivos de marketing e branding. Através de estratégias específicas para cada plataforma, é possível construir relacionamentos com o público, aumentar o engajamento e gerar resultados para o negócio.",
    "Email Marketing": "Email Marketing é uma estratégia que utiliza o envio de emails para comunicar com clientes e prospects. Através de newsletters, campanhas promocionais e emails automatizados, é possível nutrir leads, fidelizar clientes e aumentar as vendas de forma personalizada e mensurável.",
    "Marketing de Conteúdo": "O Marketing de Conteúdo é uma abordagem estratégica focada na criação e distribuição de conteúdo valioso e relevante para atrair e reter um público-alvo definido. Através de blog posts, vídeos, podcasts e outros formatos, busca-se estabelecer autoridade e gerar resultados de longo prazo.",
    "Marketing de Performance": "Marketing de Performance é focado em resultados mensuráveis e otimização constante das campanhas. Através de anúncios pagos em diferentes plataformas, é possível gerar tráfego qualificado, leads e vendas com investimento controlado e ROI mensurável.",
    "Marketing Visual": "O Marketing Visual utiliza elementos visuais para comunicar a mensagem da marca de forma efetiva. Através de design, fotografia, vídeos e identidade visual consistente, busca-se criar uma conexão emocional com o público e fortalecer o reconhecimento da marca.",
    "UX Design": "UX Design (User Experience Design) é a prática de criar produtos digitais que proporcionam experiências significativas e relevantes para os usuários. Envolve pesquisa com usuários, prototipagem, testes de usabilidade e design de interação para garantir que os produtos sejam intuitivos, eficientes e agradáveis de usar.",
    "Publicidade Digital": "A Publicidade Digital engloba todas as formas de propaganda online, desde anúncios em redes sociais até campanhas de display e search ads. Com ferramentas avançadas de segmentação e análise de dados, é possível criar campanhas altamente direcionadas e mensurar precisamente o retorno sobre o investimento.",
    "Funil de Marketing": "O Funil de Marketing é uma representação visual do processo de conversão de um cliente, desde o primeiro contato até a compra final. Através de estratégias específicas para cada etapa do funil (consciência, consideração, decisão e fidelização), é possível otimizar a jornada do cliente e aumentar as taxas de conversão.",
    "SEM": "Search Engine Marketing (SEM) é uma estratégia que combina anúncios pagos em mecanismos de busca com otimização orgânica. Através de campanhas no Google Ads e outras plataformas, é possível alcançar resultados imediatos e mensuráveis, complementando as estratégias de SEO orgânico."
  };
  
  return descriptions[title] || "Descrição em breve.";
};

export default MarketingAreaDetails;