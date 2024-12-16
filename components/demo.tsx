import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Demo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Veja o Flowo em Ação
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <Image
            src="/demo-placeholder.jpg"
            alt="Demonstração do Flowo"
            className="rounded-lg shadow-xl w-full"
          />
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
