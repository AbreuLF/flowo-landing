export interface FeatureComparisonItem {
  name: string;
  empreendedor: string | boolean;
  profissional: string | boolean;
  empresarial: string | boolean;
  tooltip?: string;
}

export const featureComparison: Record<string, FeatureComparisonItem[]> = {
  Agendamento: [
    {
      name: "Agendamentos mensais",
      empreendedor: "100",
      profissional: "Ilimitado",
      empresarial: "Ilimitado",
      tooltip: "Número máximo de agendamentos por mês",
    },
    {
      name: "Número de profissionais",
      empreendedor: "1",
      profissional: "Até 5",
      empresarial: "Ilimitado",
      tooltip: "Quantidade de profissionais que podem usar o sistema",
    },
    {
      name: "Página de agendamento personalizada",
      empreendedor: true,
      profissional: true,
      empresarial: true,
    },
  ],
  Integrações: [
    {
      name: "WhatsApp Business",
      empreendedor: "Básico",
      profissional: "Avançado",
      empresarial: "Premium",
      tooltip: "Nível de integração com WhatsApp Business API",
    },
    {
      name: "Google Calendar",
      empreendedor: true,
      profissional: true,
      empresarial: true,
      tooltip: "Sincronize sua agenda com o Google Calendar",
    },
    {
      name: "Microsoft Outlook",
      empreendedor: false,
      profissional: true,
      empresarial: true,
      tooltip: "Sincronize sua agenda com o Microsoft Outlook",
    },
  ],
  Automação: [
    {
      name: "Lembretes automáticos",
      empreendedor: "Básico",
      profissional: "Avançado",
      empresarial: "Premium",
      tooltip: "Personalize lembretes e notificações para clientes",
    },
    {
      name: "Confirmações automáticas",
      empreendedor: true,
      profissional: true,
      empresarial: true,
    },
    {
      name: "Reagendamento automático",
      empreendedor: false,
      profissional: true,
      empresarial: true,
    },
  ],
  "Análises e Relatórios": [
    {
      name: "Dashboard básico",
      empreendedor: true,
      profissional: true,
      empresarial: true,
    },
    {
      name: "Relatórios avançados",
      empreendedor: false,
      profissional: true,
      empresarial: true,
    },
    {
      name: "Análise preditiva com IA",
      empreendedor: false,
      profissional: "Básico",
      empresarial: "Avançado",
    },
  ],
  Suporte: [
    {
      name: "Tempo de resposta",
      empreendedor: "24h",
      profissional: "4h",
      empresarial: "1h",
    },
    {
      name: "Canais de suporte",
      empreendedor: "Email",
      profissional: "Email + Chat",
      empresarial: "Email + Chat + WhatsApp",
    },
    {
      name: "Gerente de conta dedicado",
      empreendedor: false,
      profissional: false,
      empresarial: true,
    },
  ],
};
