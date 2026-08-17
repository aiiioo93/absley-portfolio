import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  Check,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
  Smartphone,
  UserRound,
  Wrench,
} from "lucide-react"

const formations = [
  {
    title: "BTS SIO",
    subtitle: "Option SLAM",
    description:
      "Une formation orientée développement d’applications qui m’a permis d’acquérir des bases solides en programmation, conception et logique applicative.",
  },
  {
    title: "Bachelor CDA",
    subtitle: "Concepteur Développeur d’Applications",
    description:
      "Une formation complémentaire qui m’a permis d’approfondir la conception et le développement d’applications, notamment autour de Python.",
  },
]

const method = [
  "Comprendre",
  "Concevoir",
  "Développer",
  "Tester",
  "Améliorer",
  "Livrer",
]

const products = [
  {
    number: "01",
    title: "Sites vitrines",
    description:
      "Des sites professionnels modernes, rapides et responsive pour présenter une activité, une marque ou un service.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Back-office",
    description:
      "Des interfaces de gestion, tableaux de bord et outils internes connectés à de vraies données.",
    icon: Database,
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Des plateformes capables de gérer utilisateurs, données produits et paiements en ligne.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "SaaS",
    description:
      "Des produits web complets avec authentification, données, fonctionnalités métier et abonnements.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Applications mobiles",
    description:
      "Des applications iOS et Android connectées au même backend que les produits web.",
    icon: Smartphone,
  },
]

const coreStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Git / GitHub",
  "Vercel",
]

const modules = [
  "Prisma + Supabase",
  "Better Auth",
  "Stripe",
  "Zod + React Hook Form",
  "Vitest + Playwright",
  "Expo + React Native",
]

export default function AboutPage() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute -left-48 top-32 h-[520px] w-[520px] rounded-full bg-[#6EA8FE]/[0.05] blur-[160px]" />

      <div className="pointer-events-none absolute -right-56 top-[36%] h-[520px] w-[520px] rounded-full bg-[#9B8AFB]/[0.05] blur-[160px]" />

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
            à propos
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Abdoul-aziz Dramé.
            <br />

            <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
              Développeur web & applicatif.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
            Je conçois des produits numériques modernes, utiles et pensés pour
            répondre à de vrais besoins. Mon objectif n’est pas d’accumuler
            les technologies, mais de comprendre un problème et de construire
            une solution propre, fonctionnelle et capable d’évoluer.
          </p>
        </header>

        {/* ======================================== */}
        {/* QUI JE SUIS */}
        {/* ======================================== */}

        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[#6EA8FE]/[0.07] blur-[110px]" />

              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-[#6EA8FE]/20 bg-[#6EA8FE]/[0.06] text-[#6EA8FE]">
                  <UserRound className="size-5" />
                </div>

                <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                  developer.profile
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Construire pour apprendre.
                  <br />
                  Apprendre pour mieux construire.
                </h2>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
                  Mes formations m’ont donné les bases de la programmation et
                  de la conception d’applications. Aujourd’hui, je poursuis
                  cette évolution de manière très concrète : je construis, je
                  teste, j’améliore et je transforme progressivement mes idées
                  en projets utilisables.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090E18]/80">
              <div className="border-b border-white/[0.07] px-6 py-5 sm:px-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                  profile.status
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                      Profil
                    </p>

                    <p className="mt-2 text-sm text-[#C6D0DD]">
                      Développeur web & applicatif
                    </p>
                  </div>

                  <div className="border-t border-white/[0.07] pt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                      Approche
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#C6D0DD]">
                      Construire progressivement, valider chaque étape et
                      soigner les détails.
                    </p>
                  </div>

                  <div className="border-t border-white/[0.07] pt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#566477]">
                      Objectif
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#C6D0DD]">
                      Transformer des compétences en réalisations concrètes,
                      professionnelles et réellement utilisables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* FORMATION */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
                <span className="text-[#566477]">02.</span>
                formation
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Des bases{" "}
                <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                  solides.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] lg:justify-self-end">
              Mon parcours académique est orienté développement, conception
              d’applications et programmation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
            {formations.map((formation, index) => (
              <div
                key={formation.title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.025] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] text-[#566477]">
                    EDUCATION.{(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div className="flex size-10 items-center justify-center rounded-xl border border-[#6EA8FE]/15 bg-[#6EA8FE]/[0.05] text-[#6EA8FE]">
                    <GraduationCap className="size-4" />
                  </div>
                </div>

                <h3 className="mt-9 text-3xl font-semibold tracking-[-0.035em] text-white">
                  {formation.title}
                </h3>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9B8AFB]">
                  {formation.subtitle}
                </p>

                <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#8A98AA]">
                  {formation.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* PARCOURS */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B8AFB]">
                <span className="text-[#566477]">03.</span>
                parcours
              </div>
            </div>

            <div>
              <div className="flex size-11 items-center justify-center rounded-xl border border-[#9B8AFB]/15 bg-[#9B8AFB]/[0.05] text-[#9B8AFB]">
                <Wrench className="size-4" />
              </div>

              <h2 className="mt-7 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                L’informatique n’est pas le seul environnement professionnel
                que j’ai connu.
              </h2>

              <div className="mt-7 max-w-3xl space-y-5 text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
                <p>
                  Mon parcours m’a également amené vers des métiers techniques
                  et de terrain. Ces expériences m’ont appris la rigueur,
                  l’autonomie et l’importance de produire un travail fiable.
                </p>

                <p>
                  Aujourd’hui, je veux remettre pleinement le développement au
                  centre de mon parcours professionnel et construire cette
                  expérience à travers mes propres réalisations.
                </p>

                <p>
                  C’est aussi la raison d’être de ce portfolio : montrer ce que
                  je sais réellement construire plutôt que simplement
                  énumérer des technologies sur un CV.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* MÉTHODE */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="mb-12 max-w-4xl lg:mb-16">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              <span className="text-[#566477]">04.</span>
              méthode
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Avancer étape par étape.
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#8A98AA]">
              Je préfère qu’une partie soit réellement propre et validée avant
              de passer à la suivante.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] sm:grid-cols-2 lg:grid-cols-3">
            {method.map((step, index) => (
              <div
                key={step}
                className={`
                  group
                  min-h-[150px]
                  p-6
                  transition-colors
                  duration-300
                  hover:bg-white/[0.025]
                  sm:p-7
                  lg:p-8

                  ${
                    index < method.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }

                  ${index % 2 === 0 ? "sm:border-r" : ""}

                  ${index < 3 ? "lg:border-b" : "lg:border-b-0"}

                  ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}
                `}
              >
                <span className="font-mono text-[9px] text-[#566477]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <div className="mt-8 flex items-center gap-3">
                  <Check className="size-3.5 text-[#6EA8FE]" />

                  <h3 className="text-lg font-medium text-white">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* CE QUE JE CONSTRUIS */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9B8AFB]">
              <span className="text-[#566477]">05.</span>
              aujourd’hui
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ce que je veux{" "}
              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                construire.
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-4 lg:mt-16">
            {products.map((product) => {
              const Icon = product.icon

              return (
                <div
                  key={product.number}
                  className="group grid gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.025] sm:p-8 lg:grid-cols-[0.25fr_1fr] lg:items-center"
                >
                  <div className="flex items-center gap-4 lg:block">
                    <span className="font-mono text-[9px] text-[#566477]">
                      TYPE.{product.number}
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-[#6EA8FE] lg:mt-5">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {product.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-[14px] leading-6 text-[#8A98AA]">
                      {product.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ======================================== */}
        {/* STACK ACTUELLE */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6EA8FE]">
                <span className="text-[#566477]">06.</span>
                environnement
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Ma stack{" "}
                <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                  actuelle.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#8A98AA] lg:justify-self-end">
              Un socle stable pour tous mes projets, puis des modules activés
              uniquement lorsque le besoin le justifie.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
            {/* Socle */}
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-8">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                    core.stack
                  </p>

                  <p className="mt-1 text-sm text-[#C6D0DD]">
                    Toujours actif
                  </p>
                </div>

                <Braces className="size-4 text-[#6EA8FE]" />
              </div>

              <div className="grid grid-cols-2">
                {coreStack.map((technology, index) => (
                  <div
                    key={technology}
                    className={`
                      px-5
                      py-4
                      text-sm
                      text-[#C6D0DD]
                      sm:px-6

                      ${index % 2 === 0 ? "border-r border-white/[0.07]" : ""}

                      ${
                        index < coreStack.length - 2
                          ? "border-b border-white/[0.07]"
                          : ""
                      }
                    `}
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#090E18]/80">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-8">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                    optional.modules
                  </p>

                  <p className="mt-1 text-sm text-[#C6D0DD]">
                    Selon le projet
                  </p>
                </div>

                <Layers3 className="size-4 text-[#9B8AFB]" />
              </div>

              <div className="p-5 sm:p-6">
                <div className="space-y-2">
                  {modules.map((module, index) => (
                    <div
                      key={module}
                      className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3"
                    >
                      <span className="text-sm text-[#C6D0DD]">{module}</span>

                      <span className="font-mono text-[9px] text-[#344257]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/stack"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[10px] text-[#C6D0DD] transition-all duration-300 hover:border-[#6EA8FE]/30 hover:bg-[#6EA8FE]/[0.06] hover:text-white"
            >
              <span className="text-[#6EA8FE]">❯</span>

              Découvrir toute ma stack

              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ======================================== */}
        {/* ÉTAT D'ESPRIT */}
        {/* ======================================== */}

        <section className="mt-24 border-t border-white/[0.07] pt-16 sm:mt-28 lg:mt-32 lg:pt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B8AFB]/10 blur-[130px]" />

            <div className="relative mx-auto max-w-4xl text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
                mindset
              </p>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Je ne cherche pas à donner l’image de quelqu’un qui connaît
                tout.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#8A98AA] sm:text-base">
                Je préfère montrer quelque chose de plus concret : j’ai des
                bases solides, je sais apprendre, je sais construire et je
                veux être capable d’aller jusqu’au bout des projets que
                j’entreprends.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* CTA */}
        {/* ======================================== */}

        <section className="mt-20 flex flex-col items-center justify-center gap-4 border-t border-white/[0.07] pt-12 text-center sm:mt-24 sm:flex-row lg:mt-28 lg:pt-16">
          <Link
            href="/projets"
            className="group inline-flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 text-sm text-[#C6D0DD] transition-all duration-300 hover:border-white/[0.16] hover:text-white"
          >
            Voir mes projets

            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex h-12 items-center gap-3 rounded-xl border border-[#6EA8FE]/40 bg-[#6EA8FE]/10 px-6 text-sm text-white transition-all duration-300 hover:border-[#6EA8FE]/70 hover:bg-[#6EA8FE]/15"
          >
            Démarrer un projet

            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </main>
  )
}