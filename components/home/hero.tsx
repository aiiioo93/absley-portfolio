import Link from "next/link"
import { ArrowRight, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden lg:h-svh lg:min-h-0">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halo principal */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#6EA8FE]/8 blur-[140px]" />

      <div
        className="
          relative
          mx-auto
          min-h-svh
          max-w-7xl
          px-5
          pb-7
          pt-28

          sm:px-6

          lg:grid
          lg:h-full
          lg:min-h-0
          lg:grid-cols-[1.05fr_0.95fr]
          lg:items-center
          lg:gap-14
          lg:px-8
          lg:pb-8
          lg:pt-28
        "
      >
        {/* ======================================== */}
        {/* CONTENU */}
        {/* ======================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[calc(100svh-8.75rem)]
            flex-col
            justify-between
            gap-[clamp(1.1rem,2.5svh,2rem)]

            lg:block
            lg:min-h-0
          "
        >
          {/* Groupe 1 : badge + titre */}
          <div>
            <div className="mb-[clamp(1.1rem,2.5svh,1.6rem)] inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-[#8A98AA] sm:text-xs">
              <span className="size-1.5 rounded-full bg-[#6EA8FE] shadow-[0_0_10px_#6EA8FE]" />
              développeur.web
            </div>

            <h1
              className="
                relative
                max-w-3xl
                text-[clamp(2.45rem,10.7vw,2.9rem)]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-white

                sm:text-6xl
                lg:text-7xl
              "
            >
              Je transforme des idées en{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                expériences numériques.
              </span>
            </h1>
          </div>

          {/* Groupe 2 : description */}
          <div className="lg:mt-7">
            <p className="max-w-xl text-[15px] leading-6 text-[#8A98AA] sm:text-lg sm:leading-7">
              Je conçois des sites web, applications et produits numériques
              modernes, rapides et maintenables, avec une stack pensée pour
              construire proprement et évoluer dans le temps.
            </p>
          </div>

          {/* Groupe 3 : boutons */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3 lg:mt-9">
            <Button
              asChild
              size="lg"
              className="
                group
                relative
                h-11
                overflow-hidden
                rounded-xl
                border
                border-[#6EA8FE]/40
                bg-[#6EA8FE]/10
                px-3
                text-white
                shadow-[0_0_0_rgba(110,168,254,0)]
                transition-all
                duration-300

                hover:border-[#6EA8FE]/70
                hover:bg-[#6EA8FE]/15
                hover:shadow-[0_0_30px_rgba(110,168,254,0.15)]

                min-[390px]:px-4

                sm:h-12
                sm:px-5
              "
            >
              <Link href="/projets">
                <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

                <span className="relative flex items-center gap-2 min-[390px]:gap-3">
                  <span className="font-mono text-[10px] text-[#6EA8FE] min-[390px]:text-[11px]">
                    01.
                  </span>

                  <span className="text-xs min-[390px]:text-sm sm:hidden">
                    Mes projets
                  </span>

                  <span className="hidden sm:inline">
                    Voir mes projets
                  </span>

                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 min-[390px]:size-4" />
                </span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                group
                h-11
                rounded-xl
                border-white/10
                bg-white/[0.02]
                px-3
                text-[#C6D0DD]
                transition-all
                duration-300

                hover:border-[#9B8AFB]/40
                hover:bg-[#9B8AFB]/[0.06]
                hover:text-white

                min-[390px]:px-4

                sm:h-12
                sm:px-5
              "
            >
              <Link href="/contact">
                <span className="font-mono text-[#9B8AFB]">
                  ❯
                </span>

                <span className="text-[11px] min-[390px]:text-sm">
                  Démarrer un projet
                </span>
              </Link>
            </Button>
          </div>

          {/* Groupe 4 : technologies */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-[#566477]

              sm:gap-x-5
              sm:text-[11px]
              sm:tracking-[0.14em]

              lg:mt-7
            "
          >
            <span>Next.js</span>
            <span className="text-[#263244]">/</span>

            <span>TypeScript</span>
            <span className="text-[#263244]">/</span>

            <span>Tailwind</span>
            <span className="text-[#263244]">/</span>

            <span>Vercel</span>
          </div>
        </div>

        {/* ======================================== */}
        {/* FENÊTRE DE CODE */}
        {/* ======================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-5
            top-[clamp(7rem,14svh,8rem)]
            z-0
            w-[clamp(21rem,92vw,24rem)]
            origin-top-right
            scale-[0.72]
            select-none
            opacity-[0.36]

            sm:right-6
            sm:top-[7.25rem]
            sm:scale-[0.76]
            sm:opacity-40

            lg:pointer-events-auto
            lg:relative
            lg:right-auto
            lg:top-auto
            lg:z-auto
            lg:mx-0
            lg:w-full
            lg:max-w-[540px]
            lg:-translate-y-4
            lg:scale-100
            lg:select-auto
            lg:opacity-100

            xl:max-w-xl
          "
        >
          {/* Halo fenêtre */}
          <div className="absolute -inset-8 rounded-[40px] bg-[#6EA8FE]/5 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090E18]/95 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            {/* Topbar */}
            <div className="flex h-12 items-center border-b border-white/10 bg-white/[0.015] px-4">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#FF605C]" />
                <span className="size-2.5 rounded-full bg-[#FFBD44]" />
                <span className="size-2.5 rounded-full bg-[#00CA4E]" />
              </div>

              <div className="ml-6 flex h-full items-center border-x border-white/10 bg-white/[0.025] px-4">
                <Code2 className="mr-2 size-3.5 text-[#6EA8FE]" />

                <span className="font-mono text-[11px] text-[#8A98AA]">
                  page.tsx
                </span>
              </div>
            </div>

            {/* Code */}
            <div className="overflow-hidden p-6 font-mono text-[12px] leading-7 sm:p-8 sm:text-[13px]">
              <div>
                <span className="mr-5 select-none text-[#344257]">01</span>
                <span className="text-[#C792EA]">const</span>{" "}
                <span className="text-[#82AAFF]">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-[#89DDFF]">&#123;</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">02</span>
                <span className="ml-5 text-[#F07178]">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#C3E88D]">
                  &quot;Absley.dev&quot;
                </span>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">03</span>
                <span className="ml-5 text-[#F07178]">focus</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#C3E88D]">
                  &quot;web products&quot;
                </span>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">04</span>
                <span className="ml-5 text-[#F07178]">stack</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#89DDFF]">[</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">05</span>
                <span className="ml-10 text-[#C3E88D]">
                  &quot;Next.js&quot;
                </span>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">06</span>
                <span className="ml-10 text-[#C3E88D]">
                  &quot;TypeScript&quot;
                </span>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">07</span>
                <span className="ml-10 text-[#C3E88D]">
                  &quot;Tailwind&quot;
                </span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">08</span>
                <span className="ml-5 text-[#89DDFF]">]</span>
                <span className="text-white">,</span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">09</span>
                <span className="ml-5 text-[#F07178]">status</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#C3E88D]">
                  &quot;building&quot;
                </span>
              </div>

              <div>
                <span className="mr-5 select-none text-[#344257]">10</span>
                <span className="text-[#89DDFF]">&#125;</span>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="mr-3 text-[#6EA8FE]">❯</span>
                <span className="text-[#8A98AA]">npm run build</span>
              </div>

              <div>
                <span className="mr-3 text-emerald-400">✓</span>
                <span className="text-emerald-400/80">
                  Compiled successfully
                </span>
                <span className="ml-1 animate-pulse text-[#6EA8FE]">
                  _
                </span>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex h-9 items-center justify-between border-t border-white/10 bg-[#6EA8FE]/5 px-4 font-mono text-[10px] text-[#728096]">
              <span>main*</span>

              <div className="flex items-center gap-4">
                <span>UTF-8</span>
                <span>TypeScript React</span>

                <span className="flex items-center gap-1.5 text-emerald-400/80">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  ready
                </span>
              </div>
            </div>
          </div>

          {/* Seulement desktop */}
          <div className="absolute -bottom-6 -left-8 hidden rounded-xl border border-white/10 bg-[#0B111D]/95 px-4 py-3 shadow-xl backdrop-blur-xl lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
              build.status
            </p>

            <div className="mt-1.5 flex items-center gap-2 text-sm text-white">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
              Production ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}