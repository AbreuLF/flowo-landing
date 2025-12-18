"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getSavedConsent, type ConsentPreferences } from "@/lib/consent";

// Extend Window interface for Segment
declare global {
  interface Window {
    analytics?: {
      track: (event: string, properties?: object) => void;
      page: (category?: string, name?: string, properties?: object) => void;
      identify: (userId?: string, traits?: object) => void;
      group: (groupId: string, traits?: object) => void;
      alias: (userId: string) => void;
      reset: () => void;
      ready: (callback: () => void) => void;
    };
  }
}

interface SegmentContextType {
  isReady: boolean;
  hasConsent: boolean;
  track: (event: string, properties?: object) => void;
  page: (category?: string, name?: string, properties?: object) => void;
  identify: (userId?: string, traits?: object) => void;
}

const SegmentContext = createContext<SegmentContextType>({
  isReady: false,
  hasConsent: false,
  track: () => {},
  page: () => {},
  identify: () => {},
});

export const useSegment = () => useContext(SegmentContext);

interface SegmentProviderProps {
  children: ReactNode;
  writeKey?: string;
}

export function SegmentProvider({ children, writeKey }: SegmentProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Segment when consent is granted
  const initializeSegment = useCallback((): void => {
    if (typeof window === "undefined" || !writeKey) return;

    const consent = getSavedConsent();
    if (!consent?.analytics) {
      setHasConsent(false);
      return;
    }

    setHasConsent(true);

    // If already initialized, just mark as ready
    if (window.analytics) {
      setIsReady(true);
      return;
    }

    // Load Segment analytics.js
    const script = document.createElement("script");
    script.innerHTML = `
      !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel=canonical]");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="${writeKey}";;analytics.SNIPPET_VERSION="5.2.1";
        analytics.load("${writeKey}");
        analytics.page();
      }}();
    `;
    document.head.appendChild(script);

    // Mark as ready after script loads
    setTimeout(() => {
      setIsReady(true);
      console.info("[Segment] Analytics initialized with consent");
    }, 2000);
  }, [writeKey]);

  // Listen for consent changes
  useEffect(() => {
    const handleConsentUpdate = (event: CustomEvent<ConsentPreferences>) => {
      if (event.detail.analytics) {
        initializeSegment();
      } else {
        setHasConsent(false);
        // Reset Segment if consent is withdrawn
        if (window.analytics?.reset) {
          window.analytics.reset();
        }
      }
    };

    window.addEventListener("consent-updated", handleConsentUpdate as EventListener);

    // Check initial consent
    initializeSegment();

    return () => {
      window.removeEventListener("consent-updated", handleConsentUpdate as EventListener);
    };
  }, [initializeSegment]);

  // Track page views on route change
  useEffect(() => {
    if (!isReady || !hasConsent || !window.analytics) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    window.analytics.page(undefined, undefined, {
      path: pathname,
      url,
      search: searchParams?.toString() || "",
      title: document.title,
    });
  }, [pathname, searchParams, isReady, hasConsent]);

  // Context methods
  const track = useCallback((event: string, properties?: object) => {
    if (!hasConsent) {
      console.debug("[Segment] Track skipped - no consent:", event);
      return;
    }
    if (window.analytics) {
      window.analytics.track(event, properties);
    }
  }, [hasConsent]);

  const page = useCallback((category?: string, name?: string, properties?: object) => {
    if (!hasConsent) {
      console.debug("[Segment] Page skipped - no consent");
      return;
    }
    if (window.analytics) {
      window.analytics.page(category, name, properties);
    }
  }, [hasConsent]);

  const identify = useCallback((userId?: string, traits?: object) => {
    if (!hasConsent) {
      console.debug("[Segment] Identify skipped - no consent");
      return;
    }
    if (window.analytics) {
      window.analytics.identify(userId, traits);
    }
  }, [hasConsent]);

  return (
    <SegmentContext.Provider value={{ isReady, hasConsent, track, page, identify }}>
      {children}
    </SegmentContext.Provider>
  );
}
