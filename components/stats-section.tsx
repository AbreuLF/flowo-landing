import { Users, Calendar, Clock, Trophy } from "lucide-react";
import { StatsCard } from "./stats-card";

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#13131A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={Users}
            value={10000}
            label="Usuários Ativos"
            suffix="+"
          />
          <StatsCard
            icon={Calendar}
            value={1000000}
            label="Agendamentos"
            suffix="+"
          />
          <StatsCard icon={Clock} value={98} label="Menos Faltas" suffix="%" />
          <StatsCard
            icon={Trophy}
            value={4.9}
            label="Avaliação Média"
            suffix="/5"
            decimal={true}
          />
        </div>
      </div>
    </section>
  );
}
