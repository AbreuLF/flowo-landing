import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const LAST_MODIFIED = new Date("2026-02-21T00:00:00.000Z");

const ROUTES = [
  "/",
  "/precos",
  "/sistema-agendamento-barbearia",
  "/agenda-barbearia-whatsapp",
  "/software-barbearia-com-pix",
  "/recursos",
  "/recursos/videos",
  "/recursos/materiais",
  "/recursos/guias",
  "/recursos/guias/guia-definitivo-agendamento",
  "/recursos/guias/gerenciamento-equipe",
  "/recursos/guias/reduzindo-faltas",
  "/recursos/guias/pagamentos-pix",
  "/recursos/guias/relatorios-metricas",
  "/recursos/guias/configurando-whatsapp",
  "/casos-de-sucesso",
  "/casos-de-sucesso/academia-corpo-em-forma",
  "/casos-de-sucesso/clinica-saude-total",
  "/casos-de-sucesso/estudio-beleza-radiante",
  "/sobre",
  "/privacidade",
  "/termos",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority:
      route === "/"
        ? 1
        : route === "/sistema-agendamento-barbearia" ||
            route === "/agenda-barbearia-whatsapp" ||
            route === "/software-barbearia-com-pix"
          ? 0.9
          : route.startsWith("/recursos/guias/")
            ? 0.8
            : 0.7,
  }));
}
