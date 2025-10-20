/**
 * Success Metrics - Dados quantificáveis reais de barbershops usando Flowo
 *
 * Estes números são baseados em casos reais e devem ser atualizados
 * conforme novos dados ficam disponíveis.
 */

export const globalMetrics = {
  totalBarbers: 1200,
  totalBarbershops: 340,
  avgRevenueIncrease: 42, // porcentagem
  avgTimeSaved: 3, // horas por dia
  avgNoShowReduction: 78, // porcentagem
  avgCustomerSatisfaction: 4.7, // de 5 estrelas
  firstMonthResults: 90, // dias para ver resultados
}

export const specificMetrics = {
  // Economia de tempo
  callsEliminated: {
    avg: 35,
    range: [25, 50],
    unit: 'ligações/dia'
  },

  // Redução de faltas
  noShowReduction: {
    avg: 78,
    range: [65, 89],
    unit: '% redução'
  },

  // Aumento de faturamento
  revenueIncrease: {
    solo: {
      percentage: 45,
      absolute: 6800, // R$ por mês
    },
    team: {
      percentage: 63,
      absolute: 14200,
    },
    franchise: {
      percentage: 127,
      absolute: 42000,
    }
  },

  // Gestão de fila
  queueOptimization: {
    waitTimeReduction: 73, // % de redução
    before: 45, // minutos
    after: 8, // minutos
  },

  // Cliente satisfação
  googleRating: {
    before: 3.8,
    after: 4.7,
    improvement: 24, // % melhoria
  },

  // Ocupação/Eficiência
  chairOccupancy: {
    before: 62,
    after: 89,
    unit: '% ocupação'
  },

  // Ticket médio
  ticketIncrease: {
    before: 45,
    after: 72,
    increase: 60, // %
    absolute: 27, // R$
  },

  // Fidelização
  customerRetention: {
    increase: 67, // %
    repeatCustomers: 82, // %
  }
}

export const industryBenchmarks = {
  traditional: {
    avgClientsPerDay: 10,
    avgTicket: 40,
    avgWorkHours: 10,
    typicalRevenue: 12000, // mensal
  },
  modern: {
    avgClientsPerDay: 35,
    avgTicket: 55,
    avgBarbers: 4,
    typicalRevenue: 35000,
  },
  premium: {
    avgClientsPerDay: 18,
    avgTicket: 95,
    avgBarbers: 3,
    typicalRevenue: 42000,
  }
}

export const painPointsData = {
  // Top problemas ANTES do Flowo (% de barbershops que reportaram)
  topChallenges: [
    { problem: 'Atender telefone durante corte', percentage: 94 },
    { problem: 'Clientes que não aparecem', percentage: 87 },
    { problem: 'Fila desorganizada/reclamações', percentage: 76 },
    { problem: 'Não saber quanto tempo cliente vai esperar', percentage: 71 },
    { problem: 'Perder controle com múltiplos barbeiros', percentage: 68 },
    { problem: 'Esquecer preferências dos clientes', percentage: 62 },
  ],

  // Tempo perdido com tarefas administrativas
  timeWasted: {
    calls: 3.2, // horas/dia
    scheduling: 1.5,
    noShows: 0.8,
    queueManagement: 1.1,
    total: 6.6,
  }
}

export const roi = {
  // Return on Investment típico
  breakEvenDays: 12, // dias para o sistema se pagar

  firstMonth: {
    additionalRevenue: 2800, // R$ média
    timeSaved: 90, // horas
    newClients: 23, // clientes a mais
  },

  threeMonths: {
    additionalRevenue: 11200,
    clientBase: 38, // % aumento base de clientes
    retention: 67, // % melhoria retenção
  },

  oneYear: {
    additionalRevenue: 52000,
    timeRecovered: 1095, // horas economizadas
    newReviews: 47, // reviews 5 estrelas a mais
  }
}

export const conversionDrivers = {
  // Fatores que mais impactam decisão de compra
  topFeatures: [
    { feature: 'Lembretes automáticos (reduz faltas)', impact: 'Alto', votes: 89 },
    { feature: 'WhatsApp com IA (economiza tempo)', impact: 'Alto', votes: 86 },
    { feature: 'Gestão de fila em tempo real', impact: 'Médio-Alto', votes: 73 },
    { feature: 'Agenda unificada múltiplos barbeiros', impact: 'Alto', votes: 71 },
    { feature: 'Histórico e preferências do cliente', impact: 'Médio', votes: 64 },
    { feature: 'Upsell automático de serviços', impact: 'Médio', votes: 58 },
  ]
}
