import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-72">
          <h3 className="font-bold mb-2">Fale Conosco</h3>
          <p className="text-sm mb-4">Tem alguma dúvida? Nossa equipe está pronta para ajudar!</p>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Iniciar Chat
          </Button>
        </div>
      )}
      <Button
        className="rounded-full w-12 h-12 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </Button>
    </div>
  )
}

