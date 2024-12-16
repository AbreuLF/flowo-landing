import { StatsCard } from "./stats-card";

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard value={30} label="Aumento no faturamento" suffix="%" />
            <StatsCard value={5} label="Economia semanal" suffix="h" />
            <StatsCard value={98} label="Satisfação" suffix="%" />
            <StatsCard value={50000} label="Agendamentos/mês" />
          </div>
        </div>
      </div>
    </section>
  );
}
