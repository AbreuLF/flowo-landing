import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const restrictedPaths = ["/api/", "/monitoring", "/_next/"];

  return {
    rules: [
      {
        userAgent: [
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "CCBot",
          "Google-Extended",
          "PerplexityBot",
        ],
        allow: "/",
        disallow: restrictedPaths,
        crawlDelay: 2,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: restrictedPaths,
      },
      // Block known high-noise crawler that has low relevance for our distribution goals.
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
