import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Absley.dev — Développeur web",
    template: "%s | Absley.dev",
  },
  description:
    "Portfolio de développeur web spécialisé dans la création de sites, applications web et produits numériques modernes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#070B14] font-sans text-[#F4F7FB] antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}