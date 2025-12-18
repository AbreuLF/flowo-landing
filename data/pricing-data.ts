import { Shield, Zap, Users, Star, MessageCircle, CreditCard, Calendar } from 'lucide-react'

export const pricingPlans = [
  {
    name: "Solo",
    description: "Para profissionais autônomos que querem automatizar o agendamento.",
    monthlyPrice: 97,
    yearlyPrice: 85, // 12% off
    features: [
      "1 profissional",
      "200 agendamentos/mês",
      "WhatsApp com IA básica 24/7",
      "Lembretes 24h e 2h antes",
      "PIX antecipado (opcional)",
      "Histórico de clientes",
      "Confirmação automática",
      "Suporte por e-mail (24h)"
    ]
  },
  {
    name: "Equipe",
    description: "Para negócios com equipe de até 5 profissionais.",
    monthlyPrice: 197,
    yearlyPrice: 173, // 12% off
    isPopular: true,
    features: [
      "Até 5 profissionais",
      "Agendamentos ilimitados",
      "WhatsApp com IA avançada",
      "Lembretes personalizáveis",
      "Sync Google, Apple e Outlook",
      "Remarcação pelo WhatsApp",
      "Relatórios completos",
      "Suporte WhatsApp (4h)"
    ]
  },
  {
    name: "Empresarial",
    description: "Para empresas maiores e redes com múltiplas unidades.",
    isCustomPricing: true,
    customPriceLabel: "Sob Consulta",
    features: [
      "Profissionais ilimitados",
      "Múltiplas unidades/filiais",
      "WhatsApp com IA premium",
      "API completa + Webhooks",
      "Dashboard executivo",
      "Taxa PIX negociável",
      "Gerente de conta dedicado",
      "Suporte prioritário (1h)"
    ]
  }
]

export const featuredResources = [
  {
    icon: Star,
    title: "IA Avançada",
    description: "Atendimento inteligente 24/7 que entende linguagem natural e agenda automaticamente",
    benefits: [
      "Redução significativa nas faltas",
      "Resposta em segundos, não minutos"
    ]
  },
  {
    icon: CreditCard,
    title: "PIX Antecipado (Opcional)",
    description: "Ative cobrança antecipada via PIX para reduzir faltas drasticamente",
    benefits: [
      "Reduza faltas significativamente",
      "Configure por serviço ou para todos"
    ]
  },
  {
    icon: Calendar,
    title: "Sync de Calendários",
    description: "Integração automática com Google Calendar, Apple Calendar e Microsoft Outlook",
    benefits: [
      "Agendamentos no seu celular",
      "Evita conflitos de horário"
    ]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Nativo",
    description: "Usa seu próprio número de WhatsApp, sem mudar nada para seus clientes",
    benefits: [
      "Lembretes automáticos personalizados",
      "Confirmação e remarcação pelo chat"
    ]
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção completa dos seus dados e dos seus clientes com criptografia",
    benefits: [
      "Conformidade com LGPD",
      "Backup automático em nuvem"
    ]
  },
  {
    icon: Users,
    title: "Suporte Humanizado",
    description: "Equipe brasileira disponível para garantir seu sucesso com o Flowo",
    benefits: [
      "Atendimento em português",
      "Treinamento completo incluso"
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
    title: "Garantia de 14 dias",
    description: "Teste grátis sem cartão de crédito"
  },
  {
    icon: "CreditCard",
    title: "Pagamento Seguro",
    description: "PIX e cartão com proteção total"
  }
]
