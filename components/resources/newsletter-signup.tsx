import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/section";

export function NewsletterSignup() {
  return (
    <Section background="primary" className="text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Fique por dentro das novidades
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Assine nossa newsletter para receber dicas de produtividade,
          atualizações do Flowo e recursos exclusivos.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            className="bg-white text-gray-900"
            required
          />
          <Button type="submit" variant="secondary" size="lg">
            Inscrever-se
          </Button>
        </form>
      </div>
    </Section>
  );
}
