import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Section } from '@/components/section'
import { GuideContent } from '@/components/resources/guide-content'
import { NewsletterSignup } from '@/components/resources/newsletter-signup'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guia Definitivo de Agendamento - Flowo',
  description: 'Aprenda as melhores práticas para otimizar sua agenda e aumentar a produtividade com o Flowo.',
}

const guideContent = {
  title: 'Guia Definitivo de Agendamento',
  author: 'Equipe Flowo',
  publishDate: '15 de Junho, 2023',
  readTime: '10 min',
  sections: [
    {
      title: 'Introdução',
      content: 'O agendamento eficiente é a base de qualquer negócio bem-sucedido. Neste guia, vamos explorar as melhores práticas para otimizar sua agenda e aumentar significativamente sua produtividade usando o Flowo.'
    },
    {
      title: '1. Configurando seu Calendário',
      content: 'Comece configurando seu calendário no Flowo para refletir seus horários de trabalho e preferências. Defina blocos de tempo para diferentes tipos de compromissos e reserve tempo para tarefas administrativas.'
    },
    {
      title: '2. Automatizando Lembretes',
      content: 'Utilize a função de lembretes automáticos do Flowo para reduzir faltas. Configure mensagens personalizadas via WhatsApp ou e-mail para serem enviadas em intervalos estratégicos antes do compromisso.'
    },
    {
      title: '3. Otimizando Intervalos entre Compromissos',
      content: 'Use a IA do Flowo para otimizar os intervalos entre compromissos. Isso ajuda a evitar atrasos em cascata e proporciona um buffer para imprevistos.'
    },
    {
      title: '4. Analisando Dados de Agendamento',
      content: 'Aproveite os relatórios e análises do Flowo para identificar padrões em sua agenda. Use essas informações para tomar decisões informadas sobre seus horários mais produtivos e ajustar sua disponibilidade.'
    },
    {
      title: 'Conclusão',
      content: 'Implementando essas estratégias com o Flowo, você estará no caminho certo para um agendamento mais eficiente e uma maior produtividade. Lembre-se de que a otimização é um processo contínuo - continue ajustando conforme sua empresa cresce e evolui.'
    }
  ]
}

export default function SchedulingGuidePage() {
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
                { label: 'Guia Definitivo de Agendamento', href: '/recursos/guias/guia-definitivo-agendamento' },
              ]}
            />
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {guideContent.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Aprenda a maximizar sua produtividade com as melhores práticas de agendamento usando o Flowo.
              </p>
            </div>
          </div>
        </Section>
        <Section background="white">
          <GuideContent content={guideContent} />
        </Section>
        <Section background="light">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href="/recursos/guias">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Guias
                </Link>
              </Button>
              <Button asChild>
                <Link href="/recursos/guias/integracao-whatsapp">
                  Próximo Guia: Integração com WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
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

