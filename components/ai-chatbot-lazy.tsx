"use client";

import dynamic from "next/dynamic";

const AIChatbot = dynamic(() => import("@/components/ai-chatbot"), {
  ssr: false,
});

export default function AIChatbotLazy() {
  return <AIChatbot />;
}
