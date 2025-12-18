"use client";

import { motion } from "framer-motion";
import { Calendar, Zap, MessageCircle } from "lucide-react";
import { GuideCard } from "./guide-card";

const featuredResources = [
  {
    title: "Guia Definitivo de Agendamento",
    description:
      "Aprenda as melhores práticas para otimizar sua agenda e aumentar a produtividade.",
    href: "/recursos/guias/guia-definitivo-agendamento",
    readTime: "10 min",
    tags: ["Agendamento", "Produtividade"],
    icon: Calendar,
    sellHook: "Reduza faltas significativamente com agendamento inteligente!",
  },
  {
    title: "Integração com WhatsApp",
    description:
      "Tutorial passo a passo para configurar a integração do Flowo com o WhatsApp Business.",
    href: "/recursos/guias/integracao-whatsapp",
    readTime: "8 min",
    tags: ["Integração", "WhatsApp"],
    icon: MessageCircle,
    sellHook:
      "Aumente o engajamento dos clientes com lembretes automáticos via WhatsApp!",
  },
  {
    title: "Maximizando a Produtividade com o Flowo",
    description:
      "Descubra recursos avançados do Flowo para impulsionar sua eficiência.",
    href: "/recursos/guias/maximizando-produtividade",
    readTime: "12 min",
    tags: ["Produtividade", "Recursos Avançados"],
    icon: Zap,
    sellHook: "Economize horas toda semana com automação inteligente!",
  },
];

export function ResourceGrid() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recursos em Destaque
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GuideCard {...resource} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
