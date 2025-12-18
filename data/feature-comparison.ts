export interface FeatureComparisonItem {
  name: string;
  solo: string | boolean;
  equipe: string | boolean;
  empresarial: string | boolean;
  tooltip?: string;
}

export const featureComparison: Record<string, FeatureComparisonItem[]> = {
  Agendamento: [
    {
      name: "Agendamentos mensais",
      solo: "200",
      equipe: "Ilimitado",
      empresarial: "Ilimitado",
      tooltip: "Número máximo de agendamentos por mês",
    },
    {
      name: "Número de profissionais",
      solo: "1",
      equipe: "Até 5",
      empresarial: "Ilimitado",
      tooltip: "Quantidade de profissionais que podem usar o sistema",
    },
    {
      name: "Unidades/filiais",
      solo: "1",
      equipe: "1",
      empresarial: "Ilimitado",
      tooltip: "Quantidade de locais físicos",
    },
    {
      name: "Histórico de clientes",
      solo: true,
      equipe: true,
      empresarial: true,
      tooltip: "Registro completo de agendamentos, preferências e serviços anteriores",
    },
    {
      name: "Remarcação pelo WhatsApp",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Cliente remarca ou cancela direto pelo WhatsApp",
    },
  ],
  "Pagamentos (PIX)": [
    {
      name: "Pagamento antecipado via PIX (opcional)",
      solo: true,
      equipe: true,
      empresarial: true,
      tooltip: "Ative cobrança antecipada para reduzir faltas",
    },
    {
      name: "Taxa total por transação PIX",
      solo: "3,5%",
      equipe: "3%",
      empresarial: "Negociável",
      tooltip: "Taxa total por pagamento PIX recebido. Plano Business tem condições especiais para alto volume.",
    },
    {
      name: "Relatórios financeiros",
      solo: "Básico",
      equipe: "Completo",
      empresarial: "Customizado",
      tooltip: "Nível de detalhamento dos relatórios de faturamento e pagamentos",
    },
  ],
  "Calendários e Integrações": [
    {
      name: "WhatsApp com IA",
      solo: "Básico",
      equipe: "Avançado",
      empresarial: "Premium",
      tooltip: "Nível de inteligência artificial no atendimento",
    },
    {
      name: "Google Calendar",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Sincronização em tempo real",
    },
    {
      name: "Apple Calendar (iCloud)",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Sincronização em tempo real",
    },
    {
      name: "Microsoft Outlook",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Sincronização em tempo real",
    },
    {
      name: "Zapier e automações",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Conecte com milhares de apps via Zapier",
    },
    {
      name: "Integração com CRMs",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Conecte com HubSpot, Pipedrive, RD Station e outros CRMs",
    },
    {
      name: "Webhooks para integrações",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Receba eventos em tempo real no seu sistema",
    },
    {
      name: "API completa",
      solo: false,
      equipe: false,
      empresarial: true,
      tooltip: "Acesso total à API para integrações customizadas",
    },
  ],
  "Lembretes e Automação": [
    {
      name: "Lembretes automáticos",
      solo: "24h + 2h antes",
      equipe: "Personalizável",
      empresarial: "Totalmente customizado",
      tooltip: "Quando os lembretes são enviados",
    },
    {
      name: "Notificações por WhatsApp",
      solo: true,
      equipe: true,
      empresarial: true,
      tooltip: "Lembretes e confirmações enviados automaticamente via WhatsApp",
    },
    {
      name: "Notificações por e-mail",
      solo: true,
      equipe: true,
      empresarial: true,
      tooltip: "Confirmações e lembretes também enviados por e-mail",
    },
    {
      name: "Confirmação pelo WhatsApp",
      solo: true,
      equipe: true,
      empresarial: true,
      tooltip: "Cliente confirma presença respondendo ao lembrete automático",
    },
    {
      name: "Remarcação automática",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Cliente remarca direto pelo WhatsApp",
    },
    {
      name: "Liberação de horário por não resposta",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Libera horário se cliente não confirmar",
    },
  ],
  "Análises e Relatórios": [
    {
      name: "Dashboard básico",
      solo: true,
      equipe: true,
      empresarial: true,
      tooltip: "Visão geral de agendamentos, clientes e faturamento",
    },
    {
      name: "Relatórios de faturamento",
      solo: "Básico",
      equipe: "Completo",
      empresarial: "Por unidade",
      tooltip: "Relatórios de receita, serviços mais vendidos e desempenho",
    },
    {
      name: "Análise de faltas",
      solo: false,
      equipe: true,
      empresarial: true,
      tooltip: "Métricas de no-show, cancelamentos e taxa de confirmação",
    },
    {
      name: "Dashboard executivo",
      solo: false,
      equipe: false,
      empresarial: true,
      tooltip: "Visão consolidada de todas as unidades",
    },
  ],
  Suporte: [
    {
      name: "Tempo de resposta",
      solo: "24h",
      equipe: "4h",
      empresarial: "1h",
      tooltip: "Tempo máximo para primeira resposta em dias úteis",
    },
    {
      name: "Canais de suporte",
      solo: "Email",
      equipe: "Email + WhatsApp",
      empresarial: "Email + WhatsApp + Telefone",
      tooltip: "Canais disponíveis para contato com nossa equipe",
    },
    {
      name: "Treinamento",
      solo: "Vídeos",
      equipe: "Vídeos + Onboarding",
      empresarial: "Presencial + Equipe",
      tooltip: "Tipo de treinamento disponível para usar o sistema",
    },
    {
      name: "Gerente de conta dedicado",
      solo: false,
      equipe: false,
      empresarial: true,
      tooltip: "Ponto de contato exclusivo para sua empresa",
    },
  ],
};
