import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Demo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Veja o Flowo em Ação
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="aspect-video rounded-lg shadow-xl w-full gradient-bg-medium flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <p className="text-white font-semibold text-lg">
                Demonstração do Sistema
              </p>
              <p className="text-white/80 text-sm mt-2">
                Veja como é fácil gerenciar sua barbearia
              </p>
            </div>
          </div>
          <Button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary hover:bg-white/90"
            size="lg"
          >
            <Play className="mr-2 h-5 w-5" />
            Assista ao Vídeo
          </Button>
        </div>
      </div>
    </section>
  );
}
