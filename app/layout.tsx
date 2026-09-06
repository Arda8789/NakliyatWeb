import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar, DesktopFloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME, BUSINESS } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Evden Eve Nakliyat ve Asansörlü Nakliyat Hizmeti`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "MerkezNakliyat, Türkiye'nin 81 iline sigortalı evden eve nakliyat ve asansörlü nakliyat hizmeti sunar. Güvenilir, uygun fiyatlı ve profesyonel taşımacılık için hemen arayın.",
  keywords: [
    "evden eve nakliyat",
    "asansörlü nakliyat",
    "asansörlü nakliyat hizmeti",
    "asansörlü taşımacılık",
    "evden eve güvenilir nakliyat",
    "nakliyat firması",
    "şehirlerarası nakliyat",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Evden Eve Nakliyat ve Asansörlü Nakliyat Hizmeti`,
    description: BUSINESS.slogan,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Evden Eve Nakliyat ve Asansörlü Nakliyat Hizmeti`,
    description: BUSINESS.slogan,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1 pb-20 sm:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
        <DesktopFloatingActions />
      </body>
    </html>
  );
}
