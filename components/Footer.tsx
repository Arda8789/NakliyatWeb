import Link from "next/link";
import { Logo } from "./Logo";
import { InlinePhoneLink } from "./PhoneCTA";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { NAV_SERVICES, PHONE_TEL_HREF, WHATSAPP_HREF, BUSINESS } from "@/lib/site";
import { CITIES } from "@/lib/cities";

const FEATURED_CITY_SLUGS = [
  "istanbul",
  "ankara",
  "izmir",
  "bursa",
  "antalya",
  "adana",
  "konya",
  "gaziantep",
  "kocaeli",
  "mersin",
  "kayseri",
  "samsun",
  "eskisehir",
  "sakarya",
  "tekirdag",
  "mugla",
];

const featuredCities = CITIES.filter((c) => FEATURED_CITY_SLUGS.includes(c.slug));

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-200 bg-slate-50">
      <div className="container-page section-padding grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
            {BUSINESS.legalName}, Türkiye&apos;nin 81 iline evden eve nakliyat ve
            asansörlü nakliyat hizmeti sunan sigortalı ve güvenilir bir nakliyat
            firmasıdır.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600">
            <a href={PHONE_TEL_HREF} className="flex items-center gap-2.5 hover:text-slate-900">
              <PhoneIcon className="h-4.5 w-4.5 text-orange-500" />
              <InlinePhoneLink />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-slate-900"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-500" />
              WhatsApp Hattı
            </a>
            <div className="flex items-center gap-2.5">
              <MapPinIcon className="h-4.5 w-4.5 text-orange-500" />
              Türkiye Geneli 81 İl · 7/24 Hizmet
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Hizmetlerimiz</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-slate-500 hover:text-slate-900">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Öne Çıkan Şehirler</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {featuredCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/evden-eve-nakliyat/${c.slug}`}
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/sehirler"
            className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            Tüm 81 İli Gör →
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Kurumsal</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/hakkimizda" className="text-sm text-slate-500 hover:text-slate-900">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-slate-500 hover:text-slate-900">
                Nakliyat Rehberi
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="text-sm text-slate-500 hover:text-slate-900">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/sehirler" className="text-sm text-slate-500 hover:text-slate-900">
                Hizmet Bölgelerimiz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} MerkezNakliyat — Tüm hakları saklıdır.
          </p>
          <p>Evden Eve Nakliyat · Asansörlü Nakliyat Hizmeti · Türkiye Geneli</p>
        </div>
      </div>
    </footer>
  );
}
