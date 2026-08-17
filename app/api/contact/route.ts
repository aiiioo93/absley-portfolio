import { Resend } from "resend"

import { ContactEmail } from "@/components/emails/contact-email"
import { contactSchema } from "@/lib/validations/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      console.error("Configuration Resend manquante.")

      return Response.json(
        {
          success: false,
          message: "Le service de contact n’est pas configuré.",
        },
        { status: 500 }
      )
    }

    const body = await request.json()

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: "Les informations envoyées sont invalides.",
        },
        { status: 400 }
      )
    }

    const {
      name,
      email,
      projectType,
      budget,
      message,
      website,
    } = result.data

    /*
     * Honeypot anti-spam.
     * Un vrai utilisateur ne voit jamais ce champ.
     */
    if (website) {
      return Response.json({
        success: true,
      })
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],

      replyTo: email,

      subject: `Nouveau projet — ${projectType} — ${name}`,

      react: ContactEmail({
        name,
        email,
        projectType,
        budget,
        message,
      }),
    })

    if (error) {
      console.error("Erreur Resend :", error)

      return Response.json(
        {
          success: false,
          message: "Impossible d’envoyer le message.",
        },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      id: data?.id,
    })
  } catch (error) {
    console.error("Erreur formulaire de contact :", error)

    return Response.json(
      {
        success: false,
        message: "Une erreur inattendue est survenue.",
      },
      { status: 500 }
    )
  }
}