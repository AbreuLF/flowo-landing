import { Calendar, Users, Zap, BarChart, MessageCircle, Shield } from 'lucide-react'
import { GuideCard } from './guide-card'

const guides = [
  {
    title: 'Guia Definitivo de Agendamento',
    description: 'Aprenda as melhores práticas para otimizar sua agenda e aumentar a produtividade.',
    href: '/recursos/guias/guia-definitivo-agendamento',
    readTime: '10 min',
    tags: ['Agendamento', 'Produtividade'],
    icon: Calendar,
    sellHook: 'Reduza faltas em até 60% com agendamento inteligente!'
  },
  {
    title: 'Integração com WhatsApp',
    description: 'Tutorial passo a passo para configurar a integração do Flowo com o WhatsApp Business.',
    href: '/recursos/guias/integracao-whatsapp',
    readTime: '8 min',
    tags: ['Integração', 'WhatsApp'],
    icon: MessageCircle,
    sellHook: 'Aumente o engajamento dos clientes em 40% com lembretes via WhatsApp!'
  },
  {
    title: 'Maximizando a Produtividade com o Flowo',
    description: 'Descubra recursos avançados do Flowo para impulsionar sua eficiência.',
    href: '/recursos/guias/maximizando-produtividade',
    readTime: '12 min',
    tags: ['Produtividade', 'Recursos Avançados'],
    icon: Zap,
    sellHook: 'Economize até 15 horas por semana com automação inteligente!'
  },
  {
    title: 'Gerenciamento de Equipe Eficiente',
    description: 'Aprenda a coordenar sua equipe e otimizar a distribuição de tarefas com o Flowo.',
    href: '/recursos/guias/gerenciamento-equipe',
    readTime: '15 min',
    tags: ['Gestão de Equipe', 'Colaboração'],
    icon: Users,
    sellHook: 'Aumente a eficiência da sua equipe em até 30% com gestão centralizada!'
  },
  {
    title: 'Análise de Dados e Relatórios',
    description: 'Utilize os dados do Flowo para tomar decisões estratégicas e melhorar seu negócio.',
    href: '/recursos/guias/analise-dados-relatorios',
    readTime: '10 min',
    tags: ['Análise de Dados', 'Relatórios'],
    icon: BarChart,
    sellHook: 'Tome decisões baseadas em dados e aumente seu faturamento em até 25%!'
  },
  {
    title: 'Segurança e Conformidade no Flowo',
    description: 'Entenda como o Flowo protege seus dados e ajuda na conformidade com regulamentações.',
    href: '/recursos/guias/seguranca-conformidade',
    readTime: '8 min',
    tags: ['Segurança', 'Conformidade'],
    icon: Shield,
    sellHook: 'Garanta a proteção dos dados dos seus clientes e evite multas pesadas!'
  },
]

export function GuidesList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <GuideCard key={index} {...guide} />
        ))}
      </div>
    </div>
  )
}

