import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Section } from '@/components/section'
import { GuideContent } from '@/components/resources/guide-content'
import { NewsletterSignup } from '@/components/resources/newsletter-signup'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Users, Zap, BarChart, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gerenciamento de Equipe Eficiente - Flowo',
  description: 'Aprenda a coordenar sua equipe e otimizar a distribuição de tarefas com o Flowo para aumentar a produtividade.',
}

const guideContent = {
  title: 'Gerenciamento de Equipe Eficiente',
  author: 'Equipe Flowo',
  publishDate: '22 de Junho, 2023',
  readTime: '15 min',
  sections: [
    {
      title: 'Introdução',
      content: 'O gerenciamento eficiente de equipe é crucial para o sucesso de qualquer negócio. Neste guia, exploraremos como o Flowo pode ajudar você a coordenar sua equipe e otimizar a distribuição de tarefas, aumentando significativamente a produtividade.',
      icon: Users
    },
    {
      title: '1. Configurando Perfis de Equipe',
      content: 'Comece configurando perfis individuais para cada membro da sua equipe no Flowo. Defina suas especialidades, horários de trabalho e preferências para uma alocação de tarefas mais eficiente.',
      icon: Users
    },
    {
      title: '2. Distribuição Inteligente de Tarefas',
      content: 'Utilize a IA do Flowo para distribuir automaticamente as tarefas com base nas habilidades e disponibilidade de cada membro da equipe. Isso garante uma divisão equilibrada do trabalho e maximiza a eficiência.',
      icon: Zap
    },
    {
      title: '3. Monitoramento de Desempenho em Tempo Real',
      content: 'Acompanhe o desempenho da sua equipe em tempo real com os dashboards intuitivos do Flowo. Identifique gargalos, reconheça alto desempenho e faça ajustes rápidos quando necessário.',
      icon: BarChart
    },
    {
      title: '4. Comunicação Eficiente',
      content: 'Aproveite os recursos de comunicação integrados do Flowo para manter sua equipe alinhada. Envie atualizações, feedbacks e lembretes diretamente pela plataforma, garantindo que todos estejam na mesma página.',
      icon: MessageCircle
    },
    {
      title: 'Conclusão',
      content: 'Ao implementar essas estratégias de gerenciamento de equipe com o Flowo, você estará no caminho certo para aumentar a eficiência operacional, melhorar a satisfação dos funcionários e impulsionar os resultados do seu negócio.',
      icon: Users
    }
  ]
}

export default function TeamManagementGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="gradient" className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: 'Início', href: '/' },
                { label: 'Recursos', href: '/recursos' },
                { label: 'Guias', href: '/recursos/guias' },
                { label: 'Gerenciamento de Equipe Eficiente', href: '/recursos/guias/gerenciamento-equipe' },
              ]}
            />
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {guideContent.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Aprenda a coordenar sua equipe e otimizar a distribuição de tarefas com o Flowo para aumentar a produtividade.
              </p>
            </div>
          </div>
        </Section>
        <Section background="white">
          <GuideContent content={guideContent} />
        </Section>
        <Section background="light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para revolucionar o gerenciamento da sua equipe?</h2>
            <p className="text-xl mb-8">Experimente o Flowo gratuitamente por 14 dias e veja a diferença!</p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Comece seu teste gratuito agora
            </Button>
          </div>
        </Section>
        <Section background="white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href="/recursos/guias">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Guias
                </Link>
              </Button>
              <Button asChild>
                <Link href="/recursos/guias/analise-dados-relatorios">
                  Próximo Guia: Análise de Dados e Relatórios <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}

