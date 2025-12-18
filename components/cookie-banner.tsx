"use client";

import { useState, useEffect } from "react";
import { X, Settings, Shield, BarChart3, Megaphone, Check, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getSavedConsent, saveConsent, type ConsentPreferences } from "@/lib/consent";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = getSavedConsent();
    if (savedConsent) {
      setPreferences(savedConsent);
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const allRejected: ConsentPreferences = {
      necessary: true, // Always required
      analytics: false,
      marketing: false,
    };
    saveConsent(allRejected);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Compact Banner */}
        {!showPreferences ? (
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Usamos cookies para melhorar sua experiência.{" "}
                  <Link href="/privacidade" className="text-primary hover:underline">
                    Saiba mais
                  </Link>
                </p>
              </div>
              <button
                onClick={handleRejectAll}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Fechar"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-8 px-3"
                onClick={() => setShowPreferences(true)}
              >
                <Settings className="w-3.5 h-3.5 mr-1.5" />
                Preferências
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8 px-3"
                onClick={handleRejectAll}
              >
                Rejeitar
              </Button>
              <Button
                size="sm"
                className="text-xs h-8 px-3 bg-primary hover:bg-primary/90"
                onClick={handleAcceptAll}
              >
                Aceitar
              </Button>
            </div>
          </div>
        ) : (
          /* Preferences Panel */
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <h3 className="font-medium text-sm text-gray-900">Preferências de cookies</h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="space-y-2.5 mb-4">
              {/* Necessary */}
              <div className="flex items-center justify-between py-2 px-2.5 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Necessários</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs text-green-600">Ativo</span>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between py-2 px-2.5 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Analíticos</span>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, analytics: checked }))
                  }
                />
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between py-2 px-2.5 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Marketing</span>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, marketing: checked }))
                  }
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs h-8"
                onClick={() => setShowPreferences(false)}
              >
                Voltar
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs h-8 bg-primary hover:bg-primary/90"
                onClick={handleSavePreferences}
              >
                Salvar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
