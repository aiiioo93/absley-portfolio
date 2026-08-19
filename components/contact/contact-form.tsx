"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact"

const projectTypes = [
  "Site vitrine",
  "Back-office / gestion de données",
  "E-commerce",
  "SaaS",
  "Application mobile",
  "Autre projet",
]

const budgets = [
  "À définir",
  "Moins de 1 000 €",
  "1 000 € – 2 500 €",
  "2 500 € – 5 000 €",
  "5 000 € et plus",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
      website: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setServerError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Impossible d’envoyer le message."
        )
      }

      reset()
      setSubmitted(true)
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Réessaie dans quelques instants."
      )
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.025] px-6 text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
          <CheckCircle2 className="size-6 text-emerald-400" />
        </div>

        <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
          message.sent()
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          Message envoyé.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-[#8A98AA]">
          Merci pour votre demande. J’ai bien reçu les informations concernant votre
          projet, je pourrai revenir vers vous dès que possible.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-[#C6D0DD] transition-colors hover:border-white/20 hover:text-white"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-5 sm:p-7 lg:p-8"
    >
      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mb-8 border-b border-white/[0.07] pb-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#566477]">
          new.project
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
          Parlez-moi de votre projet.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Nom */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#728096]"
          >
            Nom *
          </label>

          <input
            id="name"
            type="text"
            placeholder="Votre Nom complet"
            {...register("name")}
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/[0.08]
              bg-[#090E18]
              px-4
              text-sm
              text-white
              outline-none
              transition-all
              placeholder:text-[#344257]
              focus:border-[#6EA8FE]/50
              focus:ring-2
              focus:ring-[#6EA8FE]/10
            "
          />

          {errors.name && (
            <p className="mt-2 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#728096]"
          >
            E-mail *
          </label>

          <input
            id="email"
            type="email"
            placeholder="votre@email.com"
            {...register("email")}
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/[0.08]
              bg-[#090E18]
              px-4
              text-sm
              text-white
              outline-none
              transition-all
              placeholder:text-[#344257]
              focus:border-[#6EA8FE]/50
              focus:ring-2
              focus:ring-[#6EA8FE]/10
            "
          />

          {errors.email && (
            <p className="mt-2 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Type projet */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#728096]"
          >
            Type de projet *
          </label>

          <select
            id="projectType"
            {...register("projectType")}
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/[0.08]
              bg-[#090E18]
              px-4
              text-sm
              text-[#C6D0DD]
              outline-none
              transition-all
              focus:border-[#6EA8FE]/50
              focus:ring-2
              focus:ring-[#6EA8FE]/10
            "
          >
            <option value="">Sélectionner</option>

            {projectTypes.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>

          {errors.projectType && (
            <p className="mt-2 text-xs text-red-400">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#728096]"
          >
            Budget
          </label>

          <select
            id="budget"
            {...register("budget")}
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/[0.08]
              bg-[#090E18]
              px-4
              text-sm
              text-[#C6D0DD]
              outline-none
              transition-all
              focus:border-[#6EA8FE]/50
              focus:ring-2
              focus:ring-[#6EA8FE]/10
            "
          >
            <option value="">Sélectionner</option>

            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#728096]"
        >
          Votre projet *
        </label>

        <textarea
          id="message"
          rows={7}
          placeholder="Expliquez-moi votre idée, votre besoin ou ce que vous souhaitez mettre en place..."
          {...register("message")}
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/[0.08]
            bg-[#090E18]
            px-4
            py-4
            text-sm
            leading-6
            text-white
            outline-none
            transition-all
            placeholder:text-[#344257]
            focus:border-[#6EA8FE]/50
            focus:ring-2
            focus:ring-[#6EA8FE]/10
          "
        />

        {errors.message && (
          <p className="mt-2 text-xs text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Erreur serveur */}
      {serverError && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.04] p-4">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-400" />

          <p className="text-xs leading-5 text-red-300">
            {serverError}
          </p>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-[#566477]">
          Les informations envoyées servent uniquement à comprendre et traiter
          votre demande.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
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
            text-white
            transition-all
            duration-300
            hover:border-[#6EA8FE]/70
            hover:bg-[#6EA8FE]/15
            hover:shadow-[0_0_35px_rgba(110,168,254,0.15)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

          <span className="relative flex items-center gap-3">
            {isSubmitting ? (
              <>
                Envoi en cours
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <>
                Envoyer ma demande

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  )
}