import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

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

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#566477]">
          © {currentYear}{" "}
          <span className="text-[#8A98AA]">
            Absley.dev
          </span>
        </p>

        <div className="mt-3 flex items-center justify-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon

            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-white/[0.015]
                  text-[#566477]
                  transition-all
                  duration-300

                  hover:border-[#6EA8FE]/30
                  hover:bg-[#6EA8FE]/[0.06]
                  hover:text-white
                "
              >
                <Icon className="size-3.5" />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}