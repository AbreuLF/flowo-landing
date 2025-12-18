import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GuidesHero } from "@/components/resources/guides-hero";
import { GuideGrid } from "@/components/resources/guide-grid";

export const metadata: Metadata = {
  title: "Guias para Barbearias - Flowo",
  description:
    "Aprenda a usar o Flowo para reduzir faltas, organizar sua agenda e fazer sua barbearia crescer.",
};

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <GuidesHero />
        <GuideGrid />
      </main>
      <Footer />
    </>
  );
}
