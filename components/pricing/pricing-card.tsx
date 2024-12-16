import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureModal } from "../lead-capture-modal";
import { Check, Flame } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  price?: string;
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
  features,
  isPopular,
  isYearly,
}: PricingCardProps) {
  const displayPrice = price || (isYearly ? yearlyPrice : monthlyPrice);

  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 bg-white border-2 ${
        isPopular
          ? "border-primary shadow-lg md:-mt-8 md:mb-8"
          : "border-gray-200 hover:border-primary transition-colors duration-300"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <Badge className="bg-primary text-white px-3 py-1 text-xs sm:text-sm rounded-full flex items-center gap-2">
            <Flame className="w-3 h-3 sm:w-4 sm:h-4" /> Mais popular
          </Badge>
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
      <div className="mb-6">
        {typeof displayPrice === "number" ? (
          <div>
            <p className="flex items-start">
              <span className="text-2xl sm:text-3xl font-bold">R$</span>
              <span className="text-4xl sm:text-6xl font-bold tracking-tight">
                {displayPrice}
              </span>
              <span className="text-gray-500 ml-2 self-end mb-2">/mês</span>
            </p>
            {isYearly && (
              <p className="text-green-600 font-semibold flex items-center gap-2 text-sm sm:text-base">
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                Economize 20% com o plano anual
              </p>
            )}
          </div>
        ) : (
          <p className="text-xl sm:text-2xl font-bold">{displayPrice}</p>
        )}
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          {isYearly ? "Faturado anualmente" : "Faturado mensalmente"}
        </p>
      </div>
      <ul className="mb-8 space-y-3 sm:space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm sm:text-base"
          >
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <LeadCaptureModal>
        <Button
          className={`w-full mb-4 ${
            isPopular
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
          }`}
        >
          {price === "Personalizado" ? "Fale conosco" : "Comece grátis"}
        </Button>
      </LeadCaptureModal>
      <p className="text-xs text-center text-gray-500">
        {price === "Personalizado"
          ? "Soluções personalizadas para sua empresa"
          : "Teste grátis por 14 dias, sem cartão de crédito"}
      </p>
    </div>
  );
}
