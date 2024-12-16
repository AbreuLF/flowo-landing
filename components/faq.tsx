import { Section } from "@/components/section";
import { FAQSection } from "@/components/faq-section";
import { faqItems } from "@/data/faq-items";

export default function FAQ() {
  return (
    <Section background="gradient-reverse">
      <FAQSection
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre o Flowo"
        items={faqItems}
      />
    </Section>
  );
}
