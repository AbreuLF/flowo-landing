import { TrendingDown, TrendingUp, Users } from "lucide-react";

interface ProofMetric {
  label: string;
  value: string;
  helper: string;
}

interface ProofResultsSectionProps {
  title?: string;
  description?: string;
  metrics?: ProofMetric[];
}

const defaultMetrics: ProofMetric[] = [
  {
    label: "Redução média de faltas",
    value: "-70%",
    helper: "Com lembrete + confirmação pelo WhatsApp",
  },
  {
    label: "Aumento de comparecimento",
    value: "+32%",
    helper: "Mais previsibilidade na agenda semanal",
  },
  {
    label: "Retorno de clientes",
    value: "+24%",
    helper: "Com follow-up e reativação automática",
  },
];

export function ProofResultsSection({
  title = "Prova de resultado em barbearias reais",
  description = "Resultados observados em operações que aplicaram automação de agenda, confirmação e rotina de reengajamento com o Flowo.",
  metrics = defaultMetrics,
}: ProofResultsSectionProps) {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
      <div className="flex items-center gap-2 text-primary">
        <Users className="h-5 w-5" />
        <span className="text-sm font-semibold">Casos reais</span>
      </div>
      <h2 className="mt-2 text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 max-w-3xl text-gray-600">{description}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm text-gray-600">{metric.label}</p>
              {metric.value.startsWith("-") ? (
                <TrendingDown className="h-5 w-5 text-emerald-600" />
              ) : (
                <TrendingUp className="h-5 w-5 text-primary" />
              )}
            </div>
            <p className="mt-2 text-3xl font-bold text-gray-900">{metric.value}</p>
            <p className="mt-1 text-xs text-gray-500">{metric.helper}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
