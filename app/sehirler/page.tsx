import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { CTASection } from "@/components/CTASection";
import { TruckIcon, ElevatorIcon } from "@/components/icons";
import { CITIES, REGIONS } from "@/lib/cities";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmet Bölgelerimiz | Türkiye Geneli 81 İl",
  description:
    "MerkezNakliyat, Türkiye'nin 81 ilinde evden eve nakliyat ve asansörlü nakliyat hizmeti sunar. Şehrinizi seçin, size özel fiyat teklifi için hemen arayın: " + PHONE_DISPLAY,
  alternates: { canonical: "/sehirler" },
};

export default function SehirlerPage() {
  return (
    <div className="container-page pt-8">
      <Breadcrumbs items={[{ name: "Şehirler", href: "/sehirler" }]} />

      <section className="pt-8 sm:pt-10">
        <SectionKicker>Hizmet Bölgelerimiz</SectionKicker>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Türkiye&apos;nin <span className="text-gradient">81 İlinde</span> Evden Eve
          ve Asansörlü Nakliyat
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Marmara&apos;dan Doğu Anadolu&apos;ya, Ege&apos;den Güneydoğu Anadolu&apos;ya
          kadar Türkiye&apos;nin her bölgesinde evden eve nakliyat ve asansörlü
          nakliyat hizmeti veriyoruz. Şehrinizi aşağıdan seçerek size özel içeriğe
          ulaşabilirsiniz.
        </p>
      </section>

      <div className="section-padding space-y-14">
        {REGIONS.map((region) => {
          const cities = CITIES.filter((c) => c.region === region);
          return (
            <section key={region}>
              <h2 className="text-2xl font-extrabold text-white">{region} Bölgesi</h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((c) => (
                  <div
                    key={c.slug}
                    className="glass-card flex items-center justify-between gap-3 p-4"
                  >
                    <span className="text-sm font-semibold text-white">{c.name}</span>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/evden-eve-nakliyat/${c.slug}`}
                        aria-label={`${c.name} Evden Eve Nakliyat`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-blue-300 hover:border-blue-400/40 hover:text-blue-200"
                      >
                        <TruckIcon className="h-4.5 w-4.5" />
                      </Link>
                      <Link
                        href={`/asansorlu-nakliyat-hizmeti/${c.slug}`}
                        aria-label={`${c.name} Asansörlü Nakliyat Hizmeti`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cyan-300 hover:border-cyan-400/40 hover:text-cyan-200"
                      >
                        <ElevatorIcon className="h-4.5 w-4.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="pb-20 sm:pb-28">
        <CTASection />
      </section>
    </div>
  );
}
