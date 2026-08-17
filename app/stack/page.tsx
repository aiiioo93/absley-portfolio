import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Braces,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FlaskConical,
  GitBranch,
  Layers3,
  Monitor,
  Palette,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react"

import {
  coreStack,
  fullStackModules,
  projectTypes,
  stackBenefits,
} from "@/data/stack"

function getCoreIcon(name: string) {
  switch (name) {
    case "Next.js":
      return Layers3
    case "TypeScript":
      return Braces
    case "Tailwind CSS":
      return Palette
    case "shadcn/ui":
      return PanelsTopLeft
    case "Git / GitHub":
      return GitBranch
    case "Vercel":
      return Rocket
    default:
      return Code2
  }
}

function getModuleIcon(label: string) {
  switch (label) {
    case "Données":
      return Database
    case "Comptes":
      return ShieldCheck
    case "Paiement":
      return CreditCard
    case "Tests":
      return FlaskConical
    case "Validation":
      return CheckCircle2
    case "Mobile":
      return Smartphone
    default:
      return Code2
  }
}

function getProjectIcon(title: string) {
  switch (title) {
    case "Site vitrine":
      return Monitor
    case "Back-office":
      return BarChart3
    case "E-commerce":
      return ShoppingCart
    case "SaaS":
      return Cloud
    case "Application mobile":
      return Smartphone
    default:
      return Code2
  }
}

function getBenefitIcon(title: string) {
  switch (title) {
    case "Simple":
      return Sparkles
    case "Rapide":
      return Zap
    case "Fiable":
      return ShieldCheck
    case "Évolutive":
      return TrendingUp
    default:
      return Check
  }
}

export default function StackPage() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute -left-48 top-32 h-[520px] w-[520px] rounded-full bg-[#6EA8FE]/[0.05] blur-[160px]" />

      <div className="pointer-events-none absolute -right-56 top-[32%] h-[520px] w-[520px] rounded-full bg-[#9B8AFB]/[0.05] blur-[160px]" />

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
            ma stack
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Un seul socle.{" "}
            <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
              Des modules selon le besoin.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
            Je garde la même base technique d’un projet à l’autre et j’ajoute
            uniquement les outils réellement nécessaires. L’objectif :
            construire plus proprement, progresser sur une stack cohérente et
            éviter la complexité inutile.
          </p>
        </header>

        {/* ======================================== */}
        {/* PRINCIPE */}
        {/* ======================================== */}

        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="grid overflow-hidden rounded-3xl border border-[#6EA8FE]/15 bg-[#6EA8FE]/[0.025] lg:grid-cols-[0.35fr_1fr]">
            <div className="flex items-center gap-4 border-b border-white/[0.07] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#6EA8FE]/20 bg-[#6EA8FE]/[0.07] text-[#6EA8FE]">
                <Layers3 className="size-4" />
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                  principe
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Stack modulaire
                </p>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:p-8">
              <div className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-[#6EA8FE]" />

                <p className="text-sm text-[#C6D0DD] sm:text-[15px]">
                  Même base sur tous les projets
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Check className="size-4 shrink-0 text-[#9B8AFB]" />

                <p className="text-sm text-[#C6D0DD] sm:text-[15px]">
                  Seulement les modules nécessaires
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SOCLE */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
                <span className="text-[#566477]">02.</span>
                socle
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Toujours{" "}
                <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                  actif.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] lg:justify-self-end">
              Ces six briques constituent la base de mes projets web. Elles ne
              changent pas à chaque nouveau besoin.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {coreStack.map((technology, index) => {
              const Icon = getCoreIcon(technology.name)

              return (
                <div
                  key={technology.name}
                  className={`
                    group
                    relative
                    min-h-[180px]
                    p-6
                    transition-colors
                    duration-300

                    hover:bg-white/[0.025]

                    sm:p-7
                    lg:p-8

                    ${
                      index < coreStack.length - 1
                        ? "border-b border-white/[0.07]"
                        : ""
                    }

                    ${
                      index % 2 === 0
                        ? "sm:border-r"
                        : ""
                    }

                    ${
                      index < 3
                        ? "lg:border-b"
                        : "lg:border-b-0"
                    }

                    ${
                      index % 3 !== 2
                        ? "lg:border-r"
                        : "lg:border-r-0"
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] text-[#566477]">
                      CORE.
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#728096] transition-all duration-300 group-hover:border-[#6EA8FE]/25 group-hover:text-[#6EA8FE]">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white">
                    {technology.name}
                  </h3>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                    {technology.role}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ======================================== */}
        {/* MODULES */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B8AFB]">
                <span className="text-[#566477]">03.</span>
                modules
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Activés{" "}
                <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                  uniquement si besoin.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] lg:justify-self-end">
              Une base de données, des comptes utilisateurs ou Stripe ne sont
              pas ajoutés par défaut. Chaque brique doit répondre à un besoin
              concret.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {fullStackModules.map((module) => {
              const Icon = getModuleIcon(module.label)

              return (
                <div
                  key={module.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.025] sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#9B8AFB]/[0.06] blur-[70px]" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                        MODULE.{module.number}
                      </span>

                      <div className="flex size-10 items-center justify-center rounded-xl border border-[#9B8AFB]/15 bg-[#9B8AFB]/[0.05] text-[#9B8AFB]">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                      {module.label}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-[14px] leading-6 text-[#8A98AA]">
                      {module.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                      {module.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-[#728096]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ======================================== */}
        {/* CE QUE JE PEUX CONSTRUIRE */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              <span className="text-[#566477]">04.</span>
              projets
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ce que cette stack me permet de{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                construire.
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-4 lg:mt-16">
            {projectTypes.map((project) => {
              const Icon = getProjectIcon(project.title)

              return (
                <div
                  key={project.number}
                  className="group grid gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.025] sm:p-8 lg:grid-cols-[0.2fr_0.8fr_1fr] lg:items-center"
                >
                  <div className="flex items-center gap-4 lg:block">
                    <span className="font-mono text-[9px] text-[#566477]">
                      TYPE.{project.number}
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#6EA8FE] lg:mt-5">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#8A98AA]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.modules.map((module) => (
                      <span
                        key={module}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-[#728096]"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Note mobile */}
          <div className="mt-6 flex gap-4 rounded-2xl border border-[#9B8AFB]/15 bg-[#9B8AFB]/[0.03] p-5 sm:p-6">
            <Smartphone className="mt-0.5 size-4 shrink-0 text-[#9B8AFB]" />

            <p className="text-[13px] leading-6 text-[#8A98AA] sm:text-sm">
              Une application mobile ne nécessite pas de reconstruire toute
              l’architecture : Expo et React Native viennent se connecter au
              backend déjà en place.
            </p>
          </div>
        </section>

        {/* ======================================== */}
        {/* FONCTIONNEMENT */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="mb-12 text-center lg:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B8AFB]">
              <span className="text-[#566477]">05.</span>
              fonctionnement
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Même base.{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                Projet différent.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            <div className="rounded-3xl border border-[#6EA8FE]/15 bg-[#6EA8FE]/[0.025] p-7 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                étape 01
              </p>

              <Layers3 className="mx-auto mt-5 size-5 text-[#6EA8FE]" />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Le socle
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8A98AA]">
                La même base technique démarre chaque projet.
              </p>
            </div>

            <ArrowRight className="mx-auto hidden size-4 text-[#344257] lg:block" />

            <div className="rounded-3xl border border-[#9B8AFB]/15 bg-[#9B8AFB]/[0.025] p-7 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                étape 02
              </p>

              <Braces className="mx-auto mt-5 size-5 text-[#9B8AFB]" />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Les modules
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8A98AA]">
                J’active uniquement ce dont le projet a besoin.
              </p>
            </div>

            <ArrowRight className="mx-auto hidden size-4 text-[#344257] lg:block" />

            <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.025] p-7 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#566477]">
                étape 03
              </p>

              <Rocket className="mx-auto mt-5 size-5 text-emerald-400" />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Le produit
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8A98AA]">
                Une solution adaptée sans architecture inutilement lourde.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* POURQUOI */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              <span className="text-[#566477]">06.</span>
              pourquoi
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Une stack pensée pour durer.
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] sm:grid-cols-2 lg:grid-cols-4">
            {stackBenefits.map((benefit, index) => {
              const Icon = getBenefitIcon(benefit.title)

              return (
                <div
                  key={benefit.title}
                  className={`
                    p-6
                    sm:p-7
                    lg:p-8

                    ${
                      index < stackBenefits.length - 1
                        ? "border-b border-white/[0.07] sm:border-b-0"
                        : ""
                    }

                    ${index % 2 === 0 ? "sm:border-r" : ""}

                    ${
                      index < stackBenefits.length - 1
                        ? "lg:border-r"
                        : ""
                    }
                  `}
                >
                  <Icon className="size-4 text-[#6EA8FE]" />

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#8A98AA] sm:text-sm">
                    {benefit.description}
                  </p>
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
            <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6EA8FE]/10 blur-[130px]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#566477]">
                stack.ready()
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Une idée à transformer en produit ?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#8A98AA]">
                Le choix des modules dépend du projet. On commence par le
                besoin, puis on construit uniquement ce qui est nécessaire.
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
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}