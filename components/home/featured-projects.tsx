import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { featuredProjects } from "@/data/projects"

export function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32">
      {/* Grille technique discrète */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halo */}
      <div className="pointer-events-none absolute -left-48 top-32 h-[500px] w-[500px] rounded-full bg-[#6EA8FE]/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              <span className="text-[#566477]">02.</span>
              projets sélectionnés
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Des projets pensés pour être{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                utiles et mémorables.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] sm:text-base lg:justify-self-end">
            Une sélection de projets où design, développement et expérience
            utilisateur travaillent ensemble pour répondre à un objectif
            concret.
          </p>
        </div>

        {/* Projets */}
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.02]
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-white/[0.14]
                hover:bg-white/[0.03]
                hover:shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              "
            >
              {/* Zone visuelle du projet */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-[#090E18]">
                {/* Halo spécifique */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    h-[320px]
                    w-[320px]
                    rounded-full
                    blur-[100px]
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    ${
                      index === 0
                        ? "right-[-80px] top-[-100px] bg-[#6EA8FE]/20"
                        : "left-[-80px] bottom-[-100px] bg-[#9B8AFB]/20"
                    }
                  `}
                />

                {/* Faux navigateur */}
                <div className="absolute left-5 right-5 top-6 overflow-hidden rounded-xl border border-white/10 bg-[#070B14]/90 shadow-2xl sm:left-8 sm:right-8 sm:top-8">
                  {/* Barre navigateur */}
                  <div className="flex h-10 items-center border-b border-white/[0.07] bg-white/[0.02] px-3">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-[#FF605C]" />
                      <span className="size-2 rounded-full bg-[#FFBD44]" />
                      <span className="size-2 rounded-full bg-[#00CA4E]" />
                    </div>

                    <div className="mx-auto rounded-md border border-white/[0.06] bg-white/[0.025] px-8 py-1 font-mono text-[8px] text-[#566477] sm:px-14 sm:text-[9px]">
                      absley.dev/projets/{project.slug}
                    </div>

                    <div className="w-8" />
                  </div>

                  {/* Aperçu */}
                  <div className="relative flex aspect-[16/8.3] items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Aperçu du projet ${project.title}`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                          object-cover
                          object-top
                          transition-transform
                          duration-700
                          group-hover:scale-[1.02]
                        "
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:32px_32px]" />

                        <div className="relative px-6 text-center">
                          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#566477] sm:text-[10px]">
                            {project.category}
                          </p>

                          <p className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                            {project.title}
                          </p>

                          <div className="mx-auto mt-4 h-px w-14 bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB]" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Numéro */}
                <div className="absolute bottom-4 right-5 font-mono text-[10px] text-[#566477] sm:bottom-5 sm:right-7">
                  0{index + 1}
                </div>
              </div>

              {/* Informations */}
              <div className="p-6 sm:p-7 lg:p-8">
                <div className="mb-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#566477]">
                      {project.category} — {project.year}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[#8A98AA] transition-all duration-300 group-hover:border-[#6EA8FE]/30 group-hover:bg-[#6EA8FE]/10 group-hover:text-white">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <p className="max-w-lg text-[14px] leading-6 text-[#8A98AA] sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] text-[#728096] sm:text-[10px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Lien vers la vraie page projets */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/projets"
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

              hover:border-[#6EA8FE]/30
              hover:bg-[#6EA8FE]/[0.06]
              hover:text-white
            "
          >
            <span className="text-[#6EA8FE]">❯</span>

            Voir tous les projets

            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}