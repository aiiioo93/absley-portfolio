import Link from "next/link"
import { ArrowRight, Check, UserRound } from "lucide-react"

const principles = [
  "Comprendre le besoin avant de coder",
  "Construire proprement et simplement",
  "Penser responsive dès le départ",
]

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halo */}
      <div className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-[#9B8AFB]/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-12 lg:mb-16">
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B8AFB]">
            <span className="text-[#566477]">05.</span>
            à propos
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Derrière le code,{" "}
            <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
              une vraie réflexion.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Partie principale */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#6EA8FE]/[0.06] blur-[100px]" />

            <div className="relative">
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-[#6EA8FE]/20 bg-[#6EA8FE]/[0.06] text-[#6EA8FE]">
                <UserRound className="size-5" />
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                absley.dev
              </p>

              <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                Je construis des expériences numériques avec une approche
                simple : faire les choses bien.
              </h3>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#8A98AA] sm:text-base">
                Chaque projet commence par une compréhension claire du besoin.
                L’objectif n’est pas d’ajouter de la technologie pour ajouter
                de la technologie, mais de construire une solution utile,
                cohérente et capable d’évoluer.
              </p>

              <div className="mt-8">
                <Link
                  href="/a-propos"
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

                  En savoir plus

                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Principes */}
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090E18]/80">
            <div className="border-b border-white/[0.07] px-6 py-5 sm:px-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                working.method
              </p>

              <p className="mt-1 text-sm text-[#C6D0DD]">
                Ma façon d’aborder un projet
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="space-y-3">
                {principles.map((principle, index) => (
                  <div
                    key={principle}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#6EA8FE]/15 bg-[#6EA8FE]/[0.05]">
                      <Check className="size-3.5 text-[#6EA8FE]" />
                    </div>

                    <p className="text-sm text-[#C6D0DD] sm:text-[15px]">
                      {principle}
                    </p>

                    <span className="ml-auto font-mono text-[9px] text-[#344257]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Petit bloc final */}
              <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">
                <p className="font-mono text-[10px] leading-5 text-[#728096]">
                  <span className="mr-2 text-[#9B8AFB]">❯</span>
                  design
                </p>

                <p className="mt-1 font-mono text-[10px] leading-5 text-[#728096]">
                  <span className="mr-2 text-[#6EA8FE]">❯</span>
                  développement
                </p>

                <p className="mt-1 font-mono text-[10px] leading-5 text-[#728096]">
                  <span className="mr-2 text-emerald-400">✓</span>
                  livraison
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}