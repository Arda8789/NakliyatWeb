import { ImageResponse } from "next/og";
import { BUSINESS, PHONE_DISPLAY } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_SVG = `<svg width="84" height="84" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="4" y1="4" x2="96" y2="96" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1B2E52"/>
      <stop offset="1" stop-color="#0A1122"/>
    </linearGradient>
    <linearGradient id="diamond" x1="38" y1="14" x2="62" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FDBA74"/>
      <stop offset="1" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#bg)"/>
  <path d="M27,79 L37,35 L50,54 L63,35 L73,79" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linejoin="miter" stroke-linecap="round"/>
  <path d="M38,22 Q50,14 62,22 L60,30 Q59,33 55,35.5 L50,40 L45,35.5 Q41,33 40,30 Z" fill="url(#diamond)"/>
</svg>`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0F1E3C 0%, #0B1730 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={`data:image/svg+xml,${encodeURIComponent(LOGO_SVG)}`}
            width={84}
            height={84}
            alt=""
          />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "white" }}>
            Merkez<span style={{ color: "#FB923C" }}>Nakliyat</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 50,
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            maxWidth: 950,
            lineHeight: 1.15,
          }}
        >
          Evden Eve Nakliyat ve Asansörlü Nakliyat Hizmeti
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 26, color: "#B6C2D9" }}>
          {BUSINESS.slogan}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 46,
            fontSize: 30,
            fontWeight: 700,
            color: "#FB923C",
          }}
        >
          {PHONE_DISPLAY}
        </div>
      </div>
    ),
    { ...size }
  );
}
