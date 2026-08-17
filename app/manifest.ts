import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Absley.dev — Abdoul-aziz Dramé",
    short_name: "Absley.dev",
    description:
      "Portfolio d’Abdoul-aziz Dramé, développeur web & applicatif. Sites vitrines, back-offices, e-commerce, SaaS et applications mobiles.",
    start_url: "/",
    display: "standalone",
    background_color: "#070B14",
    theme_color: "#070B14",
    lang: "fr",
  }
}