import type { ContactFormValues } from "@/lib/validations/contact"

type ContactEmailProps = Omit<ContactFormValues, "website">

export function ContactEmail({
  name,
  email,
  projectType,
  budget,
  message,
}: ContactEmailProps) {
  return (
    <div
      style={{
        margin: "0",
        padding: "32px",
        backgroundColor: "#070B14",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "32px",
          border: "1px solid #1D2635",
          borderRadius: "20px",
          backgroundColor: "#0A101B",
        }}
      >
        <p
          style={{
            margin: "0 0 12px",
            color: "#6EA8FE",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Absley.dev — Nouveau contact
        </p>

        <h1
          style={{
            margin: "0 0 30px",
            fontSize: "28px",
            lineHeight: "1.2",
          }}
        >
          Nouvelle demande de projet
        </h1>

        <div
          style={{
            borderTop: "1px solid #1D2635",
            paddingTop: "24px",
          }}
        >
          <p style={{ color: "#8A98AA", margin: "0 0 6px" }}>Nom</p>

          <p
            style={{
              color: "#ffffff",
              margin: "0 0 22px",
              fontSize: "16px",
            }}
          >
            {name}
          </p>

          <p style={{ color: "#8A98AA", margin: "0 0 6px" }}>E-mail</p>

          <p
            style={{
              color: "#ffffff",
              margin: "0 0 22px",
              fontSize: "16px",
            }}
          >
            {email}
          </p>

          <p style={{ color: "#8A98AA", margin: "0 0 6px" }}>
            Type de projet
          </p>

          <p
            style={{
              color: "#ffffff",
              margin: "0 0 22px",
              fontSize: "16px",
            }}
          >
            {projectType}
          </p>

          <p style={{ color: "#8A98AA", margin: "0 0 6px" }}>
            Budget
          </p>

          <p
            style={{
              color: "#ffffff",
              margin: "0 0 22px",
              fontSize: "16px",
            }}
          >
            {budget || "Non précisé"}
          </p>

          <p style={{ color: "#8A98AA", margin: "0 0 8px" }}>
            Message
          </p>

          <div
            style={{
              padding: "18px",
              borderRadius: "12px",
              backgroundColor: "#0E1624",
              color: "#D7DFEA",
              lineHeight: "1.7",
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </div>
        </div>

        <p
          style={{
            margin: "30px 0 0",
            paddingTop: "20px",
            borderTop: "1px solid #1D2635",
            color: "#566477",
            fontSize: "12px",
          }}
        >
          Message envoyé depuis le formulaire de contact Absley.dev.
        </p>
      </div>
    </div>
  )
}