import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react"

import { projects } from "@/data/projects"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return {
      title: "Projet | Absley.dev",
    }
  }

  return {
    title: `${project.title} | Absley.dev`,
    description: project.description,
    alternates: {
      canonical: `/projets/${project.slug}`,
    },
  }
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  )

  if (projectIndex === -1) {
    notFound()
  }

  const project = projects[projectIndex]

  const nextProject =
    projects[(projectIndex + 1) % projects.length]

  return (
    <main className="relative min-h-svh overflow-hidden">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute -left-48 top-32 h-[520px] w-[520px] rounded-full bg-[#6EA8FE]/[0.05] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 top-[35%] h-[520px] w-[520px] rounded-full bg-[#9B8AFB]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
        {/* ======================================== */}
        {/* RETOUR */}
        {/* ======================================== */}

        <Link
          href="/projets"
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#566477] transition-colors duration-300 hover:text-[#C6D0DD]"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />

          Tous les projets
        </Link>

        {/* ======================================== */}
        {/* HERO PROJET */}
        {/* ======================================== */}

        <header className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE] sm:text-[11px]">
              <span className="text-[#566477]">
                PROJECT.
                {(projectIndex + 1)
                  .toString()
                  .padStart(2, "0")}
              </span>

              <span className="text-[#263244]">/</span>

              {project.category}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
              {project.description}
            </p>

            {/* Bouton site en ligne */}
            {project.website && (
              <div className="mt-8">
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    px-5
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
                    <ExternalLink className="size-4 text-[#6EA8FE]" />

                    Voir le site en ligne

                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Informations */}
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015]">
            <div className="border-b border-r border-white/[0.07] p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                Année
              </p>

              <p className="mt-2 text-sm text-[#C6D0DD]">
                {project.year}
              </p>
            </div>

            <div className="border-b border-white/[0.07] p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                Type
              </p>

              <p className="mt-2 text-sm text-[#C6D0DD]">
                {project.category}
              </p>
            </div>

            <div className="border-r border-white/[0.07] p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                Statut
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm text-[#C6D0DD]">
                {project.website && (
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                )}

                {project.website
                  ? "En ligne"
                  : "Projet"}
              </div>
            </div>

            <div className="p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                Stack
              </p>

              <p className="mt-2 text-sm text-[#C6D0DD]">
                {project.stack.length} outils
              </p>
            </div>
          </div>
        </header>

        {/* ======================================== */}
        {/* APERÇU PRINCIPAL */}
        {/* ======================================== */}

        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090E18] p-4 sm:p-6 lg:p-8">
            {/* Halo */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6EA8FE]/[0.06] blur-[150px]" />

            {/* Browser */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070B14] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              {/* Browser bar */}
              <div className="flex h-11 items-center border-b border-white/[0.07] bg-white/[0.02] px-3 sm:h-12 sm:px-4">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#FF605C]" />
                  <span className="size-2.5 rounded-full bg-[#FFBD44]" />
                  <span className="size-2.5 rounded-full bg-[#00CA4E]" />
                </div>

                <div className="mx-auto max-w-[60%] truncate rounded-md border border-white/[0.06] bg-white/[0.025] px-5 py-1 font-mono text-[8px] text-[#566477] sm:px-12 sm:text-[9px]">
                  {project.website
                    ? project.website.replace(
                        "https://",
                        ""
                      )
                    : `absley.dev/projets/${project.slug}`}
                </div>

                <div className="w-[42px]" />
              </div>

              {/* Zone d'aperçu */}
              <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden sm:min-h-[400px]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] items-center justify-center sm:min-h-[400px]">
                    {/* Grille */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

                    {/* Halos */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#6EA8FE]/10 blur-[130px]" />

                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#9B8AFB]/10 blur-[130px]" />

                    <div className="relative px-6 text-center">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#566477] sm:text-[10px]">
                        live.project
                      </p>

                      <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                        {project.title}
                      </h2>

                      <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#8A98AA] sm:text-base">
                        {project.category}
                      </p>

                      <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB]" />

                      {project.website && (
                        <Link
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-8 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#728096] transition-colors duration-300 hover:text-white sm:text-[10px]"
                        >
                          Ouvrir le projet

                          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* PRÉSENTATION */}
        {/* ======================================== */}

        <section className="mt-20 grid gap-10 border-t border-white/[0.07] pt-16 lg:mt-28 lg:grid-cols-[0.45fr_1fr] lg:gap-20 lg:pt-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              01. projet
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Présentation
            </h2>

            <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
              {project.overview ?? project.description}
            </p>
          </div>
        </section>

        {/* ======================================== */}
        {/* PÉRIMÈTRE */}
        {/* ======================================== */}

        {project.highlights &&
          project.highlights.length > 0 && (
            <section className="mt-16 grid gap-10 border-t border-white/[0.07] pt-16 lg:mt-20 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B8AFB]">
                  02. périmètre
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Ce que comprend le projet.
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map(
                    (highlight, index) => (
                      <div
                        key={highlight}
                        className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025]"
                      >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#6EA8FE]/15 bg-[#6EA8FE]/[0.05]">
                          <Check className="size-3.5 text-[#6EA8FE]" />
                        </div>

                        <p className="text-sm text-[#C6D0DD] sm:text-[15px]">
                          {highlight}
                        </p>

                        <span className="ml-auto font-mono text-[9px] text-[#344257]">
                          {(index + 1)
                            .toString()
                            .padStart(2, "0")}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

        {/* ======================================== */}
        {/* STACK */}
        {/* ======================================== */}

        <section className="mt-16 grid gap-10 border-t border-white/[0.07] pt-16 lg:mt-20 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              03. stack
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Technologies utilisées.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map(
                (technology, index) => (
                  <div
                    key={technology}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="font-mono text-[9px] text-[#566477]">
                      {(index + 1)
                        .toString()
                        .padStart(2, "0")}
                    </span>

                    <span className="text-sm text-[#C6D0DD]">
                      {technology}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* PROJET SUIVANT */}
        {/* ======================================== */}

        {projects.length > 1 && (
          <section className="mt-20 border-t border-white/[0.07] pt-12 sm:mt-24 lg:mt-28 lg:pt-16">
            <Link
              href={`/projets/${nextProject.slug}`}
              className="group flex items-end justify-between gap-8"
            >
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477] sm:text-[10px]">
                  Projet suivant
                </p>

                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#6EA8FE] sm:text-4xl lg:text-5xl">
                  {nextProject.title}
                </p>
              </div>

              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-[#728096] transition-all duration-300 group-hover:border-[#6EA8FE]/30 group-hover:bg-[#6EA8FE]/[0.07] group-hover:text-white sm:size-14">
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </section>
        )}
      </div>
    </main>
  )
}