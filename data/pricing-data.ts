import { Shield, Zap, Users, Star, MessageCircle } from 'lucide-react'

export const pricingPlans = [
  {
    name: "Solo",
    description: "Ideal para barbeiro autônomo ou pequena barbearia.",
    monthlyPrice: 97,
    yearlyPrice: 77,
    features: [
      "Até 150 cortes/mês",
      "Agendamento pelo WhatsApp",
      "Lembretes automáticos",
      "Cadastro de serviços (corte, barba, etc)",
      "Histórico de clientes",
      "Suporte por email"
    ]
  },
  {
    name: "Barbearia",
    description: "Perfeito para barbearias com 2-5 barbeiros.",
    monthlyPrice: 197,
    yearlyPrice: 157,
    isPopular: true,
    features: [
      "Cortes ilimitados",
      "WhatsApp com IA avançada",
      "Agenda para até 5 barbeiros",
      "Gestão de fila em tempo real",
      "Relatórios de faturamento",
      "Cadastro de produtos e combos",
      "Integração com Google Calendar",
      "Suporte prioritário"
    ]
  },
  {
    name: "Franquia",
    description: "Para redes e franquias com múltiplas unidades.",
    price: "Personalizado",
    features: [
      "Tudo do plano Barbearia",
      "Barbeiros ilimitados",
      "Múltiplas unidades/filiais",
      "Dashboard executivo",
      "Relatórios customizados",
      "Treinamento da equipe",
      "Gerente de conta dedicado",
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
  // {
  //   icon: "Award",
  //   title: "Premiado",
  //   description: "Melhor software de agendamento 2024"
  // }
]

