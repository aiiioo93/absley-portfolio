import Link from "next/link"
import {
  ArrowLeft,
  Check,
  Clock3,
  Mail,
  MessageSquare,
} from "lucide-react"

import { ContactForm } from "@/components/contact/contact-form"

const projectTypes = [
  "Sites vitrines",
  "Back-office",
  "E-commerce",
  "SaaS",
  "Applications mobiles",
]

export default function ContactPage() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute -left-48 top-32 h-[520px] w-[520px] rounded-full bg-[#6EA8FE]/[0.05] blur-[160px]" />

      <div className="pointer-events-none absolute -right-56 top-[35%] h-[520px] w-[520px] rounded-full bg-[#9B8AFB]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
        {/* ======================================== */}
        {/* HERO */}
        {/* ======================================== */}

        <header className="max-w-5xl">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#566477] transition-colors duration-300 hover:text-[#C6D0DD]"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Accueil
          </Link>

          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6EA8FE]">
            <span className="text-[#566477]">01.</span>
            contact
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Parlons de votre{" "}
            <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
              prochain projet.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
            Une idée, un besoin ou un produit à construire ? Donnez-moi
            quelques informations et je pourrai mieux comprendre votre projet
            avant d’échanger avec vous.
          </p>
        </header>

        {/* ======================================== */}
        {/* CONTACT */}
        {/* ======================================== */}

        <section className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-[0.62fr_1fr] lg:items-start">
          {/* Colonne gauche */}
          <div className="space-y-5">
            {/* Disponibilité */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.65)]" />

                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                  availability.status
                </p>
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white">
                Disponible pour de nouveaux projets.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#8A98AA]">
                Chaque demande commence par une compréhension claire du besoin
                avant de parler technologie ou développement.
              </p>
            </div>

            {/* Types de projet */}
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090E18]/80">
              <div className="border-b border-white/[0.07] px-6 py-5 sm:px-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                  project.types
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <div className="space-y-4">
                  {projectTypes.map((project) => (
                    <div
                      key={project}
                      className="flex items-center gap-3 text-sm text-[#C6D0DD]"
                    >
                      <Check className="size-3.5 shrink-0 text-[#6EA8FE]" />

                      {project}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infos */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#6EA8FE]">
                  <MessageSquare className="size-3.5" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                    Premier échange
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#C6D0DD]">
                    Comprendre votre besoin avant de définir la solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#9B8AFB]">
                  <Clock3 className="size-3.5" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                    Réponse
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#C6D0DD]">
                    Retour dès que possible après réception de la demande.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 py-2">
              <Mail className="size-3.5 text-[#566477]" />

              <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#566477]">
                secure.contact.form
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <ContactForm />
        </section>
      </div>
    </main>
  )
}