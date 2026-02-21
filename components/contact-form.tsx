"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { TurnstileWidget } from "@/components/turnstile-widget"

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, company, turnstileToken }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({ message: "" }))
        throw new Error(data.message || 'Failed to submit form')
      }

      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
      setCompany('')
      setTurnstileToken('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        {success ? (
          <p className="text-green-500 text-center">Sua mensagem foi enviada com sucesso!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <TurnstileWidget action="contact_form" onTokenChange={setTurnstileToken} className="mx-auto" />
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || (Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken)}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
