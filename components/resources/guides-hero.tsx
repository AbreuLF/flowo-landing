"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { BookOpen } from "lucide-react";

export function GuidesHero() {
  return (
    <section className="pt-32 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Recursos", href: "/recursos" },
            { label: "Guias", href: "/recursos/guias" },
          ]}
        />
        <div className="mt-8">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            Central de Conhecimento
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Guias para Barbearias
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Aprenda a usar o Flowo para reduzir faltas, organizar sua agenda e
            fazer sua barbearia crescer. Guias práticos, direto ao ponto.
          </p>
        </div>
      </div>
    </section>
  );
}
