import {
  BarChart3,
  Cloud,
  Monitor,
  ShoppingCart,
  Smartphone,
} from "lucide-react"

export const services = [
  {
    number: "01",
    title: "Sites vitrines",
    description:
      "Des sites modernes, rapides et responsive pour présenter une activité, valoriser une marque et offrir une expérience professionnelle sur tous les écrans.",
    icon: Monitor,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],
  },

  {
    number: "02",
    title: "Back-office & gestion de données",
    description:
      "Des interfaces métier pour organiser, consulter et gérer des données : tableaux de bord, espaces d’administration, outils internes et fonctionnalités sur mesure.",
    icon: BarChart3,
    technologies: [
      "Next.js",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Zod",
    ],
  },

  {
    number: "03",
    title: "E-commerce",
    description:
      "Des plateformes capables de gérer des comptes utilisateurs, des données produits et des paiements en ligne avec une architecture pensée pour évoluer.",
    icon: ShoppingCart,
    technologies: [
      "Next.js",
      "Better Auth",
      "PostgreSQL",
      "Stripe",
      "Zod",
    ],
  },

  {
    number: "04",
    title: "SaaS",
    description:
      "Des produits web complets avec authentification, données, abonnements et fonctionnalités métier, construits sur une base solide et évolutive.",
    icon: Cloud,
    technologies: [
      "Next.js",
      "Supabase",
      "Better Auth",
      "Stripe",
      "Prisma",
    ],
  },

  {
    number: "05",
    title: "Applications mobiles",
    description:
      "Des applications iOS et Android connectées au même backend que les produits web, avec une expérience mobile moderne et adaptée aux usages.",
    icon: Smartphone,
    technologies: [
      "Expo",
      "React Native",
      "NativeWind",
      "Better Auth",
      "API",
    ],
  },
]