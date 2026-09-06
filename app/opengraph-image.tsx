import { ImageResponse } from "next/og";
import { BUSINESS, PHONE_DISPLAY } from "@/lib/site";

export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #05070c 0%, #0a1220 35%, #0e2a52 75%, #123a78 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "linear-gradient(135deg, #0A1220 0%, #123A78 55%, #2563EB 100%)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              color: "white",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "white" }}>
            Merkez<span style={{ color: "#38BDF8" }}>Nakliyat</span>
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
        <div style={{ display: "flex", marginTop: 24, fontSize: 26, color: "#94A3B8" }}>
          {BUSINESS.slogan}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 46,
            fontSize: 30,
            fontWeight: 700,
            color: "#38BDF8",
          }}
        >
          {PHONE_DISPLAY}
        </div>
      </div>
    ),
    { ...size }
  );
}
