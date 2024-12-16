import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo Flowo"
              width={120}
              height={40}
              className="mb-6"
            />
            <p className="text-gray-400 mb-6">
              Simplifique seu agendamento com ferramentas alimentadas por IA.
              Aumente sua produtividade e reduza faltas com o Flowo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="hover:text-primary transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="/precos"
                  className="hover:text-primary transition-colors"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link
                  href="/casos-de-sucesso"
                  className="hover:text-primary transition-colors"
                >
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/ajuda"
                  className="hover:text-primary transition-colors"
                >
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="mailto:contato@flowo.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@flowo.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="tel:+551199999999"
                  className="hover:text-primary transition-colors"
                >
                  (11) 9999-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Receba dicas e novidades sobre gestão de agenda e produtividade.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full">Inscrever-se</Button>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Flowo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacidade"
                className="hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/cookies"
                className="hover:text-primary transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
