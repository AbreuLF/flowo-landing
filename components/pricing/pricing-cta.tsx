import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "../lead-capture-modal";

export function PricingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="text-center mt-16"
    >
      <LeadCaptureModal>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Comece seu teste gratuito agora
        </Button>
      </LeadCaptureModal>
      <p className="mt-4 text-gray-600">
        Não é necessário cartão de crédito • Cancele a qualquer momento
      </p>
    </motion.div>
  );
}
