import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const LOGO_SVG = `<svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

export default function AppleIcon() {
  return new ImageResponse(
    (
      <img
        src={`data:image/svg+xml,${encodeURIComponent(LOGO_SVG)}`}
        width={180}
        height={180}
        alt=""
      />
    ),
    { ...size }
  );
}
