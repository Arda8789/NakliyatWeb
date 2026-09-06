import { Breadcrumbs } from "./Breadcrumbs";
import { SectionKicker } from "./SectionKicker";
import { CallNowButton, WhatsAppButton, InlinePhoneLink } from "./PhoneCTA";
import { FAQAccordion } from "./FAQAccordion";
import { CTASection } from "./CTASection";
import { ServiceCard } from "./ServiceCard";
import { JsonLd } from "./JsonLd";
import { serviceSchema } from "@/lib/schema";
import { CheckIcon } from "./icons";
import { SITE_URL } from "@/lib/site";

export interface SimpleServicePageProps {
  slug: string;
  kicker: string;
  h1: React.ReactNode;
  intro: string;
  serviceName: string;
  serviceDescription: string;
  benefits: { title: string; desc: string }[];
  contentBlocks: { title: string; body: React.ReactNode }[];
  faq: { q: string; a: string }[];
  crossLinks: { href: string; icon: React.ReactNode; title: string; desc: string }[];
}

export function SimpleServicePage({
  slug,
  kicker,
  h1,
  intro,
  serviceName,
  serviceDescription,
  benefits,
  contentBlocks,
  faq,
  crossLinks,
}: SimpleServicePageProps) {
  return (
    <div className="container-page pt-8">
      <JsonLd
        data={serviceSchema({
          name: serviceName,
          description: serviceDescription,
          url: `${SITE_URL}${slug}`,
        })}
      />
      <Breadcrumbs items={[{ name: serviceName, href: slug }]} />

      <section className="pt-8 sm:pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <SectionKicker>{kicker}</SectionKicker>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
              {intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallNowButton />
              <WhatsAppButton />
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Hizmet Avantajları
            </h2>
            <ul className="mt-4 space-y-3">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <p className="text-xs text-slate-400">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding grid gap-10 lg:grid-cols-2">
        {contentBlocks.map((block) => (
          <div key={block.title}>
            <h2 className="text-2xl font-bold text-white">{block.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-400">
              {block.body}
            </div>
          </div>
        ))}
      </section>

      <section className="section-padding">
        <div className="glass-card p-6 sm:p-8 text-center">
          <p className="text-sm text-slate-400">
            Detaylı bilgi ve ücretsiz keşif için hemen arayın:{" "}
            <InlinePhoneLink />
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>İlgili Hizmetler</SectionKicker>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Bununla Birlikte İşinize Yarayabilir
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {crossLinks.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Sıkça Sorulan Sorular</SectionKicker>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Merak Edilenler
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <CTASection />
      </section>
    </div>
  );
}
