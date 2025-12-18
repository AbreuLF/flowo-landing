"use client";

import { useCallback } from "react";
import { useSegment } from "@/providers/segment-provider";

/**
 * Unified analytics hook for tracking events across the landing page
 */
export function useAnalytics() {
  const { track, page, identify, hasConsent, isReady } = useSegment();

  /**
   * Track when a user submits a lead capture form
   */
  const trackLeadCapture = useCallback(
    (data: {
      email?: string;
      name?: string;
      phone?: string;
      source?: string;
      formId?: string;
    }) => {
      track("Lead Captured", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track CTA button clicks
   */
  const trackCTAClick = useCallback(
    (data: {
      buttonText: string;
      location: string;
      destination?: string;
    }) => {
      track("CTA Clicked", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track when user views a pricing plan
   */
  const trackPricingView = useCallback(
    (data: {
      planName: string;
      planPrice?: number;
      billingCycle?: "monthly" | "annual";
    }) => {
      track("Pricing Viewed", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track when user selects a pricing plan
   */
  const trackPlanSelected = useCallback(
    (data: {
      planName: string;
      planPrice?: number;
      billingCycle?: "monthly" | "annual";
    }) => {
      track("Plan Selected", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track FAQ interactions
   */
  const trackFAQInteraction = useCallback(
    (data: { question: string; action: "opened" | "closed" }) => {
      track("FAQ Interaction", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track resource downloads
   */
  const trackResourceDownload = useCallback(
    (data: {
      resourceName: string;
      resourceType: "pdf" | "xlsx" | "guide" | "other";
      resourceUrl?: string;
    }) => {
      track("Resource Downloaded", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track newsletter signup
   */
  const trackNewsletterSignup = useCallback(
    (data: { email: string; source?: string }) => {
      track("Newsletter Signup", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track case study view
   */
  const trackCaseStudyView = useCallback(
    (data: { title: string; industry?: string }) => {
      track("Case Study Viewed", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track scroll depth
   */
  const trackScrollDepth = useCallback(
    (data: { depth: number; page: string }) => {
      track("Scroll Depth", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track video engagement
   */
  const trackVideoEngagement = useCallback(
    (data: {
      videoId: string;
      action: "play" | "pause" | "complete" | "25%" | "50%" | "75%";
      videoTitle?: string;
    }) => {
      track("Video Engagement", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track external link clicks
   */
  const trackExternalLink = useCallback(
    (data: { url: string; linkText?: string; location?: string }) => {
      track("External Link Clicked", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  /**
   * Track search queries
   */
  const trackSearch = useCallback(
    (data: { query: string; resultsCount?: number }) => {
      track("Search Performed", {
        ...data,
        timestamp: new Date().toISOString(),
      });
    },
    [track]
  );

  return {
    // Core methods
    track,
    page,
    identify,
    hasConsent,
    isReady,
    // Helper methods
    trackLeadCapture,
    trackCTAClick,
    trackPricingView,
    trackPlanSelected,
    trackFAQInteraction,
    trackResourceDownload,
    trackNewsletterSignup,
    trackCaseStudyView,
    trackScrollDepth,
    trackVideoEngagement,
    trackExternalLink,
    trackSearch,
  };
}
