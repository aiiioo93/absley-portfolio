"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { buttonVariants } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Projets", href: "/projets" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/a-propos" },
  { name: "Stack", href: "/stack" },
]

export function SiteHeader() {
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [booted, setBooted] = useState(false)

  function openMenu() {
    setMobileMenuOpen(true)
    setBooted(false)

    window.setTimeout(() => {
      setBooted(true)
    }, 350)
  }

  function closeMenu() {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu()
      }
    }

    document.addEventListener("keydown", handleEscape)

    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative z-50 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#070B14]/80 px-5 backdrop-blur-xl">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight text-white"
          >
            <span className="text-[#6EA8FE]">&lt;</span>
            absley.dev
            <span className="text-[#6EA8FE]"> /&gt;</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-white"
                      : "text-[#8A98AA] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

<div className="hidden lg:block">
  <Link
    href="/contact"
    className="
      group
      relative
      inline-flex
      h-10
      items-center
      justify-center
      overflow-hidden
      rounded-xl
      border
      border-[#6EA8FE]/25
      bg-[#6EA8FE]/[0.04]
      px-4
      text-white
      transition-all
      duration-300

      hover:border-[#6EA8FE]/50
      hover:bg-[#6EA8FE]/10
    "
  >
    <span className="font-mono text-[12px]">
      CONTACT()
    </span>
  </Link>
</div>

          <button
            type="button"
            onClick={openMenu}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
            className="group flex size-10 items-center justify-center rounded-lg border border-white/10 text-white transition-all hover:border-[#6EA8FE]/40 hover:bg-[#6EA8FE]/10 lg:hidden"
          >
            <Menu className="size-5 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-[#02040A]/80 backdrop-blur-md transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Developer panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[88%] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-[#070C16] shadow-[0_0_80px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#6EA8FE]/10 blur-[100px]" />

        <div className="pointer-events-none absolute bottom-10 left-0 size-56 rounded-full bg-[#9B8AFB]/5 blur-[90px]" />

        {/* Scan animation */}
        {mobileMenuOpen && (
          <div className="developer-scan pointer-events-none absolute inset-x-0 z-50 h-px bg-gradient-to-r from-transparent via-[#6EA8FE] to-transparent shadow-[0_0_16px_#6EA8FE]" />
        )}

        {/* Header */}
        <div className="relative flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#FF605C]" />
              <span className="size-2.5 rounded-full bg-[#FFBD44]" />
              <span className="size-2.5 rounded-full bg-[#00CA4E]" />
            </div>

            <div className="h-4 w-px bg-white/10" />

            <span className="font-mono text-[11px] text-[#8A98AA]">
              navigation.tsx
            </span>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fermer le menu"
            className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-[#8A98AA] transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Boot console */}
        <div className="relative border-b border-white/10 bg-black/10 px-6 py-5 font-mono text-[11px] leading-5">
          <p className="text-[#8A98AA]">
            <span className="mr-2 text-[#6EA8FE]">❯</span>
            absley.navigation.init()
          </p>

          <p
            className={`transition-all delay-100 duration-500 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-0"
            }`}
          >
            <span className="mr-2 text-[#6EA8FE]">+</span>

            <span className="text-[#8A98AA]">
              mounting application routes
            </span>
          </p>

          <p
            className={`transition-all duration-500 ${
              booted
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-0"
            }`}
          >
            <span className="mr-2 text-emerald-400">✓</span>

            <span className="text-emerald-400/80">
              5 routes loaded
            </span>

            <span className="ml-2 animate-pulse text-[#6EA8FE]">
              _
            </span>
          </p>
        </div>

        {/* Current route */}
        <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-[#566477]">current.route</span>

          <span className="text-[#6EA8FE]">
            {pathname === "/" ? "/" : pathname}
          </span>
        </div>

        {/* Routes */}
        <nav className="relative flex flex-1 flex-col px-4 py-5">
          <div className="mb-2 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#566477]">
            routes
          </div>

          {navigation.map((item, index) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${180 + index * 55}ms`
                    : "0ms",
                }}
                className={`group relative flex items-center gap-4 overflow-hidden rounded-xl px-3 py-4 transition-all duration-500 ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                } ${
                  active
                    ? "bg-[#6EA8FE]/8"
                    : "hover:bg-white/[0.04]"
                }`}
              >
                {active && (
                  <span className="absolute inset-y-3 left-0 w-px bg-[#6EA8FE] shadow-[0_0_12px_#6EA8FE]" />
                )}

                <span
                  className={`font-mono text-[11px] ${
                    active
                      ? "text-[#6EA8FE]"
                      : "text-[#48576A]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-[15px] transition-colors ${
                    active
                      ? "text-white"
                      : "text-[#A3AFBF] group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {active ? (
                  <span className="ml-auto flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-[#6EA8FE]">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#6EA8FE]" />
                    active
                  </span>
                ) : (
                  <span className="ml-auto translate-x-2 font-mono text-xs text-[#6EA8FE] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    -&gt;
                  </span>
                )}
              </Link>
            )
          })}

          <div
            className={`mt-5 border-t border-white/10 pt-5 transition-all delay-500 duration-500 ${
              booted
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              onClick={closeMenu}
              className={buttonVariants({
                className: "group relative w-full overflow-hidden",
              })}
            >
              <span className="relative z-10">
                Démarrer un projet
              </span>

              <span className="relative z-10 ml-2 font-mono transition-transform duration-300 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>
        </nav>

        {/* Footer system */}
        <div className="relative border-t border-white/10 px-6 py-4">
          <div className="flex items-center justify-between font-mono text-[10px]">
            <div className="flex items-center gap-2 text-[#728096]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>

              SYSTEM.READY
            </div>

            <span className="text-[#48576A]">
              ESC / CLOSE
            </span>
          </div>
        </div>
      </aside>
    </header>
  )
}