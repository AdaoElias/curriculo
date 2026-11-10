import { ImageResponse } from "next/og";

import { profile } from "@/lib/content";
import { siteHost } from "@/lib/site";

export const alt = "Adão Elias — Técnico de TI, Suporte e Infraestrutura";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #0b3a46 0%, #0f4c5c 60%, #0f766e 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "76px",
                height: "76px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                fontSize: "32px",
                letterSpacing: "-1px",
              }}
            >
              AE
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "20px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  opacity: 0.65,
                }}
              >
                Currículo profissional
              </div>
              <div style={{ fontSize: "26px", marginTop: "4px" }}>
                {profile.shortHeadline}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              fontSize: "20px",
            }}
          >
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "104px",
              lineHeight: 1,
              letterSpacing: "-3px",
            }}
          >
            {profile.displayName}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "920px",
              marginTop: "26px",
              fontSize: "32px",
              lineHeight: 1.3,
              opacity: 0.92,
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {profile.actingAreas.slice(0, 4).map((area) => (
              <div
                key={area}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  fontSize: "20px",
                }}
              >
                {area}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "22px", opacity: 0.65 }}>{siteHost}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
