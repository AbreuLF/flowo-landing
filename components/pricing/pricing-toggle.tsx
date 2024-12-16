"use client";

import { Switch } from "@/components/ui/switch";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export function PricingToggle({ isYearly, setIsYearly }: PricingToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-50 px-8 py-3 rounded-lg flex items-center gap-4">
        <span className={isYearly ? "text-gray-500" : "text-gray-900"}>
          Mensal
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          className="data-[state=checked]:bg-primary"
        />
        <span className={isYearly ? "text-gray-900" : "text-gray-500"}>
          Anual
        </span>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full animate-pulse"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Economize até 20% + 1 mês grátis</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
