import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import { LeadCaptureModal } from "@/components/lead-capture-modal";

export const metadata: Metadata = {
  title: "Vídeos - Flowo",
  description:
    "Vídeos tutoriais para aprender a usar o Flowo na sua barbearia.",
};

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <Section background="white" className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb
                items={[
                  { label: "Início", href: "/" },
                  { label: "Recursos", href: "/recursos" },
                  { label: "Vídeos", href: "/recursos/videos" },
                ]}
              />

              {/* Hero */}
              <div className="mt-8 mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <Play className="w-4 h-4" />
                  Vídeos Tutoriais
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Aprenda com Vídeos
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Tutoriais em vídeo para você aprender a usar o Flowo na sua
                  barbearia. Em breve.
                </p>
              </div>

              {/* Coming Soon */}
              <div className="text-center py-16 px-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="p-4 bg-primary/5 rounded-full w-fit mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Vídeos em breve
                </h2>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Estamos preparando vídeos tutoriais para ajudar você a tirar o
                  máximo do Flowo. Enquanto isso, confira nossos guias escritos.
                </p>
                <Button variant="outline" asChild>
                  <a href="/recursos/guias">Ver guias disponíveis</a>
                </Button>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-primary text-white rounded-2xl">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-3">
                    Quer testar o Flowo agora?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Configure sua barbearia em 5 minutos. 14 dias grátis para
                    testar.
                  </p>
                  <LeadCaptureModal>
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Começar teste grátis
                    </Button>
                  </LeadCaptureModal>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
