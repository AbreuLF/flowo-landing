import { Shield, Zap, Users, Star, MessageCircle } from 'lucide-react'

export const pricingPlans = [
  {
    name: "Empreendedor",
    description: "Ideal para profissionais autônomos.",
    monthlyPrice: 97,
    yearlyPrice: 77,
    features: [
      "Até 100 agendamentos/mês",
      "Integração básica com WhatsApp",
      "Lembretes automáticos",
      "Página de agendamento personalizada",
      "Sincronização com Google Calendar",
      "Suporte por email"
    ]
  },
  {
    name: "Profissional",
    description: "Perfeito para negócios em crescimento.",
    monthlyPrice: 197,
    yearlyPrice: 157,
    isPopular: true,
    features: [
      "Agendamentos ilimitados",
      "Integração avançada com WhatsApp",
      "Lembretes e confirmações personalizadas",
      "Análise de produtividade",
      "Múltiplos profissionais (até 5)",
      "Personalização de marca avançada",
      "Integração com Google e Outlook",
      "Suporte prioritário por chat"
    ]
  },
  {
    name: "Empresarial",
    description: "Soluções personalizadas para grandes equipes.",
    price: "Personalizado",
    features: [
      "Tudo do plano Profissional",
      "Número ilimitado de profissionais",
      "Integrações personalizadas",
      "Relatórios avançados e dashboards",
      "Treinamento dedicado",
      "Gerente de conta exclusivo",
      "SLA garantido",
      "Suporte 24/7"
    ]
  }
]

export const featuredResources = [
  {
    icon: Star,
    title: "IA Avançada",
    description: "Otimização automática de agenda com machine learning para maximizar sua produtividade",
    benefits: [
      "Redução de 60% nas faltas",
      "Sugestões inteligentes de horários"
    ]
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção completa dos seus dados e dos seus clientes com criptografia avançada",
    benefits: [
      "Conformidade com LGPD",
      "Backup automático em nuvem"
    ]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integrado",
    description: "Comunicação automática e personalizada com seus clientes via WhatsApp",
    benefits: [
      "Lembretes automáticos",
      "Confirmações instantâneas"
    ]
  },
  {
    icon: Users,
    title: "Suporte Premium",
    description: "Equipe especializada disponível 24/7 para garantir seu sucesso",
    benefits: [
      "Atendimento prioritário",
      "Treinamento completo"
    ]
  }
]

export const trustSignals = [
  {
    icon: "Shield",
    title: "Segurança de Dados",
    description: "Criptografia de ponta a ponta"
  },
  {
    icon: "ThumbsUp",
    title: "Garantia de 30 dias",
    description: "Devolução total se não estiver satisfeito"
  },
  {
    icon: "Award",
    title: "Premiado",
    description: "Melhor software de agendamento 2023"
  }
]

