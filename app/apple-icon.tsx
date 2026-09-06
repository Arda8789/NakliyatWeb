import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const LOGO_SVG = `<svg width="180" height="180" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="8" y1="6" x2="94" y2="96" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#25406E"/>
      <stop offset="0.55" stop-color="#122240"/>
      <stop offset="1" stop-color="#060B16"/>
    </linearGradient>
    <linearGradient id="mgrad" x1="27" y1="35" x2="73" y2="79" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#DEE6F2"/>
    </linearGradient>
    <linearGradient id="diamond" x1="38" y1="14" x2="62" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FED7AA"/>
      <stop offset="1" stop-color="#DC5A0E"/>
    </linearGradient>
  </defs>
  <rect x="3" y="3" width="94" height="94" rx="21" fill="url(#bg)"/>
  <path d="M27,79 L37,35 L50,54 L63,35 L73,79" fill="none" stroke="url(#mgrad)" stroke-width="10" stroke-linejoin="miter" stroke-linecap="round"/>
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
