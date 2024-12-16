import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Flowo Logo" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#recursos"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#precos"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Preços
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Sobre
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Entrar
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Começar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
