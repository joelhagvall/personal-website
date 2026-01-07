import { ImageResponse } from "next/og";
import { PERSON, SITE } from "@/data/site";

export const dynamic = "force-static";

export const alt = PERSON.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            {PERSON.name}
          </h1>

          {/* Job title */}
          <p
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.6)",
              margin: "16px 0 0 0",
            }}
          >
            {PERSON.jobTitle}
          </p>

          {/* Location */}
          <p
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.4)",
              margin: "12px 0 0 0",
            }}
          >
            {PERSON.location.city}, {PERSON.location.country}
          </p>

          {/* URL */}
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.3)",
              margin: "40px 0 0 0",
            }}
          >
            {SITE.url.replace("https://", "")}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
