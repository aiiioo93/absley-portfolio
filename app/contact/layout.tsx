import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Vous avez un projet web ou mobile ? Contactez Abdoul-aziz Dramé pour échanger autour de votre besoin et de la solution à construire.",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}