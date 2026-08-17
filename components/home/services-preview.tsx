import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { services } from "@/data/services"

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute -right-56 top-16 h-[520px] w-[520px] rounded-full bg-[#9B8AFB]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B8AFB]">
              <span className="text-[#566477]">03.</span>
              services
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Du besoin initial au{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                produit final.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] sm:text-base lg:justify-self-end">
            Je conçois des expériences numériques adaptées au projet, avec une
            approche simple : comprendre le besoin, construire proprement et
            préparer la suite.
          </p>
        </div>

        {/* Services */}
        <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) =>{
            const Icon = service.icon

            return (
              <Link
                key={service.number}
                href="/services"
                className={`
                  group
                  relative
                  flex
                  min-h-[350px]
                  flex-col
                  p-6
                  transition-all
                  duration-500

                  hover:bg-white/[0.025]

                  sm:p-8

                  ${
                    index !== services.length - 1
                      ? "border-b border-white/[0.07] lg:border-b-0 lg:border-r"
                      : ""
                  }
                `}
              >
                {/* Halo hover */}
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#6EA8FE]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#6EA8FE]/10" />

                {/* Ligne haute */}
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#566477]">
                    SERVICE.{service.number}
                  </span>

                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-[#728096]
                      transition-all
                      duration-300

                      group-hover:border-[#6EA8FE]/25
                      group-hover:bg-[#6EA8FE]/[0.07]
                      group-hover:text-[#6EA8FE]
                    "
                  >
                    <Icon className="size-4" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="relative mt-16 sm:mt-20">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-6 text-[#8A98AA] sm:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* Bas */}
                <div className="relative mt-auto pt-8">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-[#566477]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#728096] transition-colors duration-300 group-hover:text-white">
                      Découvrir
                    </span>

                    <ArrowUpRight className="size-4 text-[#566477] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6EA8FE]" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/[0.02]
              px-5
              py-3
              font-mono
              text-[11px]
              text-[#C6D0DD]
              transition-all
              duration-300

              hover:border-[#9B8AFB]/30
              hover:bg-[#9B8AFB]/[0.06]
              hover:text-white
            "
          >
            <span className="text-[#9B8AFB]">❯</span>

            Voir tous les services

            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}