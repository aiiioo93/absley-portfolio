import Link from "next/link"
import {
  ArrowRight,
  Braces,
  Check,
  Database,
  Layers3,
  ShieldCheck,
} from "lucide-react"

import { coreStack, stackModules } from "@/data/stack"

export function StackPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halo */}
      <div className="pointer-events-none absolute -left-56 top-20 h-[520px] w-[520px] rounded-full bg-[#6EA8FE]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              <span className="text-[#566477]">04.</span>
              stack
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Une base solide.{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                Des modules selon le besoin.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] sm:text-base lg:justify-self-end">
            Je garde un socle technique stable d’un projet à l’autre, puis
            j’ajoute uniquement les briques réellement nécessaires.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Socle */}
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                  core.stack
                </p>

                <p className="mt-1 text-sm text-[#C6D0DD]">
                  Socle toujours actif
                </p>
              </div>

              <div className="flex size-10 items-center justify-center rounded-xl border border-[#6EA8FE]/20 bg-[#6EA8FE]/[0.06] text-[#6EA8FE]">
                <Braces className="size-4" />
              </div>
            </div>

            {/* Technologies */}
            <div className="grid sm:grid-cols-2">
              {coreStack.map((technology, index) => (
                <div
                  key={technology.name}
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-white/[0.07]
                    px-6
                    py-5
                    transition-colors
                    duration-300

                    hover:bg-white/[0.02]

                    sm:px-8

                    ${
                      index < coreStack.length - 1
                        ? "border-b"
                        : ""
                    }

                    ${
                      index % 2 === 0
                        ? "sm:border-r"
                        : ""
                    }

                    ${
                      index >= coreStack.length - 2
                        ? "sm:border-b-0"
                        : ""
                    }
                  `}
                >
                  <div>
                    <p className="text-sm font-medium text-white sm:text-base">
                      {technology.name}
                    </p>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                      {technology.role}
                    </p>
                  </div>

                  <Check className="size-3.5 text-[#6EA8FE]/60 transition-colors duration-300 group-hover:text-[#6EA8FE]" />
                </div>
              ))}
            </div>
          </div>

          {/* Modules */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090E18]/80">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-[#9B8AFB]/10 blur-[90px]" />

            <div className="relative p-6 sm:p-8">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                    optional.modules
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    J’ajoute ce qu’il faut.
                  </h3>
                </div>

                <div className="flex size-10 items-center justify-center rounded-xl border border-[#9B8AFB]/20 bg-[#9B8AFB]/[0.06] text-[#9B8AFB]">
                  <Layers3 className="size-4" />
                </div>
              </div>

              {/* Pipeline */}
              <div className="space-y-3">
                {stackModules.map((module, index) => (
                  <div
                    key={module.label}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                      {index === 0 && (
                        <Database className="size-3.5 text-[#6EA8FE]" />
                      )}

                      {index === 1 && (
                        <ShieldCheck className="size-3.5 text-[#9B8AFB]" />
                      )}

                      {index === 2 && (
                        <span className="font-mono text-xs text-[#6EA8FE]">
                          €
                        </span>
                      )}

                      {index === 3 && (
                        <Braces className="size-3.5 text-[#9B8AFB]" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                        {module.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-[#C6D0DD]">
                        {module.tools}
                      </p>
                    </div>

                    <span className="ml-auto font-mono text-[9px] text-[#344257]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Principe */}
              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <p className="font-mono text-[10px] leading-5 text-[#728096]">
                  <span className="mr-2 text-[#6EA8FE]">❯</span>
                  pas de complexité inutile
                </p>

                <p className="mt-2 font-mono text-[10px] leading-5 text-[#728096]">
                  <span className="mr-2 text-[#9B8AFB]">❯</span>
                  une architecture qui peut évoluer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/stack"
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

            Découvrir ma stack

            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}