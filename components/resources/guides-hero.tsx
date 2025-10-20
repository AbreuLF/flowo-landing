"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GuidesHero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-100 to-primary-50">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aprenda. Explore. Cresça.
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubra nossa coleção de guias detalhados para maximizar seu uso do
          Flowo e impulsionar seu negócio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <BookOpen className="mr-2 h-5 w-5" /> Explorar Guias
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
