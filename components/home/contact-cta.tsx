import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export function ContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32">
      {/* Grille technique */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Halos */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6EA8FE]/[0.06] blur-[160px]" />

      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[320px] w-[320px] rounded-full bg-[#9B8AFB]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.08]
            bg-white/[0.018]
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Halo interne */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6EA8FE]/10 blur-[120px]" />

          {/* Décoration */}
          <div className="pointer-events-none absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[#344257] sm:right-8 sm:top-8">
            contact.request
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6EA8FE]">
              <span className="text-[#566477]">06.</span>
              contact
            </div>

            {/* Titre */}
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Une idée en tête ?
              <br />

              <span className="bg-gradient-to-r from-[#6EA8FE] to-[#9B8AFB] bg-clip-text text-transparent">
                Construisons-la.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#8A98AA] sm:text-base sm:leading-8">
              Site web, application ou produit numérique : parlons de votre
              projet, de votre besoin et de la meilleure manière de le
              concrétiser.
            </p>

            {/* CTA */}
            <div className="mt-9 flex justify-center">
              <Link
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#6EA8FE]/40
                  bg-[#6EA8FE]/10
                  px-6
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300

                  hover:border-[#6EA8FE]/70
                  hover:bg-[#6EA8FE]/15
                  hover:shadow-[0_0_40px_rgba(110,168,254,0.15)]

                  sm:h-13
                  sm:px-7
                "
              >
                {/* Effet lumineux */}
                <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

                <span className="relative flex items-center gap-3">
                  <Mail className="size-4 text-[#6EA8FE]" />

                  Démarrer un projet

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Ligne terminal */}
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.015] px-4 py-2 font-mono text-[9px] text-[#566477] sm:text-[10px]">
                <span className="text-[#9B8AFB]">❯</span>

                <span>ready.to.build</span>

                <span className="ml-1 size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}