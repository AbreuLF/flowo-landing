"use client";

import { PricingHeaderHome } from "./pricing/pricing-header-home";
import { PricingSection } from "./pricing/pricing-section";

export default function HomePricingSection() {
  return (
    <>
      <PricingHeaderHome />
      <PricingSection showTrustSignals />
    </>
  );
}
