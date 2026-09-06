import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { CallNowButton, WhatsAppButton } from "@/components/PhoneCTA";
import { CTASection } from "@/components/CTASection";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import { PHONE_TEL_HREF, PHONE_DISPLAY, WHATSAPP_HREF, BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | Ücretsiz Keşif için Hemen Arayın",
  description:
    "MerkezNakliyat ile iletişime geçin. Evden eve nakliyat ve asansörlü nakliyat için ücretsiz keşif ve fiyat teklifi alın. Türkiye genelinde 7/24 hizmet: " + PHONE_DISPLAY,
  alternates: { canonical: "/iletisim" },
};

const infoCards = [
  {
    icon: <MapPinIcon className="h-5 w-5" />,
    label: "Hizmet Bölgesi",
    value: "Türkiye Geneli · 81 İl",
  },
  {
    icon: <ClockIcon className="h-5 w-5" />,
    label: "Çalışma Saatleri",
    value: BUSINESS.workingHours,
  },
];

export default function IletisimPage() {
  return (
    <div className="container-page pt-8">
      <Breadcrumbs items={[{ name: "İletişim", href: "/iletisim" }]} />

      <section className="pt-8 sm:pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Bize Ulaşın</SectionKicker>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Ücretsiz Keşif için <span className="text-gradient">Hemen Arayın</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            Türkiye&apos;nin her ilinden evden eve nakliyat ve asansörlü nakliyat
            talepleriniz için 7/24 hizmetinizdeyiz. En hızlı yanıt için doğrudan
            telefon veya WhatsApp üzerinden ulaşın.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="glass-card relative mx-auto max-w-3xl overflow-hidden p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-orange-400/15 blur-[100px]" />
          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <PhoneIcon className="h-7 w-7" />
            </div>
            <a
              href={PHONE_TEL_HREF}
              className="mt-6 block text-4xl font-extrabold tracking-tight text-slate-900 hover:text-orange-600 sm:text-5xl"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-sm text-slate-500">
              Numaraya dokunun, doğrudan aramaya bağlanın
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallNowButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={PHONE_TEL_HREF}
            className="glass-card card-hover flex items-center gap-4 p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Telefon Hattımız</p>
              <p className="text-base font-bold text-slate-900">{PHONE_DISPLAY}</p>
            </div>
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card card-hover flex items-center gap-4 p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">WhatsApp Hattı</p>
              <p className="text-base font-bold text-slate-900">WhatsApp&apos;tan Yazın</p>
            </div>
          </a>
          {infoCards.map((card) => (
            <div key={card.label} className="glass-card flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                {card.icon}
              </span>
              <div>
                <p className="text-xs text-slate-500">{card.label}</p>
                <p className="text-base font-bold text-slate-900">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <CTASection
          title="Şehrinizden Bağımsız, Aynı Güven"
          desc="İstanbul'dan Van'a, Edirne'den Hakkari'ye — Türkiye'nin her ilinde aynı özenle hizmet veriyoruz. Hemen arayın, ücretsiz keşfinizi planlayalım."
        />
      </section>
    </div>
  );
}
