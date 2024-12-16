"use client";

import { useState } from "react";
import { PricingHeader } from "./pricing-header";
import { PricingToggle } from "./pricing-toggle";
import { PricingCard } from "./pricing-card";
import { Section } from "../section";
import { LeadCaptureModal } from "../lead-capture-modal";
import { pricingPlans } from "@/data/pricing-data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrustSignals } from "./trust-signals";

interface PricingSectionProps {
  showHeader?: boolean;
  showTrustSignals?: boolean;
  showCTA?: boolean;
  background?: "white" | "gradient";
}

export function PricingSection({
  showHeader = false,
  showTrustSignals = false,
  showCTA = false,
  background = "gradient",
}: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section id="precos" background={background} className="px-0 pb-6">
      <div className="container px-4 mx-auto pt-16">
        {showHeader && <PricingHeader />}

        <div className="mb-16">
          <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <PricingCard {...plan} isYearly={isYearly} />
            </motion.div>
          ))}
        </div>

        {showTrustSignals && <TrustSignals />}

        {showCTA && (
          <div className="text-center bg-white/80 backdrop-blur-sm max-w-2xl mx-auto p-8 rounded-2xl shadow-sm border">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de empresas que já otimizaram seu agendamento
              com o Flowo
            </p>
            <LeadCaptureModal>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Comece seu teste gratuito agora
              </Button>
            </LeadCaptureModal>
            <p className="mt-4 text-sm text-gray-500">
              Não é necessário cartão de crédito • Cancele a qualquer momento
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
