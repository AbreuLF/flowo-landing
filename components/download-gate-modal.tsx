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
import { CheckCircle2, XCircle, Download, FileText } from "lucide-react";
import { TurnstileWidget } from "@/components/turnstile-widget";

const formatPhoneNumber = (phone: string, dialCode: string) => {
  const cleaned = phone.replace(/\D/g, "");
  if (dialCode === "+55" && cleaned.length >= 10) {
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    } else if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    }
  }
  return phone;
};

interface DownloadGateModalProps {
  children: React.ReactNode;
  resourceTitle: string;
  resourceDescription: string;
  downloadUrl: string;
  resourceType?: "pdf" | "spreadsheet" | "template";
}

export function DownloadGateModal({
  children,
  resourceTitle,
  resourceDescription,
  downloadUrl,
  resourceType = "pdf",
}: DownloadGateModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [company, setCompany] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [countryCode, setCountryCode] = useState<FlagIconCode>("BR");
  const [dialCode, setDialCode] = useState("+55");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    Sentry.addBreadcrumb({
      category: "download-gate-modal",
      message: "Form submission started",
      level: "info",
      data: {
        resourceTitle,
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
          source: `download:${resourceTitle}`,
          company,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || "Ocorreu um erro. Tente novamente.";
        setIsError(true);

        Sentry.captureMessage("Download gate form submission failed", {
          level: "warning",
          tags: {
            component: "download-gate-modal",
            error_type: "api_error",
          },
          extra: {
            statusCode: response.status,
            errorMessage,
            name,
            hasEmail: !!email,
            resourceTitle,
          },
        });

        return;
      }

      setIsSuccess(true);

      Sentry.addBreadcrumb({
        category: "download-gate-modal",
        message: "Form submitted successfully, initiating download",
        level: "info",
        data: { resourceTitle },
      });

      // Trigger download after successful submission
      setTimeout(() => {
        window.open(downloadUrl, "_blank");
      }, 1500);
    } catch (err) {
      setIsError(true);

      Sentry.captureException(err, {
        level: "error",
        tags: {
          component: "download-gate-modal",
          error_type: "network_error",
        },
        contexts: {
          form: {
            name: "Download Gate Form",
            data: {
              hasName: !!name,
              hasEmail: !!email,
              hasWhatsapp: !!whatsapp,
              countryCode,
              dialCode,
              resourceTitle,
            },
          },
        },
        extra: {
          errorMessage: err instanceof Error ? err.message : "Unknown error",
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
    const input = e.target.value.replace(/\D/g, "");
    setWhatsapp(input);
  };

  const getResourceIcon = () => {
    switch (resourceType) {
      case "spreadsheet":
        return <FileText className="w-8 h-8 text-green-600" />;
      case "template":
        return <FileText className="w-8 h-8 text-blue-600" />;
      default:
        return <FileText className="w-8 h-8 text-red-600" />;
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-md">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl mb-2">
                  Download Iniciado!
                </DialogTitle>
                <DialogDescription className="text-base">
                  O download de &ldquo;{resourceTitle}&rdquo; vai começar
                  automaticamente. Se não iniciar, clique no botão abaixo.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-3">
                <Button onClick={() => window.open(downloadUrl, "_blank")} className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar novamente
                </Button>
                <Button
                  variant="outline"
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
                  Não conseguimos processar sua solicitação no momento. Por
                  favor, tente novamente.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-3">
                <Button onClick={() => setIsError(false)} className="w-full">
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    {getResourceIcon()}
                  </div>
                  <div>
                    <DialogTitle className="text-xl">{resourceTitle}</DialogTitle>
                    <DialogDescription className="text-sm mt-1">
                      {resourceDescription}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-4">
                  Preencha seus dados para baixar gratuitamente:
                </p>
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
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
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
                    {isSubmitting ? (
                      "Processando..."
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Baixar Grátis
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Seus dados estão seguros. Não compartilhamos com terceiros.
                  </p>
                </form>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
