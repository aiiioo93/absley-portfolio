import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Découvrez la stack modulaire utilisée par Abdoul-aziz Dramé : Next.js, TypeScript, Tailwind CSS, shadcn/ui et des modules activés selon les besoins du projet.",

  alternates: {
  canonical: "/stack",
},
}

export default function StackLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}