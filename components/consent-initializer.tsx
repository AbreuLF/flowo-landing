"use client";

import { useEffect } from "react";
import { initializeDefaultConsent } from "@/lib/consent";

/**
 * Component to initialize consent management on page load
 * Must be placed in the layout to run on every page
 */
export function ConsentInitializer() {
  useEffect(() => {
    initializeDefaultConsent();
  }, []);

  return null;
}
