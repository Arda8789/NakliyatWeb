import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  { path: "", priority: 1, freq: "weekly" as const },
  { path: "/evden-eve-nakliyat", priority: 0.9, freq: "weekly" as const },
  { path: "/asansorlu-nakliyat-hizmeti", priority: 0.9, freq: "weekly" as const },
  { path: "/ofis-tasimaciligi", priority: 0.7, freq: "monthly" as const },
  { path: "/parca-esya-tasima", priority: 0.7, freq: "monthly" as const },
  { path: "/esya-depolama", priority: 0.7, freq: "monthly" as const },
  { path: "/sigortali-tasimacilik", priority: 0.7, freq: "monthly" as const },
  { path: "/ambalajlama-hizmeti", priority: 0.7, freq: "monthly" as const },
  { path: "/sehirler", priority: 0.8, freq: "weekly" as const },
  { path: "/blog", priority: 0.6, freq: "weekly" as const },
  { path: "/hakkimizda", priority: 0.5, freq: "monthly" as const },
  { path: "/iletisim", priority: 0.6, freq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const cityEntries = CITIES.flatMap((c) => [
    {
      url: `${SITE_URL}/evden-eve-nakliyat/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/asansorlu-nakliyat-hizmeti/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  const blogEntries = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...cityEntries, ...blogEntries];
}
