"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LeadCaptureModal } from "./lead-capture-modal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Como Funciona", href: "/#como-funciona" },
    { name: "Recursos", href: "/recursos" },
    { name: "Preços", href: "/precos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" prefetch={false} className="flex items-center">
            <Image src="/flowo-logo.svg" alt="Flowo" width={120} height={30} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-12">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={false}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="https://barber.flowo.com.br"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Entrar
              </Link>
              <LeadCaptureModal>
                <Button size="sm">Começar Teste</Button>
              </LeadCaptureModal>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={false}
                className="block py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://barber.flowo.com.br"
              className="block py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
            <LeadCaptureModal>
              <Button className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Começar Teste
              </Button>
            </LeadCaptureModal>
          </div>
        )}
      </div>
    </nav>
  );
}
