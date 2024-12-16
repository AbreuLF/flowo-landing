"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Olá! Sou o assistente virtual do Flowo. Como posso ajudar?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    // Simular resposta do bot (em um cenário real, isso seria uma chamada à API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Obrigado pela sua mensagem! Um de nossos especialistas entrará em contato em breve para responder sua pergunta sobre o Flowo.",
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-80 max-h-96 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Assistente Flowo</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.isBot ? "text-left" : "text-right"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.isBot ? "bg-gray-200" : "bg-primary text-white"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua mensagem..."
              className="flex-grow"
            />
            <Button onClick={handleSend} className="ml-2">
              Enviar
            </Button>
          </div>
        </div>
      )}
      <Button
        className="rounded-full w-12 h-12 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle />
      </Button>
    </div>
  );
}
