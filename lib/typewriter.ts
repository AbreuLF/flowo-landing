"use client"

import { useEffect, useState } from 'react'

export function useTypewriter(words: string[], typingSpeed = 150, deletingSpeed = 75, pauseTime = 2000) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      const currentWord = words[currentIndex]
      
      if (isDeleting) {
        setCurrentText(prev => prev.substring(0, prev.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex(prev => (prev + 1) % words.length)
        }
        timeout = setTimeout(type, deletingSpeed)
      } else {
        if (currentText === currentWord) {
          timeout = setTimeout(() => setIsDeleting(true), pauseTime)
        } else {
          setCurrentText(prev => currentWord.substring(0, prev.length + 1))
          timeout = setTimeout(type, typingSpeed)
        }
      }
    }

    timeout = setTimeout(type, typingSpeed)
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return currentText
}

