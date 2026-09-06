import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { ContactForm } from "@/components/ContactForm";
import { CallNowButton, WhatsAppButton, InlinePhoneLink } from "@/components/PhoneCTA";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import { PHONE_TEL_HREF, WHATSAPP_HREF, BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | Ücretsiz Keşif ve Fiyat Teklifi Alın",
  description:
    "MerkezNakliyat ile iletişime geçin. Evden eve nakliyat ve asansörlü nakliyat için ücretsiz keşif ve fiyat teklifi alın. Türkiye genelinde 7/24 hizmet.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="container-page pt-8">
      <Breadcrumbs items={[{ name: "İletişim", href: "/iletisim" }]} />

      <section className="pt-8 sm:pt-10">
        <SectionKicker>Bize Ulaşın</SectionKicker>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Ücretsiz Keşif için <span className="text-gradient">Hemen Arayın</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Türkiye&apos;nin her ilinden evden eve nakliyat ve asansörlü nakliyat
          talepleriniz için 7/24 hizmetinizdeyiz. Formu doldurun veya doğrudan arayın.
        </p>
      </section>

      <section className="section-padding grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="glass-card flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-blue-300">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Telefon Hattımız</p>
              <a href={PHONE_TEL_HREF} className="text-lg font-bold text-white hover:text-blue-300">
                <InlinePhoneLink />
              </a>
            </div>
          </div>
          <div className="glass-card flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-300/20 text-emerald-300">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">WhatsApp Hattı</p>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-emerald-300">
                WhatsApp&apos;tan Yazın
              </a>
            </div>
          </div>
          <div className="glass-card flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-blue-300">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Hizmet Bölgesi</p>
              <p className="text-lg font-bold text-white">Türkiye Geneli · 81 İl</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-blue-300">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Çalışma Saatleri</p>
              <p className="text-lg font-bold text-white">{BUSINESS.workingHours}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <CallNowButton full />
            <WhatsAppButton full />
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
