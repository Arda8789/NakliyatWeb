import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const LOGO_SVG = `<svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="4" y1="4" x2="96" y2="96" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#182B4D"/>
      <stop offset="1" stop-color="#0B1730"/>
    </linearGradient>
    <linearGradient id="diamond" x1="37" y1="7" x2="63" y2="33" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FDBA74"/>
      <stop offset="1" stop-color="#F97316"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#bg)"/>
  <polygon points="20,76 20,24 38,24 50,58 62,24 80,24 80,76" fill="#FFFFFF"/>
  <rect x="41" y="11" width="18" height="18" rx="3" fill="url(#diamond)" transform="rotate(45 50 20)"/>
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
