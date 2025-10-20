import { Button } from "@/components/ui/button"
import { LeadCaptureModal } from './lead-capture-modal'

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Chega de Perder Dinheiro com Clientes que Não Aparecem</h2>
        <p className="text-xl mb-8">Junte-se a 570+ barbearias que reduziram faltas em 60% com o Flowo.</p>
        <LeadCaptureModal>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg">
            Teste Grátis - Sem Cartão
          </Button>
        </LeadCaptureModal>
        <p className="mt-4 text-primary-foreground/80 text-sm">
          14 dias grátis • Sem compromisso • Cancele quando quiser
        </p>
      </div>
    </section>
  )
}

