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
import { CheckIcon, ElevatorIcon, BuildingIcon, WarehouseIcon } from "@/components/icons";
import { benefitPoolEvdenEve, processSteps } from "@/lib/city-content";
import { CITIES } from "@/lib/cities";
import { PHONE_DISPLAY, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Evden Eve Nakliyat | Sigortalı ve Güvenilir Nakliyat Firması",
  description:
    "Evden eve nakliyat hizmetinde MerkezNakliyat farkı: sigortalı taşımacılık, profesyonel ambalajlama, Türkiye genelinde şehir içi ve şehirlerarası evden eve güvenilir nakliyat. Hemen " +
    PHONE_DISPLAY + " numaralı hattı arayın.",
  alternates: { canonical: "/evden-eve-nakliyat" },
};

const featuredCities = CITIES.filter((c) =>
  ["istanbul", "ankara", "izmir", "bursa", "antalya", "adana", "konya", "gaziantep", "kocaeli", "mersin", "kayseri", "samsun"].includes(c.slug)
);

const relatedServices = [
  { href: "/asansorlu-nakliyat-hizmeti", icon: <ElevatorIcon className="h-6 w-6" />, title: "Asansörlü Nakliyat Hizmeti", desc: "Yüksek katlarda merdivensiz, hızlı ve güvenli asansörlü taşımacılık." },
  { href: "/ofis-tasimaciligi", icon: <BuildingIcon className="h-6 w-6" />, title: "Ofis ve Kurumsal Taşımacılık", desc: "İş sürekliliğinizi aksatmadan ofis taşıma çözümleri." },
  { href: "/esya-depolama", icon: <WarehouseIcon className="h-6 w-6" />, title: "Eşya Depolama", desc: "Taşınma sürecinde güvenli ve kameralı depolama alanları." },
];

const faq = [
  { q: "Evden eve nakliyat hizmeti tam olarak neleri kapsar?", a: "Evden eve nakliyat hizmetimiz; ücretsiz keşif, eşyaların sökümü, profesyonel ambalajlama, araca yükleme, güvenli taşıma, yeni adreste indirme ve talep edilmesi halinde eşyaların yerleştirilmesini kapsar." },
  { q: "Evden eve nakliyat fiyatları neye göre değişir?", a: `Fiyatlar; ev büyüklüğü ve eşya miktarı, taşınacak mesafe (şehir içi veya şehirlerarası), kat durumu ve asansörlü nakliyat ihtiyacı, ek hizmetler (ambalajlama, depolama, sigorta) gibi faktörlere göre belirlenir. Net fiyat için ${PHONE_DISPLAY} numarasından ücretsiz keşif talep edebilirsiniz.` },
  { q: "Şehirlerarası evden eve nakliyat ne kadar sürer?", a: "Şehirlerarası evden eve nakliyat süresi mesafeye göre değişmekle birlikte, genellikle 1-3 gün içinde eşyalarınız yeni adresinize güvenle teslim edilir." },
  { q: "Eşyalarım için ek sigorta yaptırmam gerekir mi?", a: "Hayır, MerkezNakliyat ile yapılan tüm evden eve nakliyat hizmetlerinde eşyalarınız standart taşıma sigortası kapsamında zaten güvence altındadır." },
  { q: "Hangi şehirlerde evden eve nakliyat hizmeti veriyorsunuz?", a: "Türkiye'nin 81 ilinde il merkezi ve ilçeleriyle birlikte evden eve nakliyat hizmeti sunuyoruz. Hizmet verdiğimiz şehirlerin tam listesi için şehirler sayfamızı inceleyebilirsiniz." },
];

export default function EvdenEveNakliyatPage() {
  return (
    <div className="container-page pt-8">
      <JsonLd
        data={serviceSchema({
          name: "Evden Eve Nakliyat",
          description: "Türkiye genelinde sigortalı ve profesyonel evden eve nakliyat hizmeti.",
          url: `${SITE_URL}/evden-eve-nakliyat`,
        })}
      />
      <Breadcrumbs items={[{ name: "Evden Eve Nakliyat", href: "/evden-eve-nakliyat" }]} />

      <section className="pt-8 sm:pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <SectionKicker>Evden Eve Güvenilir Nakliyat</SectionKicker>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              <span className="text-gradient">Evden Eve Nakliyat</span> Hizmetinde
              Türkiye&apos;nin Güvendiği Adres
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
              MerkezNakliyat olarak, evden eve nakliyat sürecinin her aşamasında
              yanınızdayız. Eşyalarınızın sökümünden profesyonel ambalajlanmasına,
              güvenli taşınmasından yeni evinizde yerleştirilmesine kadar tüm süreci
              sigortalı ve deneyimli ekibimizle üstleniyoruz. İster aynı şehir içinde
              ister şehirlerarası taşınıyor olun, evden eve güvenilir nakliyat
              hizmetimizle taşınma stresini ortadan kaldırıyoruz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallNowButton />
              <WhatsAppButton />
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Evden Eve Nakliyat Avantajları
            </h2>
            <ul className="mt-4 space-y-3">
              {benefitPoolEvdenEve.map((b) => (
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
          src="/images/evden-eve-nakliyat.jpg"
          alt="MerkezNakliyat ekibi evden eve nakliyat sürecinde eşya taşıyor"
          aspect="aspect-[21/9]"
        />
      </section>

      <section className="section-padding grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Evden Eve Nakliyat Nedir?</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Evden eve nakliyat, ev eşyalarınızın mevcut adresinizden yeni adresinize
            paketleme, taşıma, indirme-bindirme ve yerleştirme süreçleri dahil olmak
            üzere uçtan uca profesyonel bir ekip tarafından taşınmasıdır. MerkezNakliyat
            olarak evden eve nakliyat hizmetimizde, gardıroptan mutfak eşyasına, koltuk
            takımından beyaz eşyaya kadar tüm eşyalarınızı özel ambalaj malzemeleriyle
            paketleyip sigortalı araçlarımızla taşıyoruz.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Yüksek katlı bina ve sitelerde evden eve nakliyat sürecini{" "}
            <Link href="/asansorlu-nakliyat-hizmeti" className="font-semibold text-orange-600 hover:text-orange-700">
              asansörlü nakliyat hizmetimiz
            </Link>{" "}
            ile birleştirerek merdiven kullanmadan, hızlı ve hasarsız bir taşınma
            deneyimi sunuyoruz.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Evden Eve Nakliyat Fiyatlarını Etkileyen Faktörler
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Evden eve nakliyat fiyatları; taşınacak eşya miktarı ve ev metrekaresi,
            şehir içi veya şehirlerarası olması, bulunduğunuz katın durumu (asansörlü
            nakliyat ihtiyacı), ambalajlama ve depolama gibi ek hizmet talepleri
            gibi değişkenlere göre belirlenir. Şeffaf fiyat politikamız sayesinde
            keşif sonrası size sunulan teklifte gizli ücret bulunmaz.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Bütçenize en uygun evden eve nakliyat paketini oluşturmak için hemen{" "}
            <InlinePhoneLink /> numaralı hattımızdan bize ulaşabilir, ücretsiz keşif
            talebinde bulunabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Sürecimiz</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Evden Eve Nakliyat Sürecimiz Nasıl İşler?
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
            Şehrinizde Evden Eve Nakliyat Hizmeti
          </h2>
          <p className="mt-4 text-slate-500">
            Aşağıda öne çıkan şehirlerimizi görebilirsiniz. Türkiye&apos;nin tüm
            illerinde evden eve nakliyat hizmeti veriyoruz.
          </p>
        </div>
        <div className="mt-10">
          <CityLinkGrid cities={featuredCities} basePath="/evden-eve-nakliyat" />
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
            Taşınmanızı Tamamlayan Diğer Hizmetlerimiz
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
            Evden Eve Nakliyat Hakkında Merak Edilenler
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
