"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LeadCaptureModal } from "./lead-capture-modal";
<Image src="/flowo-logo.png" alt="Flowo" width={120} height={30} />;
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            <Image src="/logo.png" alt="Flowo" width={120} height={30} />
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Como Funciona
            </Link>
            <Link
              href="/recursos"
              className="text-gray-600 hover:text-gray-900"
            >
              Recursos
            </Link>
            <Link href="/precos" className="text-gray-600 hover:text-gray-900">
              Preços
            </Link>
          </div>

          <LeadCaptureModal>
            <Button className="hidden md:inline-flex bg-primary text-white hover:bg-primary/90">
              Comece Agora
            </Button>
          </LeadCaptureModal>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Como Funciona
            </Link>
            <Link
              href="/recursos"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Recursos
            </Link>
            <Link
              href="/precos"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Preços
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <LeadCaptureModal>
              <Button className="ml-3 bg-primary text-white hover:bg-primary/90">
                Comece Agora
              </Button>
            </LeadCaptureModal>
          </div>
        </div>
      )}
    </nav>
  );
}
