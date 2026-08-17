export type Project = {
  slug: string
  title: string
  category: string
  description: string
  stack: string[]
  year: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "atelier-noma",
    title: "Atelier Noma",
    category: "Site vitrine",
    description:
      "Une expérience web moderne pensée pour présenter une activité avec clarté, élégance et efficacité sur tous les écrans.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    featured: true,
  },
  {
    slug: "horizon-voyages",
    title: "Horizon Voyages",
    category: "Site vitrine",
    description:
      "Un site de voyage immersif conçu autour d’une navigation simple, d’une identité visuelle forte et d’une expérience responsive.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    featured: true,
  },
]

export const featuredProjects = projects.filter(
  (project) => project.featured
)