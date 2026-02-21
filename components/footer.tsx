import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <Image
              src="/flowo-logo.svg"
              alt="Logo Flowo"
              width={120}
              height={30}
              className="mb-6"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Simplifique seu agendamento com ferramentas alimentadas por IA.
              Aumente sua produtividade e reduza faltas com o Flowo.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="/precos"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link
                  href="/sistema-agendamento-barbearia"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sistema de Agendamento
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda-barbearia-whatsapp"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Agenda no WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="/software-barbearia-com-pix"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Software com PIX
                </Link>
              </li>
              <li>
                <Link
                  href="/flowo-vs-planilha"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Flowo vs Planilha
                </Link>
              </li>
              <li>
                <Link
                  href="/flowo-vs-agenda-manual"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Flowo vs Agenda Manual
                </Link>
              </li>
              <li>
                <Link
                  href="/casos-de-sucesso"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos/guias"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Guias
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos/materiais"
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Materiais Gratuitos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@flowo.com.br"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  contato@flowo.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Receba dicas e novidades sobre gestão de agenda e produtividade.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Flowo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacidade"
                prefetch={false}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                prefetch={false}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
