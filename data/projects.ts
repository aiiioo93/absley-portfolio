export type Project = {
  slug: string
  title: string
  category: string
  description: string
  stack: string[]
  year: string
  featured: boolean

  image?: string
  website?: string
  overview?: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: "atelier-noma",
    title: "Atelier Noma",
    category: "Projet concept · Site vitrine",
    image: "/projects/atelier-noma.webp",
    description:
      "Une expérience web moderne pensée pour présenter une activité avec clarté, élégance et efficacité sur tous les écrans.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    featured: true,
    

    website: "https://atelier-noma-eight.vercel.app",

    overview:
      "Atelier Noma est un site vitrine multipage consacré à un studio d’architecture intérieure. Le site présente les réalisations du studio, ses services, son approche ainsi qu’un espace de contact permettant de démarrer un projet.",

    highlights: [
      "Accueil éditorial",
      "Présentation des réalisations",
      "Pages Services et À propos",
      "Formulaire de contact",
    ],
  },

//   {
//     slug: "horizon-voyages",
//     title: "Horizon Voyages",
//     category: "Site vitrine",
//     description:
//       "Un site de voyage immersif conçu autour d’une navigation simple, d’une identité visuelle forte et d’une expérience responsive.",
//     stack: ["Next.js", "TypeScript", "Tailwind CSS"],
//     year: "2026",
//     featured: true,
//   },
]

export const featuredProjects = projects.filter(
  (project) => project.featured
)