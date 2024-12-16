import { Brain, Zap, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Preditiva",
    description:
      "Nossa IA aprende seus padrões para sugerir os melhores horários de agendamento.",
  },
  {
    icon: Zap,
    title: "Otimização Automática",
    description:
      "Reorganização inteligente de compromissos para maximizar sua produtividade.",
  },
  {
    icon: TrendingUp,
    title: "Análises Avançadas",
    description: "Insights detalhados sobre sua agenda e hábitos de trabalho.",
  },
  {
    icon: Users,
    title: "Agendamento em Grupo",
    description:
      "IA que encontra o melhor horário para reuniões com múltiplos participantes.",
  },
];

export default function AIFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recursos de IA Avançados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
