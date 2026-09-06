import { BUSINESS, PHONE_E164, SITE_NAME, SITE_URL } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/logo.svg`,
    telephone: PHONE_E164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    slogan: BUSINESS.slogan,
    foundingDate: String(BUSINESS.foundingYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "MovingCompany",
      name: SITE_NAME,
      telephone: PHONE_E164,
    },
    areaServed: {
      "@type": opts.areaServed ? "City" : "Country",
      name: opts.areaServed || "Türkiye",
    },
  };
}

