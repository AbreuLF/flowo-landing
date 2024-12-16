import { useState, useEffect } from 'react'

export default function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsVisible(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 bg-primary text-white px-4 py-2 rounded
        transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      Pular para o conteúdo principal
    </a>
  )
}

