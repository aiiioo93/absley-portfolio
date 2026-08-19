"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
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

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/absleydev/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdoul-aziz-ba1404180/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/aiiioo93",
    icon: FaGithub,
  },
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
            <span className="text-[#6EA8FE]">/&gt;</span>
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
      border-[#6EA8FE]/30
      bg-[#6EA8FE]/[0.05]
      px-4
      text-white
      shadow-[0_0_0_rgba(110,168,254,0)]
      transition-all
      duration-300

      hover:border-[#6EA8FE]/60
      hover:bg-[#6EA8FE]/10
      hover:shadow-[0_0_25px_rgba(110,168,254,0.14)]
    "
  >
    <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

    <span className="relative flex items-center gap-2.5">
      <span className="size-1.5 rounded-full bg-[#6EA8FE] shadow-[0_0_8px_#6EA8FE] transition-all duration-300 group-hover:bg-[#9B8AFB] group-hover:shadow-[0_0_10px_#9B8AFB]" />

      <span className="font-mono text-[11px] tracking-[0.04em]">
        CONTACT()
      </span>
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
                className: `
                  group
                  relative
                  h-12
                  w-full
                  justify-start
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#6EA8FE]/35
                  bg-[#6EA8FE]/[0.07]
                  px-3
                  text-white
                  shadow-[0_0_28px_rgba(110,168,254,0.08)]
                  transition-all
                  duration-300

                  hover:border-[#6EA8FE]/60
                  hover:bg-[#6EA8FE]/[0.12]
                  hover:shadow-[0_0_34px_rgba(110,168,254,0.16)]
                `,
              })}
            >
              <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#6EA8FE]/25 bg-[#6EA8FE]/10 font-mono text-sm text-[#6EA8FE] shadow-[0_0_14px_rgba(110,168,254,0.10)]">
                ❯
              </span>

              <span className="relative z-10 ml-3 flex min-w-0 flex-1 flex-col items-start text-left leading-none">
                <span className="text-[13px] font-medium text-white">
                  Démarrer un projet
                </span>

                <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#6EA8FE]/70">
                  contact.init()
                </span>
              </span>

              <span className="relative z-10 ml-2 font-mono text-sm text-[#6EA8FE] transition-transform duration-300 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>
        </nav>

        {/* Footer system */}
        <div className="relative border-t border-white/10 px-6 py-3">
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

          <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] pt-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#48576A]">
              social.links
            </span>

            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#566477] transition-all duration-300 hover:border-[#6EA8FE]/35 hover:bg-[#6EA8FE]/[0.07] hover:text-white"
                  >
                    <Icon className="size-3.5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </aside>
    </header>
  )
}