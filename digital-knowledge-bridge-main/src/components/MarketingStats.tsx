import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

const channelData = [
  { channel: "Redes Sociais", alcance: 92, roi: 3.5 },
  { channel: "Email Marketing", alcance: 78, roi: 4.2 },
  { channel: "SEO", alcance: 85, roi: 5.1 },
  { channel: "Conteúdo", alcance: 88, roi: 3.8 },
  { channel: "Anúncios", alcance: 75, roi: 2.9 },
];

const investimentData = [
  { ano: "2020", valor: 45 },
  { ano: "2021", valor: 58 },
  { ano: "2022", valor: 72 },
  { ano: "2023", valor: 85 },
  { ano: "2024", valor: 95 },
];

export const MarketingStats = () => {
  return (
    <section id="marketing-stats" className="py-16 md:py-24 bg-primary px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center animate-fade-up">
          Estatísticas do Marketing Digital
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-dark p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Alcance e ROI por Canal</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelData}>
                  <XAxis dataKey="channel" stroke="#CC7D51" />
                  <YAxis stroke="#CC7D51" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#15253F",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#CC7D51" }}
                  />
                  <Legend />
                  <Bar dataKey="alcance" name="Alcance %" fill="#CC7D51" />
                  <Bar dataKey="roi" name="ROI (x)" fill="#2B3D5B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-primary-dark p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">
              Investimento em Marketing Digital (Bilhões R$)
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={investimentData}>
                  <XAxis dataKey="ano" stroke="#CC7D51" />
                  <YAxis stroke="#CC7D51" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#15253F",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#CC7D51" }}
                  />
                  <Bar dataKey="valor" name="Investimento" fill="#CC7D51" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-primary-dark p-6 rounded-lg shadow-xl animate-fade-up">
          <h3 className="text-2xl font-semibold mb-6 text-secondary">Métricas Importantes</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-secondary">Métrica</TableHead>
                  <TableHead className="text-secondary">Média do Mercado</TableHead>
                  <TableHead className="text-secondary">Benchmark</TableHead>
                  <TableHead className="text-secondary">Importância</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-white">Taxa de Conversão</TableCell>
                  <TableCell className="text-white">2.35%</TableCell>
                  <TableCell className="text-white">&gt; 3%</TableCell>
                  <TableCell className="text-white">Alta</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Taxa de Abertura (Email)</TableCell>
                  <TableCell className="text-white">21.33%</TableCell>
                  <TableCell className="text-white">&gt; 25%</TableCell>
                  <TableCell className="text-white">Média</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Engajamento Redes Sociais</TableCell>
                  <TableCell className="text-white">3.91%</TableCell>
                  <TableCell className="text-white">&gt; 5%</TableCell>
                  <TableCell className="text-white">Alta</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">CTR Anúncios</TableCell>
                  <TableCell className="text-white">1.91%</TableCell>
                  <TableCell className="text-white">&gt; 2%</TableCell>
                  <TableCell className="text-white">Alta</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Posição Média SEO</TableCell>
                  <TableCell className="text-white">8.5</TableCell>
                  <TableCell className="text-white">&lt; 5</TableCell>
                  <TableCell className="text-white">Muito Alta</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};
