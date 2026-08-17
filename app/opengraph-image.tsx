import { ImageResponse } from "next/og"

export const alt =
  "Absley.dev — Abdoul-aziz Dramé, développeur web & applicatif"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#070B14",
          color: "#FFFFFF",
          padding: "72px",
        }}
      >
        {/* Grille */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.15,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Halo bleu */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: "rgba(110,168,254,0.13)",
            filter: "blur(100px)",
            top: "-180px",
            left: "-120px",
          }}
        />

        {/* Halo violet */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: "rgba(155,138,251,0.12)",
            filter: "blur(110px)",
            bottom: "-200px",
            right: "-120px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Haut */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  border: "1px solid rgba(110,168,254,0.45)",
                  background: "rgba(110,168,254,0.08)",
                  fontSize: "26px",
                  fontWeight: 700,
                }}
              >
                A
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.5px",
                }}
              >
                Absley.dev
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "15px",
                color: "#728096",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </div>
          </div>

          {/* Centre */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "950px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "17px",
                color: "#6EA8FE",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "22px",
              }}
            >
              Abdoul-aziz Dramé
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "70px",
                lineHeight: 1.02,
                letterSpacing: "-4px",
                fontWeight: 700,
              }}
            >
              Développeur web
              <br />
              & applicatif.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "28px",
                fontSize: "22px",
                lineHeight: 1.5,
                color: "#8A98AA",
              }}
            >
              Sites vitrines · Back-office · E-commerce · SaaS · Applications
              mobiles
            </div>
          </div>

          {/* Bas */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "16px",
              color: "#566477",
            }}
          >
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>React Native</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}