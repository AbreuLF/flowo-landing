import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

interface CTAContextualProps {
  title: string;
  description: string;
  ctaLabel?: string;
}

export function CTAContextual({
  title,
  description,
  ctaLabel = "Começar teste grátis",
}: CTAContextualProps) {
  return (
    <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight">{title}</h2>
          <p className="mt-3 text-primary-foreground/85">{description}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">
            14 dias grátis, sem cartão de crédito.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <LeadCaptureModal>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              {ctaLabel}
            </Button>
          </LeadCaptureModal>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/precos">
              Ver planos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
