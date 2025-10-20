"use client";

import {
  Calendar,
  Clock,
  Users,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./section";

const features = [
  {
    icon: MessageCircle,
    title: "Cliente Agenda pelo WhatsApp",
    description:
      "Chega de ficar respondendo mensagem o dia todo. Seu cliente manda 'Quero marcar corte', a IA mostra os horários livres e pronto, tá marcado. Funciona 24/7, mesmo você dormindo.",
    metric: "3h por dia",
  },
  {
    icon: Calendar,
    title: "Lembretes Automáticos",
    description:
      "Sabe aquele cliente que marca e não aparece? O sistema manda lembrete 1 dia antes e 1 hora antes do horário. Simples assim. Suas faltas caem pra menos de 20%.",
    metric: "60% menos faltas",
  },
  {
    icon: Clock,
    title: "Fila Inteligente",
    description:
      "Cliente vê quanto tempo falta pro atendimento dele direto no WhatsApp. Ninguém mais fica perguntando 'Quanto tempo falta?' a cada 5 minutos. Paz de espírito pra você e pro cliente.",
    metric: "+50% faturamento",
  },
  {
    icon: Users,
    title: "Gerencia Vários Barbeiros",
    description:
      "Tem 2, 3, 5 barbeiros? Sem problema. A agenda mostra todo mundo junto e distribui os clientes certinho. Ninguém fica parado enquanto outro tá lotado.",
    metric: "4.8★ avaliação",
  },
  {
    icon: TrendingUp,
    title: "Lembra o Cliente e Vende Mais",
    description:
      "Sistema guarda o histórico: último corte, se o cara gosta de barba, se já fez sombrancelha. Na próxima vez, sugere combo automaticamente. Seu ticket médio sobe natural.",
    metric: "570+ barbearias",
  },
  // TODO: Descomentar quando funcionalidade de campanhas estiver pronta
  // {
  //   icon: Megaphone,
  //   title: "Campanhas Automáticas no WhatsApp",
  //   description:
  //     "Manda promoção de verão? Lembra cliente que sumiu? Oferece combo especial? Tudo automático pelo WhatsApp. Você cria uma vez e o sistema cuida do resto. Cliente recebe na conversa dele, sem spam.",
  //   metric: "60% menos faltas",
  // },
];

export default function Features() {
  return (
    <Section background="white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tudo que Sua Barbearia Precisa
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ferramentas práticas que resolvem os problemas do dia a dia
        </p>

        {/* Show all 5 cards in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-14 h-14 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  {feature.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
