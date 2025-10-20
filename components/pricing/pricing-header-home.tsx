import { Badge } from "@/components/ui/badge";

export function PricingHeaderHome() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <Badge variant="outline" className="mb-4">
        Planos para Todos os Tamanhos
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Escolha o Plano Ideal para Seu Negócio
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Comece gratuitamente e evolua conforme seu crescimento. Teste por 14
        dias sem compromisso!
      </p>
      {/*
      <LeadCaptureModal>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Comece seu teste gratuito
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </LeadCaptureModal>
      */}
    </div>
  );
}
