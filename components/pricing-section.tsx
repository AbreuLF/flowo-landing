"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./section";
import { PricingCard } from "./pricing/pricing-card";
import { TrustSignal } from "./pricing/trust-signal";
import { pricingPlans, trustSignals } from "@/data/pricing-data";
import { PricingHeader } from "./pricing/pricing-header";
import { PricingCTA } from "./pricing/pricing-cta";

export default function PricingSection() {
  const [isYearly] = useState(false);

  return (
    <Section>
      <div className="container px-4 mx-auto">
        <PricingHeader />

        {/* Pricing Cards */}
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

        {/* Trust Signals */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {trustSignals.map((signal, index) => (
              <TrustSignal key={index} {...signal} />
            ))}
          </div>
        </div>

        <PricingCTA />
      </div>
    </Section>
  );
}
