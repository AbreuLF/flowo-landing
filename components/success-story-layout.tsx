import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface SuccessStoryLayoutProps {
  children: React.ReactNode;
  title: string;
  industry: string;
  result: string;
}

export default function SuccessStoryLayout({
  children,
  title,
  industry,
  result,
}: SuccessStoryLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para a página inicial
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-gray-600 mb-4">{industry}</p>
            <p className="text-2xl font-bold text-primary mb-8">{result}</p>

            <div className="bg-white rounded-lg shadow-lg p-8">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
