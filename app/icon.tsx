import { ImageResponse } from "next/og"

export const size = {
  width: 64,
  height: 64,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070B14",
          border: "2px solid #6EA8FE",
          borderRadius: "14px",
          color: "#FFFFFF",
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "-2px",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  )
}