import { Code2, Globe2, Layers3 } from "lucide-react"

export const services = [
  {
    number: "01",
    title: "Sites web",
    description:
      "Des sites vitrines modernes, rapides et responsive, pensés pour présenter une activité clairement et convertir les visiteurs.",
    icon: Globe2,
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    title: "Applications web",
    description:
      "Des interfaces et outils web conçus autour de vrais usages : tableaux de bord, espaces clients, gestion de données et fonctionnalités métier.",
    icon: Code2,
    technologies: ["Next.js", "API", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Produits & SaaS",
    description:
      "Des produits numériques capables d’évoluer : authentification, abonnements, paiements et architecture pensée pour accompagner la croissance.",
    icon: Layers3,
    technologies: ["Supabase", "Better Auth", "Stripe"],
  },
]