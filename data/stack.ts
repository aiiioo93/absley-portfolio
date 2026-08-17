export const coreStack = [
  {
    name: "Next.js",
    role: "Framework",
  },
  {
    name: "TypeScript",
    role: "Langage",
  },
  {
    name: "Tailwind CSS",
    role: "Interface",
  },
  {
    name: "shadcn/ui",
    role: "Composants",
  },
  {
    name: "Git / GitHub",
    role: "Versioning",
  },
  {
    name: "Vercel",
    role: "Déploiement",
  },
]

/*
 * Version courte utilisée sur la homepage.
 * On la laisse volontairement à 4 éléments
 * pour ne pas surcharger l'accueil.
 */
export const stackModules = [
  {
    label: "Données",
    tools: "Prisma + Supabase",
  },
  {
    label: "Comptes",
    tools: "Better Auth",
  },
  {
    label: "Paiement",
    tools: "Stripe",
  },
  {
    label: "Validation",
    tools: "Zod",
  },
]

/*
 * Version complète utilisée sur /stack.
 */
export const fullStackModules = [
  {
    number: "01",
    label: "Données",
    tools: ["Prisma", "Supabase", "PostgreSQL"],
    description:
      "Stocker, organiser et interroger les données structurées d’un projet.",
  },
  {
    number: "02",
    label: "Comptes",
    tools: ["Better Auth"],
    description:
      "Gérer l’inscription, la connexion, les sessions et les rôles utilisateurs.",
  },
  {
    number: "03",
    label: "Paiement",
    tools: ["Stripe"],
    description:
      "Encaisser des paiements et gérer des abonnements lorsque le projet en a besoin.",
  },
  {
    number: "04",
    label: "Tests",
    tools: ["Vitest", "Playwright"],
    description:
      "Vérifier automatiquement les fonctionnalités importantes et limiter les régressions.",
  },
  {
    number: "05",
    label: "Validation",
    tools: ["Zod", "React Hook Form"],
    description:
      "Contrôler les données saisies et construire des formulaires fiables.",
  },
  {
    number: "06",
    label: "Mobile",
    tools: ["Expo", "React Native", "NativeWind"],
    description:
      "Ajouter une application iOS et Android connectée au même backend.",
  },
]

export const projectTypes = [
  {
    number: "01",
    title: "Site vitrine",
    description:
      "Présenter une activité, une marque, des services ou un portfolio avec une expérience rapide et responsive.",
    modules: ["Socle"],
  },
  {
    number: "02",
    title: "Back-office",
    description:
      "Construire des outils internes, tableaux de bord et interfaces de gestion de données.",
    modules: ["Données", "Comptes", "Validation"],
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Créer une plateforme avec catalogue, comptes utilisateurs, données et paiement en ligne.",
    modules: ["Données", "Comptes", "Paiement", "Tests"],
  },
  {
    number: "04",
    title: "SaaS",
    description:
      "Développer un produit web complet avec authentification, données, logique métier et abonnements.",
    modules: ["Données", "Comptes", "Paiement", "Tests"],
  },
  {
    number: "05",
    title: "Application mobile",
    description:
      "Déployer une expérience iOS et Android en réutilisant le backend et les services existants.",
    modules: ["Mobile", "Données", "Comptes"],
  },
]

export const stackBenefits = [
  {
    title: "Simple",
    description: "Moins de complexité et une architecture plus lisible.",
  },
  {
    title: "Rapide",
    description: "Une base connue permet de démarrer et livrer plus vite.",
  },
  {
    title: "Fiable",
    description: "Des outils éprouvés et une organisation répétable.",
  },
  {
    title: "Évolutive",
    description: "On ajoute des modules seulement lorsque le besoin apparaît.",
  },
]