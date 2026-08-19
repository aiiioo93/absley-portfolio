import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react"

import { services } from "@/data/services"

const process = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Identifier le besoin, les objectifs, les utilisateurs et les fonctionnalités réellement nécessaires.",
    icon: Search,
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Structurer l’expérience, définir l’interface et préparer une base claire avant de développer.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Développer",
    description:
      "Construire une solution responsive, maintenable et adaptée aux besoins du projet.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Livrer",
    description:
      "Tester, optimiser et mettre le projet en ligne dans un environnement prêt à évoluer.",
    icon: Rocket,
  },
]

export default function ServicesPage() {
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

          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B8AFB]">
            <span className="text-[#566477]">01.</span>
            services
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Du besoin initial au{" "}
            <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
              produit final.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
            Site vitrine, back-office, e-commerce, SaaS ou application mobile :
            je m’appuie sur le même socle technique et j’ajoute uniquement les
            modules nécessaires au projet.
          </p>
        </header>

        {/* ======================================== */}
        {/* SERVICES */}
        {/* ======================================== */}

        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-8 flex items-center justify-between border-y border-white/[0.07] py-5">
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] sm:text-[10px]">
                available.services
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] sm:text-[10px]">
              {services.length.toString().padStart(2, "0")} services
            </span>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <div
                  key={service.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-white/[0.015]
                    transition-all
                    duration-500

                    hover:border-white/[0.14]
                    hover:bg-white/[0.025]
                  "
                >
                  {/* Halo */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      h-[420px]
                      w-[420px]
                      rounded-full
                      blur-[140px]

                      ${
                        index % 2 === 0
                          ? "-right-32 -top-32 bg-[#6EA8FE]/10"
                          : "-bottom-32 -left-32 bg-[#9B8AFB]/10"
                      }
                    `}
                  />

                  <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.35fr_1fr_0.7fr] lg:items-center lg:p-10 xl:p-12">
                    {/* Numéro + icône */}
                    <div className="flex items-center justify-between lg:block">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                        SERVICE.{service.number}
                      </p>

                      <div className="flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#6EA8FE] lg:mt-8">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    {/* Contenu */}
                    <div>
                      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h2>

                      <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#8A98AA] sm:text-[15px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="lg:border-l lg:border-white/[0.07] lg:pl-10">
                      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                        technologies
                      </p>

                      <div className="flex flex-wrap gap-2 lg:flex-col">
                        {service.technologies.map((technology) => (
                          <div
                            key={technology}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                          >
                            <Check className="size-3 text-[#6EA8FE]" />

                            <span className="font-mono text-[9px] text-[#728096] sm:text-[10px]">
                              {technology}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ======================================== */}
        {/* MÉTHODE */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
                <span className="text-[#566477]">02.</span>
                méthode
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Une méthode simple,{" "}
                <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                  du début à la mise en ligne.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] lg:justify-self-end">
              Pas de complexité ajoutée inutilement. Chaque étape doit servir
              le projet et permettre de garder une base claire, testable et
              maintenable.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className={`
                    group
                    relative
                    min-h-[290px]
                    p-6
                    transition-colors
                    duration-300

                    hover:bg-white/[0.025]

                    sm:p-7
                    lg:p-8

                    ${
                      index < process.length - 1
                        ? "border-b border-white/[0.07] sm:border-b-0"
                        : ""
                    }

                    ${
                      index % 2 === 0
                        ? "sm:border-r"
                        : ""
                    }

                    ${
                      index < process.length - 1
                        ? "lg:border-r"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[#566477]">
                      {step.number}
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#728096] transition-all duration-300 group-hover:border-[#6EA8FE]/25 group-hover:text-[#6EA8FE]">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-6 text-[#8A98AA]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ======================================== */}
        {/* CTA */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 text-center sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Halo */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6EA8FE]/10 blur-[130px]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                project.start()
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Un projet à construire ?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#8A98AA]">
                Présentez-moi votre besoin et voyons ensemble quelle solution
                correspond le mieux à votre projet.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="
                    group
                    relative
                    inline-flex
                    h-12
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#6EA8FE]/40
                    bg-[#6EA8FE]/10
                    px-6
                    text-sm
                    text-white
                    transition-all
                    duration-300

                    hover:border-[#6EA8FE]/70
                    hover:bg-[#6EA8FE]/15
                    hover:shadow-[0_0_35px_rgba(110,168,254,0.15)]
                  "
                >
                  <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

                  <span className="relative flex items-center gap-3">
                    Démarrer un projet

                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              <Link
                href="/projets"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] transition-colors duration-300 hover:text-[#C6D0DD] sm:text-[10px]"
              >
                Voir mes réalisations

                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}