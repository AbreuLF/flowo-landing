"use client";

import { useState } from "react";
import * as Sentry from "@sentry/nextjs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countries from "@/lib/countries";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { CheckCircle2, XCircle } from "lucide-react";
import { TurnstileWidget } from "@/components/turnstile-widget";

const formatPhoneNumber = (phone: string, dialCode: string) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // For Brazilian numbers (+55)
  if (dialCode === '+55' && cleaned.length >= 10) {
    if (cleaned.length === 11) {
      // Mobile: (XX) 9XXXX-XXXX
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    } else if (cleaned.length === 10) {
      // Landline: (XX) XXXX-XXXX
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    }
  }

  // For other countries or incomplete numbers, return as is
  return phone;
};

export function LeadCaptureModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [company, setCompany] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [countryCode, setCountryCode] = useState<FlagIconCode>("BR"); // Default to Brazil
  const [dialCode, setDialCode] = useState("+55"); // Default to Brazil dial code
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    // Add breadcrumb for form submission
    Sentry.addBreadcrumb({
      category: 'lead-capture-modal',
      message: 'Form submission started',
      level: 'info',
      data: {
        hasName: !!name,
        hasEmail: !!email,
        hasWhatsapp: !!whatsapp,
        countryCode,
      },
    });

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          whatsapp: `${dialCode}${whatsapp}`,
          company,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || "Ocorreu um erro. Tente novamente.";
        setIsError(true);

        // Capture non-successful responses as warnings
        Sentry.captureMessage('Lead capture form submission failed', {
          level: 'warning',
          tags: {
            component: 'lead-capture-modal',
            error_type: 'api_error',
          },
          extra: {
            statusCode: response.status,
            errorMessage,
            name,
            hasEmail: !!email,
          },
        });

        return;
      }

      setIsSuccess(true);

      // Add success breadcrumb
      Sentry.addBreadcrumb({
        category: 'lead-capture-modal',
        message: 'Form submitted successfully',
        level: 'info',
      });
    } catch (err) {
      setIsError(true);

      // Capture client-side errors with context
      Sentry.captureException(err, {
        level: 'error',
        tags: {
          component: 'lead-capture-modal',
          error_type: 'network_error',
        },
        contexts: {
          form: {
            name: 'Lead Capture Form',
            data: {
              hasName: !!name,
              hasEmail: !!email,
              hasWhatsapp: !!whatsapp,
              countryCode,
              dialCode,
            },
          },
        },
        extra: {
          errorMessage: err instanceof Error ? err.message : 'Unknown error',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setWhatsapp("");
    setCompany("");
    setTurnstileToken("");
    setCountryCode("BR");
    setDialCode("+55");
    setIsSuccess(false);
    setIsError(false);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const handleCountryChange = (value: string) => {
    const [code, dial] = value.split(":");
    setCountryCode(code as FlagIconCode);
    setDialCode(dial);
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setWhatsapp(input);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent>
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl mb-2">
                  Cadastro Realizado com Sucesso!
                </DialogTitle>
                <DialogDescription className="text-base">
                  Obrigado por se inscrever, {name.split(' ')[0]}! Em breve nossa equipe entrará em contato pelo WhatsApp para configurar seu período de teste.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-600">
                  Fique atento ao WhatsApp: <span className="font-semibold">{dialCode} {formatPhoneNumber(whatsapp, dialCode)}</span>
                </p>
                <Button
                  onClick={() => handleOpenChange(false)}
                  className="w-full"
                >
                  Fechar
                </Button>
              </div>
            </div>
          ) : isError ? (
            <div className="text-center py-6">
              <div className="mb-4 flex justify-center">
                <XCircle className="w-16 h-16 text-red-500" />
              </div>
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl mb-2 text-center">
                  Algo deu errado
                </DialogTitle>
                <DialogDescription className="text-base text-center">
                  Não conseguimos processar sua solicitação no momento. Nossa equipe foi notificada e está trabalhando para resolver o problema.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-600 text-center">
                  Por favor, tente novamente em alguns instantes.
                </p>
                <Button
                  onClick={() => setIsError(false)}
                  className="w-full"
                >
                  Tentar Novamente
                </Button>
                <Button
                  onClick={() => handleOpenChange(false)}
                  variant="outline"
                  className="w-full"
                >
                  Fechar
                </Button>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Comece sua jornada com o Flowo</DialogTitle>
                <DialogDescription>
                  Preencha o formulário abaixo para iniciar seu período de teste
                  de 14 dias.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail (opcional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <div className="flex">
                    <Select
                      onValueChange={handleCountryChange}
                      defaultValue={`BR:+55`}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue>
                          <div className="flex items-center">
                            <FlagIcon
                              code={countryCode}
                              size={24}
                              className="mr-2"
                            />
                            {dialCode}
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem
                            key={country.code}
                            value={`${country.code}:${country.dialCode}`}
                          >
                            <div className="flex items-center">
                              <FlagIcon
                                code={country.code as FlagIconCode}
                                size={24}
                                className="mr-2"
                              />
                              {country.dialCode}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formatPhoneNumber(whatsapp, dialCode)}
                      onChange={handleWhatsAppChange}
                      placeholder="(11) 98765-4321"
                      className="flex-1 ml-2"
                      required
                    />
                  </div>
                </div>
                <TurnstileWidget
                  action="lead_capture"
                  onTokenChange={setTurnstileToken}
                  className="mx-auto"
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={
                    isSubmitting ||
                    (Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) && !turnstileToken)
                  }
                >
                  {isSubmitting ? "Enviando..." : "Iniciar Período de Teste"}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
