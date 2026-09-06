import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Evden Eve ve Asansörlü Nakliyat`,
    short_name: SITE_NAME,
    description:
      "Türkiye genelinde evden eve nakliyat ve asansörlü nakliyat hizmeti.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F1E3C",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
