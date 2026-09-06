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
    <linearGradient id="mgrad" x1="50" y1="18" x2="50" y2="78" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#E7ECF6"/>
    </linearGradient>
    <linearGradient id="diamond" x1="24" y1="5" x2="46" y2="29" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FDBA74"/>
      <stop offset="1" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#bg)"/>
  <path d="M22,78 L22,20 L40,20 L50,46 L60,34 L78,34 L78,78 Z" fill="url(#mgrad)"/>
  <rect x="25" y="7" width="17" height="17" rx="3.5" fill="url(#diamond)" transform="rotate(45 33.5 15.5)"/>
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
