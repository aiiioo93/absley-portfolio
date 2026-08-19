import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Création de sites vitrines, back-offices, e-commerce, SaaS et applications mobiles adaptés aux besoins de chaque projet.",

  alternates: {
  canonical: "/services",
},
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}