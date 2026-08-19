import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indiquez votre nom.")
    .max(80, "Le nom est trop long."),

  email: z
    .string()
    .trim()
    .email("Indique une adresse e-mail valide.")
    .max(254, "L’adresse e-mail est trop longue."),

  projectType: z
    .string()
    .min(1, "Choisissez un type de projet."),

  budget: z.string().optional(),

  message: z
    .string()
    .trim()
    .min(
      20,
      "Donnez-moi quelques informations supplémentaires sur votre projet."
    )
    .max(5000, "Le message est trop long."),

  // Champ anti-spam invisible.
  website: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>