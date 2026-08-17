import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours d’Abdoul-aziz Dramé, développeur web et applicatif, sa formation, sa méthode de travail et son approche du développement.",
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}