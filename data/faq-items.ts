import { FAQItem } from "@/types/faq"

export const faqItems: FAQItem[] = [
  {
    question: "Como funciona o agendamento pelo WhatsApp?",
    answer: "Seu cliente manda uma mensagem no WhatsApp da barbearia pedindo pra marcar horário. A IA do Flowo responde automaticamente mostrando os horários disponíveis dos seus barbeiros, serviços e preços. Cliente escolhe e pronto - está agendado. Funciona 24/7, mesmo você dormindo.",
    category: "WhatsApp"
  },
  {
    question: "Como funciona o pagamento via PIX?",
    answer: "O Flowo permite configurar pagamento antecipado via PIX. O cliente recebe o link de pagamento e o horário só é confirmado após o pagamento. Isso reduz drasticamente as faltas, já que o cliente tem compromisso financeiro.",
    category: "Pagamento"
  },
  {
    question: "O Flowo sincroniza com meu Google Calendar?",
    answer: "Sim! Sincroniza com Google Calendar, Apple Calendar e Microsoft Outlook. Quando um cliente agenda, o horário aparece automaticamente no seu calendário pessoal em segundos. Se você criar um compromisso no seu calendário, o Flowo também bloqueia o horário. Tudo em tempo real, sem conflitos.",
    category: "Calendário"
  },
  {
    question: "Quanto tempo leva para configurar o Flowo na minha barbearia?",
    answer: "Em média 30 minutos. Você cadastra seus barbeiros, serviços (corte, barba, degradê, etc) e horários de funcionamento. Conecta o WhatsApp e pronto. Nossa equipe te ajuda no onboarding para garantir que tudo funcione perfeitamente.",
    category: "Configuração"
  },
  {
    question: "Serve para barbeiro solo ou só para barbearias grandes?",
    answer: "Serve para os dois! Temos barbeiros autônomos usando o Flowo, assim como redes com 10+ unidades. O sistema se adapta: se você trabalha sozinho, a agenda é simples. Se tem vários barbeiros, o sistema distribui os clientes automaticamente entre eles.",
    category: "Planos"
  },
  {
    question: "Como os lembretes reduzem as faltas?",
    answer: "O sistema manda lembrete automático 24h antes e 2h antes do horário marcado, direto no WhatsApp do cliente. O cliente pode confirmar, remarcar ou cancelar respondendo a mensagem. Se não responder, o sistema pode liberar o horário automaticamente.",
    category: "Lembretes"
  },
  {
    question: "Preciso trocar meu número de WhatsApp?",
    answer: "Não! O Flowo funciona com o número de WhatsApp que você já usa na barbearia. Seus clientes continuam mandando mensagem no mesmo número de sempre. A diferença é que agora a IA responde automaticamente.",
    category: "WhatsApp"
  },
  {
    question: "Consigo gerenciar vários barbeiros na mesma agenda?",
    answer: "Sim! Você cadastra cada barbeiro com seus horários, serviços e especialidades. Quando o cliente agenda, o sistema mostra os horários de quem está disponível. Cada profissional pode ter preços diferentes e a agenda individual sincroniza com o calendário pessoal dele.",
    category: "Equipe"
  },
  {
    question: "Posso integrar o Flowo com outros sistemas?",
    answer: "Sim! Oferecemos webhooks para você receber notificações em tempo real de agendamentos, cancelamentos, pagamentos e mais. Você pode conectar com seu sistema de gestão, CRM ou qualquer ferramenta que aceite webhooks. No plano Empresarial, também temos API completa.",
    category: "Integrações"
  },
  {
    question: "O sistema guarda histórico dos clientes?",
    answer: "Sim. Cada vez que um cliente vem, o sistema registra: que serviço fez, quanto tempo levou, preferências, se chegou no horário, etc. Na próxima vez que ele agendar, a IA já sabe do histórico dele e pode sugerir combos ou serviços complementares automaticamente.",
    category: "Clientes"
  },
  {
    question: "Tem período de teste?",
    answer: "Sim! 14 dias grátis, sem precisar cadastrar cartão. Durante o teste você tem acesso completo ao sistema: agendamento pelo WhatsApp com IA, pagamento via PIX, sync de calendários, lembretes automáticos, gestão de equipe, tudo. Se não gostar, é só não contratar.",
    category: "Teste"
  },
  {
    question: "E se eu precisar de ajuda? Tem suporte?",
    answer: "Tem! Suporte via WhatsApp e email com resposta rápida. Além disso, você tem acesso a uma base de conhecimento com vídeos e guias passo a passo. No plano Profissional, você tem suporte prioritário. No Empresarial, um gerente de conta dedicado.",
    category: "Suporte"
  }
]
