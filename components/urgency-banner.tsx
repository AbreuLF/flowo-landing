"use client";

import { X, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-3 px-4 relative overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-center gap-2 text-center relative z-10">
          <Clock className="w-5 h-5 animate-pulse" />
          <p className="text-sm md:text-base">
            <span className="font-bold">🎉 Oferta de Lançamento:</span> 50% OFF nos 3 primeiros meses
            <span className="mx-2">•</span>
            <span className="font-bold text-yellow-300">Últimas 12 vagas</span>
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </motion.div>
    </AnimatePresence>
  );
}
