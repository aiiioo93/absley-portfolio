import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { SiteFooter } from "@/components/site-footer"
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
  metadataBase: new URL("https://absley.dev"),

  alternates: {
    canonical: "/",
  },

  applicationName: "Absley.dev",

  title: {
    default: "Absley.dev — Développeur web & applicatif",
    template: "%s | Absley.dev",
  },

  description:
    "Portfolio d’Abdoul-aziz Dramé, développeur web & applicatif. Création de sites vitrines, back-offices, e-commerce, SaaS et applications mobiles modernes.",

  keywords: [
    "Abdoul-aziz Dramé",
    "Absley.dev",
    "développeur web",
    "développeur applicatif",
    "développeur Next.js",
    "développeur TypeScript",
    "création site web",
    "site vitrine",
    "application web",
    "back-office",
    "e-commerce",
    "SaaS",
    "application mobile",
    "React Native",
    "Next.js",
    "TypeScript",
  ],

  authors: [
    {
      name: "Abdoul-aziz Dramé",
    },
  ],

  creator: "Abdoul-aziz Dramé",
  publisher: "Absley.dev",

  category: "technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Absley.dev",

    title: "Absley.dev — Développeur web & applicatif",

    description:
      "Portfolio d’Abdoul-aziz Dramé. Sites vitrines, applications web, back-offices, e-commerce, SaaS et applications mobiles.",
  },

  twitter: {
    card: "summary",

    title: "Absley.dev — Développeur web & applicatif",

    description:
      "Portfolio d’Abdoul-aziz Dramé. Développement de produits web et mobiles modernes.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdoul-aziz Dramé",
  url: "https://absley.dev",
  jobTitle: "Développeur web & applicatif",
  sameAs: [
    "https://github.com/aiiioo93",
    "https://www.linkedin.com/in/abdoul-aziz-ba1404180/",
    "https://www.instagram.com/absleydev/",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  )
}