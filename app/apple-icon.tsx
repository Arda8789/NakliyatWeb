import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const LOGO_SVG = `<svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
