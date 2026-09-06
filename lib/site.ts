export const SITE_NAME = "MerkezNakliyat";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://merkeznakliyat.vercel.app";

export const PHONE_DISPLAY = "0552 887 52 62";
export const PHONE_E164 = "+905528875262";
export const PHONE_TEL_HREF = `tel:${PHONE_E164}`;
export const WHATSAPP_HREF = `https://wa.me/905528875262`;

export const BUSINESS = {
  legalName: "MerkezNakliyat Evden Eve ve Asansörlü Nakliyat Hizmetleri",
  shortName: SITE_NAME,
  slogan: "Türkiye'nin Dört Bir Yanında Güvenilir Evden Eve Nakliyat",
  foundingYear: 2009,
  email: "info@merkeznakliyat.com",
  priceRange: "₺₺",
  addressLocality: "İstanbul",
  addressRegion: "İstanbul",
  addressCountry: "TR",
  areaServed: "TR",
  workingHours: "7/24 Hizmet",
};

export const NAV_SERVICES = [
  { title: "Evden Eve Nakliyat", href: "/evden-eve-nakliyat" },
  { title: "Asansörlü Nakliyat Hizmeti", href: "/asansorlu-nakliyat-hizmeti" },
  { title: "Ofis ve Kurumsal Taşımacılık", href: "/ofis-tasimaciligi" },
  { title: "Parça Eşya Taşıma", href: "/parca-esya-tasima" },
  { title: "Eşya Depolama", href: "/esya-depolama" },
  { title: "Sigortalı Taşımacılık", href: "/sigortali-tasimacilik" },
  { title: "Ambalajlama ve Paketleme", href: "/ambalajlama-hizmeti" },
] as const;

export const PRIMARY_KEYWORDS = [
  "evden eve nakliyat",
  "asansörlü nakliyat",
  "asansörlü nakliyat hizmeti",
  "asansörlü taşımacılık",
  "evden eve güvenilir nakliyat",
  "şehirler arası nakliyat",
  "şehir içi nakliyat",
  "nakliyat firması",
  "güvenilir nakliyat firması",
  "sigortalı taşımacılık",
  "ofis taşımacılığı",
  "parça eşya taşıma",
  "eşya depolama",
  "ambalajlama hizmeti",
] as const;
