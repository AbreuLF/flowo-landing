"use client";

import {
  Calendar,
  Clock,
  Users,
  MessageCircle,
  TrendingUp,
  CreditCard,
  RefreshCw,
  Webhook,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./section";

const features = [
  {
    icon: MessageCircle,
    title: "Agendamento via WhatsApp com IA",
    description:
      "Cliente manda 'Quero marcar corte', a IA entende, mostra horários livres e confirma. Funciona 24/7, responde em segundos. Você dorme, a barbearia continua agendando.",
    metric: "3h economizadas/dia",
  },
  {
    icon: CreditCard,
    title: "Pagamento Antecipado via PIX (Opcional)",
    description:
      "Ative pagamento antecipado para reduzir faltas drasticamente. Cliente paga antes, você garante presença. Funciona com PIX instantâneo.",
    metric: "Menos faltas",
  },
  {
    icon: Calendar,
    title: "Sincroniza com Seus Calendários",
    description:
      "Conecta com Google Calendar, Apple Calendar e Microsoft Outlook. Agendamento aparece automaticamente no seu celular. Conflitos de horário? Nunca mais.",
    metric: "Sync em tempo real",
  },
  {
    icon: Clock,
    title: "Lembretes Automáticos Inteligentes",
    description:
      "Lembrete 24h e 2h antes por WhatsApp e e-mail. Cliente confirma ou remarca pelo WhatsApp. Se não responder, libera o horário automaticamente.",
    metric: "Menos faltas",
  },
  {
    icon: Users,
    title: "Gestão de Equipe Completa",
    description:
      "2, 5 ou 10 barbeiros? Cada um com sua agenda e especialidades. Preços padronizados por serviço. Sistema mostra quem está livre e o cliente escolhe.",
    metric: "4.8★ avaliação",
  },
  {
    icon: TrendingUp,
    title: "Histórico e Preferências do Cliente",
    description:
      "Sistema guarda tudo: último corte, preferências, se gosta de barba. Na próxima vez, IA sugere combo automaticamente. Seu ticket médio sobe natural.",
    metric: "+35% ticket médio",
  },
  {
    icon: RefreshCw,
    title: "Remarcação e Cancelamento Fácil",
    description:
      "Cliente remarca ou cancela direto pelo WhatsApp. Se não confirmar o lembrete, sistema libera o horário automaticamente. Sua agenda sempre otimizada.",
    metric: "Zero horário vago",
  },
  {
    icon: Webhook,
    title: "Integrações e Automações",
    description:
      "Conecta com Zapier, CRMs e seus sistemas via webhooks e API. Integre com HubSpot, Pipedrive, RD Station e milhares de apps. Automatize do seu jeito.",
    metric: "+1000 apps",
  },
];

export default function Features() {
  return (
    <Section background="white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tudo que Sua Barbearia Precisa
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Agendamento inteligente, pagamento garantido e gestão completa em uma única plataforma
        </p>

        {/* 8 cards in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="pt-3 border-t border-gray-200">
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
