import { FAQItem } from "@/types/faq"

export const faqItems: FAQItem[] = [
  {
    question: "Como funciona o agendamento pelo WhatsApp?",
    answer: "Seu cliente manda uma mensagem no WhatsApp da barbearia pedindo pra marcar horário. A IA do Flowo responde automaticamente mostrando os horários disponíveis dos seus barbeiros, serviços e preços. Cliente escolhe e pronto - está agendado. Funciona 24/7, mesmo você dormindo.",
    category: "WhatsApp"
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
    answer: "O sistema manda lembrete automático 1 dia antes e 1 hora antes do horário marcado, direto no WhatsApp do cliente. As mensagens são personalizadas com o nome do cliente, horário e serviço. Com isso, suas faltas caem de 40-50% para menos de 20%.",
    category: "Lembretes"
  },
  {
    question: "Preciso trocar meu número de WhatsApp?",
    answer: "Não! O Flowo funciona com o número de WhatsApp que você já usa na barbearia. Seus clientes continuam mandando mensagem no mesmo número de sempre. A diferença é que agora a IA responde automaticamente.",
    category: "WhatsApp"
  },
  {
    question: "Consigo gerenciar vários barbeiros na mesma agenda?",
    answer: "Sim! Você cadastra cada barbeiro com seus horários e especialidades. Quando o cliente agenda, o sistema mostra os horários de quem está disponível. Você também pode definir preferências - tipo o João só fazer barba, ou a Maria só atender das 14h em diante.",
    category: "Equipe"
  },
  {
    question: "O sistema guarda histórico dos clientes?",
    answer: "Sim. Cada vez que um cliente vem, o sistema registra: que serviço fez, quanto tempo levou, se chegou no horário, etc. Na próxima vez que ele agendar, você já sabe do histórico dele e pode sugerir combos ou serviços complementares.",
    category: "Clientes"
  },
  {
    question: "Tem período de teste?",
    answer: "Sim! 14 dias grátis, sem precisar cadastrar cartão. Durante o teste você tem acesso completo ao sistema: agendamento pelo WhatsApp, lembretes automáticos, gestão de equipe, tudo. Se não gostar, é só não contratar - simples assim.",
    category: "Teste"
  },
  // TODO: Descomentar quando funcionalidade de campanhas estiver pronta
  // {
  //   question: "Como funcionam as campanhas automáticas?",
  //   answer: "Você cria uma campanha uma única vez (tipo 'Promoção de verão: R$ 10 off no degradê') e o sistema manda automaticamente pra sua base de clientes via WhatsApp. Pode mandar pra todos, ou só pra quem não vem há 30 dias, ou só pra quem nunca fez barba. Você escolhe.",
  //   category: "Campanhas"
  // },
  {
    question: "E se eu precisar de ajuda? Tem suporte?",
    answer: "Tem suporte 24/7 via chat e email. Resposta em até 5 minutos. Além disso, você tem acesso a uma base de conhecimento com vídeos e guias passo a passo. No plano Barbearia e Franquia, você tem suporte prioritário e um gerente de conta dedicado.",
    category: "Suporte"
  }
]

