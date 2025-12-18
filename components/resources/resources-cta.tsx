import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { LeadCaptureModal } from '../lead-capture-modal'
import { Section } from '../section'

export function ResourcesCTA() {
  return (
    <Section background="gradient-reverse" className="text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Otimizar sua Barbearia?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Junte-se às barbearias que já reduziram faltas e aumentaram o faturamento com o Flowo.
        </p>
        <LeadCaptureModal>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Comece seu teste gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </LeadCaptureModal>
        <p className="mt-4 text-sm text-gray-500">
          Não é necessário cartão de crédito • Cancele a qualquer momento
        </p>
      </div>
    </Section>
  )
}

