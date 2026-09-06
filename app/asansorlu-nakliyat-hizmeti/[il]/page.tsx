import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { CallNowButton, WhatsAppButton } from "@/components/PhoneCTA";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { CityLinkGrid } from "@/components/CityLinkGrid";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { CheckIcon, TruckIcon } from "@/components/icons";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getCityServiceContent } from "@/lib/city-content";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return CITIES.map((c) => ({ il: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ il: string }>;
}): Promise<Metadata> {
  const { il } = await params;
  const city = getCityBySlug(il);
  if (!city) return {};
  const content = getCityServiceContent(city, "asansorlu");
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `/asansorlu-nakliyat-hizmeti/${city.slug}` },
  };
}

export default async function CityAsansorluPage({
  params,
}: {
  params: Promise<{ il: string }>;
}) {
  const { il } = await params;
  const city = getCityBySlug(il);
  if (!city) notFound();
  const content = getCityServiceContent(city, "asansorlu");

  return (
    <div className="container-page pt-8">
      <JsonLd
        data={serviceSchema({
          name: content.h1,
          description: content.metaDescription,
          url: `${SITE_URL}/asansorlu-nakliyat-hizmeti/${city.slug}`,
          areaServed: city.name,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Asansörlü Nakliyat Hizmeti", href: "/asansorlu-nakliyat-hizmeti" },
          { name: city.name, href: `/asansorlu-nakliyat-hizmeti/${city.slug}` },
        ]}
      />

      <section className="pt-8 sm:pt-10">
        <SectionKicker>{city.region} Bölgesi · Plaka {city.plate}</SectionKicker>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          <span className="text-gradient">{city.name}</span> Asansörlü Nakliyat Hizmeti
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          {content.intro[0]}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CallNowButton />
          <WhatsAppButton />
        </div>
      </section>

      <section className="section-padding grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm leading-relaxed text-slate-500">{content.intro[1]}</p>
          <h2 className="mt-8 text-2xl font-bold text-slate-900">
            {city.name} Asansörlü Nakliyat Sürecimiz
          </h2>
          <div className="mt-6">
            <ProcessSteps steps={content.process} />
          </div>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {city.name}&apos;da Neden Asansörlü Nakliyat?
          </h2>
          <ul className="mt-4 space-y-3">
            {content.benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                  <p className="text-xs text-slate-500">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={`/evden-eve-nakliyat/${city.slug}`}
            className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 hover:border-slate-300 hover:text-slate-900"
          >
            <TruckIcon className="h-5 w-5 shrink-0 text-orange-600" />
            {city.name} Evden Eve Nakliyat hizmetini inceleyin
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Yakın Bölgeler</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {city.region} Bölgesinde Hizmet Verdiğimiz Diğer İller
          </h2>
        </div>
        <div className="mt-10">
          <CityLinkGrid cities={content.relatedCities} basePath="/asansorlu-nakliyat-hizmeti" />
        </div>
        <div className="mt-8 text-center">
          <Link href="/sehirler" className="btn-outline">
            Tüm 81 İli Görüntüle
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Sıkça Sorulan Sorular</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {city.name} Asansörlü Nakliyat Hakkında Sorular
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={content.faq} />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <CTASection
          title={`${city.name}'da Asansörlü Nakliyat için Hazır mısınız?`}
          desc={`${city.name} il merkezi ve tüm ilçelerinde ücretsiz keşif için hemen arayın.`}
        />
      </section>
    </div>
  );
}
