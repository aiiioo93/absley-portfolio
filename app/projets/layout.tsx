import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez les projets réalisés par Abdoul-aziz Dramé : sites web, applications et produits numériques construits avec une stack moderne et évolutive.",
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}