import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute -left-48 top-32 h-[520px] w-[520px] rounded-full bg-[#6EA8FE]/[0.05] blur-[160px]" />

      <div className="pointer-events-none absolute -right-56 top-[35%] h-[520px] w-[520px] rounded-full bg-[#9B8AFB]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
        {/* ======================================== */}
        {/* INTRODUCTION */}
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
            projets
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Des idées transformées en{" "}
            <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
              expériences numériques.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
            Une sélection de projets conçus et développés autour d&apos;un
            objectif simple : créer des expériences claires, modernes,
            performantes et adaptées au besoin.
          </p>
        </header>

        {/* ======================================== */}
        {/* PETITE BARRE D'INFORMATION */}
        {/* ======================================== */}

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-y border-white/[0.07] py-5 sm:mt-16 lg:mt-20">
          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] sm:text-[10px]">
              selected.work
            </span>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] sm:text-[10px]">
            {projects.length.toString().padStart(2, "0")} projets
          </p>
        </div>

        {/* ======================================== */}
        {/* LISTE DES PROJETS */}
        {/* ======================================== */}

        <div className="mt-10 space-y-7 sm:mt-12 lg:space-y-10">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="
                group
                relative
                grid
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.015]
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-white/[0.14]
                hover:bg-white/[0.025]
                hover:shadow-[0_30px_100px_rgba(0,0,0,0.25)]

                lg:grid-cols-[1.08fr_0.92fr]
              "
            >
              {/* ================================== */}
              {/* VISUEL */}
              {/* ================================== */}

              <div className="relative min-h-[280px] overflow-hidden border-b border-white/[0.07] bg-[#090E18] sm:min-h-[360px] lg:min-h-[430px] lg:border-b-0 lg:border-r">
                {/* Halo */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    h-[420px]
                    w-[420px]
                    rounded-full
                    blur-[130px]
                    transition-opacity
                    duration-500

                    ${
                      index % 2 === 0
                        ? "-right-32 -top-32 bg-[#6EA8FE]/20"
                        : "-bottom-32 -left-32 bg-[#9B8AFB]/20"
                    }
                  `}
                />

                {/* Grille intérieure */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px]" />

                {/* Faux navigateur */}
                <div className="absolute left-5 right-5 top-7 overflow-hidden rounded-2xl border border-white/10 bg-[#070B14]/90 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:left-8 sm:right-8 sm:top-9 lg:left-10 lg:right-10 lg:top-11">
                  {/* Browser topbar */}
                  <div className="flex h-10 items-center border-b border-white/[0.07] bg-white/[0.02] px-3 sm:h-11 sm:px-4">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-[#FF605C]" />
                      <span className="size-2 rounded-full bg-[#FFBD44]" />
                      <span className="size-2 rounded-full bg-[#00CA4E]" />
                    </div>

                    <div className="mx-auto max-w-[65%] truncate rounded-md border border-white/[0.06] bg-white/[0.025] px-5 py-1 font-mono text-[8px] text-[#566477] sm:px-10 sm:text-[9px]">
                      absley.dev/projets/{project.slug}
                    </div>

                    <div className="w-[34px]" />
                  </div>

                  {/* ================================== */}
                  {/* MINIATURE DU PROJET */}
                  {/* ================================== */}

                  <div className="relative flex aspect-[16/8.3] items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Aperçu du projet ${project.title}`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 55vw"
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
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,168,254,0.06),transparent_60%)]" />

                        <div className="relative px-5 text-center">
                          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#566477] sm:text-[10px]">
                            {project.category}
                          </p>

                          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                            {project.title}
                          </h2>

                          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB]" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Numéro du projet */}
                <div className="absolute bottom-5 left-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] sm:bottom-7 sm:left-8 sm:text-[10px]">
                  <span className="text-[#6EA8FE]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <span>/</span>

                  <span>{projects.length.toString().padStart(2, "0")}</span>
                </div>
              </div>

              {/* ================================== */}
              {/* INFORMATIONS */}
              {/* ================================== */}

              <div className="relative flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477] sm:text-[10px]">
                      {project.category} — {project.year}
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                      {project.title}
                    </h2>
                  </div>

                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-[#566477]
                      transition-all
                      duration-300

                      group-hover:border-[#6EA8FE]/30
                      group-hover:bg-[#6EA8FE]/[0.07]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#8A98AA] sm:text-[15px]">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-[#728096] sm:text-[10px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bas de carte */}
                <div className="mt-9 flex items-center justify-between border-t border-white/[0.07] pt-5 lg:mt-auto">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477] transition-colors duration-300 group-hover:text-[#C6D0DD] sm:text-[10px]">
                    Voir le projet
                  </span>

                  <span className="font-mono text-[9px] text-[#344257] sm:text-[10px]">
                    /{project.slug}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ======================================== */}
        {/* FIN DE PAGE */}
        {/* ======================================== */}

        <div className="mt-16 flex flex-col items-center justify-center border-t border-white/[0.07] pt-10 text-center sm:mt-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477] sm:text-[10px]">
            more.projects.loading...
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-[#8A98AA]">
            Cette sélection évoluera au fil des nouveaux projets.
          </p>
        </div>
      </div>
    </main>
  )
}