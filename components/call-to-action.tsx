import { Button } from "@/components/ui/button"
import { LeadCaptureModal } from './lead-capture-modal'

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para Revolucionar seu Agendamento?</h2>
        <p className="text-xl mb-8">Junte-se a milhares de usuários satisfeitos e comece a otimizar seu tempo hoje.</p>
        <LeadCaptureModal>
          <Button size="lg" variant="secondary" className="text-lg">
            Comece Gratuitamente
          </Button>
        </LeadCaptureModal>
      </div>
    </section>
  )
}

