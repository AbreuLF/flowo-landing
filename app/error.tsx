'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Algo deu errado.</h1>
        <p className="text-xl text-gray-600 mb-8">Desculpe pelo inconveniente. Por favor, tente novamente.</p>
        <Button onClick={reset}>Tentar novamente</Button>
      </div>
    </div>
  )
}

