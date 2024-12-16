import {
  Calendar,
  Clock,
  Users,
  BarChart,
  MessageCircle,
  Lock,
} from "lucide-react";
import { AnimatedElement } from "./animated-element";
import { Section } from "./section";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description:
      "IA que aprende seus padrões e otimiza sua agenda automaticamente.",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description:
      "Envie lembretes e confirmações diretamente pelo WhatsApp dos clientes.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description:
      "Reduza o tempo gasto em tarefas administrativas e foque no que importa.",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description:
      "Gerencie facilmente a agenda de toda sua equipe em um só lugar.",
  },
  {
    icon: BarChart,
    title: "Análises Avançadas",
    description:
      "Obtenha insights valiosos sobre sua produtividade e desempenho.",
  },
  {
    icon: Lock,
    title: "Segurança e Privacidade",
    description:
      "Seus dados e os de seus clientes estão protegidos com criptografia de ponta.",
  },
];

export default function Features() {
  return (
    <Section background="white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Recursos Poderosos do Flowo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedElement key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
}
