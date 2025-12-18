import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureModal } from "../lead-capture-modal";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  price?: string;
  isCustomPricing?: boolean;
  customPriceLabel?: string;
  features: string[];
  isPopular?: boolean;
  isYearly: boolean;
}

export function PricingCard({
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  price,
  isCustomPricing,
  customPriceLabel,
  features,
  isPopular,
  isYearly,
}: PricingCardProps) {
  const displayPrice = isCustomPricing ? customPriceLabel : (price || (isYearly ? yearlyPrice : monthlyPrice));

  return (
    <div
      className={`relative h-full flex flex-col rounded-2xl p-6 sm:p-8 bg-white transition-all duration-300 ${
        isPopular
          ? "border-2 border-primary shadow-lg"
          : "border border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs rounded-full">
            Mais popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        {typeof displayPrice === "number" ? (
          <div>
            <p className="flex items-baseline">
              <span className="text-lg font-semibold text-gray-900">R$</span>
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mx-1">
                {displayPrice}
              </span>
              <span className="text-gray-500">/mês</span>
            </p>
            {isYearly && (
              <p className="text-sm text-gray-600 mt-1">
                Economize 12% com o plano anual
              </p>
            )}
          </div>
        ) : (
          <p className="text-2xl font-bold text-gray-900">{displayPrice}</p>
        )}
        {!isCustomPricing && (
          <p className="text-xs text-gray-500 mt-2">
            {isYearly ? "Faturado anualmente" : "Faturado mensalmente"}
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="mb-8 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        <LeadCaptureModal>
          <Button
            size="lg"
            className={`w-full h-11 font-medium ${
              isPopular
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {isCustomPricing ? "Fale com Especialista" : "Começar Período de Teste"}
          </Button>
        </LeadCaptureModal>
        <p className="text-xs text-center text-gray-500 mt-3">
          {isCustomPricing
            ? "Soluções personalizadas para redes e franquias"
            : "Sem cartão de crédito • Cancele quando quiser"}
        </p>
      </div>
    </div>
  );
}
