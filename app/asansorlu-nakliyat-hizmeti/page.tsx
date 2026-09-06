import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { CallNowButton, WhatsAppButton, InlinePhoneLink } from "@/components/PhoneCTA";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { CityLinkGrid } from "@/components/CityLinkGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoFrame } from "@/components/PhotoFrame";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { CheckIcon, TruckIcon, PackageIcon, ShieldIcon } from "@/components/icons";
import { benefitPoolAsansorlu, processSteps } from "@/lib/city-content";
import { CITIES } from "@/lib/cities";
import { PHONE_DISPLAY, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Asansörlü Nakliyat Hizmeti | Merdivensiz Asansörlü Taşımacılık",
  description:
    "Asansörlü nakliyat hizmetinde MerkezNakliyat: merdivensiz, hızlı ve sigortalı asansörlü taşımacılık. Türkiye genelinde yüksek katlı bina ve sitelerde profesyonel çözüm. Hemen " +
    PHONE_DISPLAY + " numaralı hattı arayın.",
  alternates: { canonical: "/asansorlu-nakliyat-hizmeti" },
};

const featuredCities = CITIES.filter((c) =>
  ["istanbul", "ankara", "izmir", "bursa", "antalya", "adana", "konya", "gaziantep", "kocaeli", "mersin", "kayseri", "samsun"].includes(c.slug)
);

const relatedServices = [
  { href: "/evden-eve-nakliyat", icon: <TruckIcon className="h-6 w-6" />, title: "Evden Eve Nakliyat", desc: "Şehir içi ve şehirlerarası eksiksiz evden eve nakliyat çözümü." },
  { href: "/ambalajlama-hizmeti", icon: <PackageIcon className="h-6 w-6" />, title: "Ambalajlama ve Paketleme", desc: "Hassas eşyalarınız asansörle taşınmadan önce profesyonelce paketlenir." },
  { href: "/sigortali-tasimacilik", icon: <ShieldIcon className="h-6 w-6" />, title: "Sigortalı Taşımacılık", desc: "Asansörlü nakliyat sürecinde eşyalarınız sigorta güvencesindedir." },
];

const faq = [
  { q: "Asansörlü nakliyat hizmeti nedir?", a: "Asansörlü nakliyat, bina dışına kurulan özel cephe asansörleri ile eşyaların merdiven kullanılmadan doğrudan pencere veya balkondan indirilip bindirilmesini sağlayan taşımacılık yöntemidir." },
  { q: "Asansörlü nakliyat hangi katlar için uygundur?", a: "Genellikle 2. kat ve üzerindeki tüm konutlarda, özellikle asansörsüz binalarda ve dar merdivenli apartmanlarda asansörlü nakliyat hizmeti büyük kolaylık sağlar." },
  { q: "Asansörlü nakliyat fiyatları nasıl hesaplanır?", a: `Fiyat; taşınacak kat sayısı, asansörün kurulum süresi, eşya miktarı ve bina konumuna göre belirlenir. Net teklif için ${PHONE_DISPLAY} numarasından ücretsiz keşif talep edebilirsiniz.` },
  { q: "Asansörlü taşımacılık sırasında bina dışına zarar verir mi?", a: "Deneyimli operatör ekibimiz ve koruma ekipmanlarımızla bina cephesine, balkona ve korkuluklara zarar vermeden güvenli bir asansörlü nakliyat süreci sağlıyoruz." },
  { q: "Asansörlü nakliyat için evde bulunmam gerekir mi?", a: "Taşınma sürecinin sağlıklı ilerlemesi ve eşyaların doğru şekilde teslim alınması için taşınma günü evde bulunmanızı öneririz." },
];

export default function AsansorluNakliyatPage() {
  return (
    <div className="container-page pt-8">
      <JsonLd
        data={serviceSchema({
          name: "Asansörlü Nakliyat Hizmeti",
          description: "Türkiye genelinde merdivensiz, hızlı ve sigortalı asansörlü nakliyat ve taşımacılık hizmeti.",
          url: `${SITE_URL}/asansorlu-nakliyat-hizmeti`,
        })}
      />
      <Breadcrumbs items={[{ name: "Asansörlü Nakliyat Hizmeti", href: "/asansorlu-nakliyat-hizmeti" }]} />

      <section className="pt-8 sm:pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <SectionKicker>Asansörlü Taşımacılık</SectionKicker>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              <span className="text-gradient">Asansörlü Nakliyat Hizmeti</span> ile
              Merdivensiz ve Güvenli Taşınma
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
              MerkezNakliyat&apos;ın asansörlü nakliyat hizmeti, yüksek katlı bina,
              site ve rezidanslarda eşyalarınızı merdiven kullanmadan, bina cephesine
              kurulan özel yük asansörleriyle güvenle taşır. Asansörlü taşımacılık
              sayesinde hem zamandan kazanır hem de eşyalarınızı ve binanızı olası
              hasarlardan korursunuz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallNowButton />
              <WhatsAppButton />
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Asansörlü Nakliyat Avantajları
            </h2>
            <ul className="mt-4 space-y-3">
              {benefitPoolAsansorlu.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                    <p className="text-xs text-slate-500">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-12 sm:pt-16">
        <PhotoFrame
          src="/images/asansorlu-nakliyat.jpg"
          alt="MerkezNakliyat asansörlü nakliyat ile yüksek kattan eşya indiriyor"
          aspect="aspect-[21/9]"
        />
      </section>

      <section className="section-padding grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Asansörlü Nakliyat Neden Tercih Edilmeli?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Klasik merdivenle taşımacılıkta hem zaman kaybı hem de eşya ve bina hasarı
            riski yüksektir. Asansörlü nakliyat hizmetimizle, ağır beyaz eşyalar,
            koltuk takımları, piyano ve kasa gibi hacimli ürünler bile pencereden
            güvenle indirilip bindirilir. Bu yöntem özellikle{" "}
            <Link href="/evden-eve-nakliyat" className="font-semibold text-orange-600 hover:text-orange-700">
              evden eve nakliyat
            </Link>{" "}
            sürecinizi hızlandırarak taşınma gününü çok daha konforlu hale getirir.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Asansörlü Nakliyat Hizmeti Nasıl Uygulanır?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Ekibimiz binanızın konumuna ve kat yüksekliğine uygun cephe asansörünü
            kurar, güvenlik önlemlerini alır ve deneyimli operatörler eşliğinde
            eşyalarınızı pencere veya balkondan indirip yeni katınıza aynı güvenlikle
            çıkarır. Tüm süreç boyunca eşyalarınız sigorta kapsamındadır.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Detaylı bilgi ve ücretsiz keşif için <InlinePhoneLink /> numaralı hattımızı
            arayabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Sürecimiz</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Asansörlü Nakliyat Sürecimiz
          </h2>
        </div>
        <div className="mt-12">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Hizmet Bölgelerimiz</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Şehrinizde Asansörlü Nakliyat Hizmeti
          </h2>
        </div>
        <div className="mt-10">
          <CityLinkGrid cities={featuredCities} basePath="/asansorlu-nakliyat-hizmeti" />
        </div>
        <div className="mt-8 text-center">
          <Link href="/sehirler" className="btn-outline">
            Tüm 81 İli Görüntüle
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>İlgili Hizmetler</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Asansörlü Nakliyatı Tamamlayan Hizmetlerimiz
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {relatedServices.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Sıkça Sorulan Sorular</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Asansörlü Nakliyat Hakkında Merak Edilenler
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
