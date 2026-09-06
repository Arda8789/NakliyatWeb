import type { Metadata } from "next";
import Link from "next/link";
import { CallNowButton, WhatsAppButton } from "@/components/PhoneCTA";
import { SectionKicker } from "@/components/SectionKicker";
import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { CityLinkGrid } from "@/components/CityLinkGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PhotoFrame } from "@/components/PhotoFrame";
import {
  TruckIcon,
  ElevatorIcon,
  BuildingIcon,
  PackageIcon,
  WarehouseIcon,
  ShieldIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
} from "@/components/icons";
import { CITIES } from "@/lib/cities";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Evden Eve Nakliyat ve Asansörlü Nakliyat Hizmeti | Türkiye Geneli",
  description:
    "MerkezNakliyat ile Türkiye'nin 81 ilinde evden eve nakliyat ve asansörlü nakliyat hizmeti. Sigortalı, profesyonel ve uygun fiyatlı taşımacılık için hemen arayın: " +
    PHONE_DISPLAY,
  alternates: { canonical: "/" },
};

const featured = CITIES.filter((c) =>
  ["istanbul", "ankara", "izmir", "bursa", "antalya", "adana", "konya", "gaziantep"].includes(
    c.slug
  )
);

const whyUs = [
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Sigortalı ve Güvenilir Nakliyat",
    desc: "Evden eve nakliyat ve asansörlü nakliyat hizmetlerimizde tüm eşyalarınız taşıma sigortası kapsamındadır.",
  },
  {
    icon: <ElevatorIcon className="h-6 w-6" />,
    title: "Modern Asansörlü Taşımacılık Ekipmanı",
    desc: "Son teknoloji cephe asansörleriyle yüksek katlardan merdivensiz, hızlı ve hasarsız taşıma sağlıyoruz.",
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Türkiye Genelinde 81 İl",
    desc: "İstanbul'dan Van'a, Edirne'den Hakkari'ye kadar tüm illerde evden eve ve asansörlü nakliyat hizmeti veriyoruz.",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "7/24 Hızlı Randevu",
    desc: "Aradığınız anda ücretsiz keşif planlıyor, size en uygun taşınma tarihini birlikte belirliyoruz.",
  },
  {
    icon: <PackageIcon className="h-6 w-6" />,
    title: "Profesyonel Ambalajlama",
    desc: "Kırılacak eşyalarınız özel koruyucu malzemelerle paketlenir, taşınma sırasında hasar riski en aza iner.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "Şeffaf ve Uygun Fiyat Politikası",
    desc: "Gizli ücret yok. Keşif sonrası net fiyat teklifi alır, bütçenize uygun paketten taşınmaya başlarsınız.",
  },
];

const services = [
  {
    href: "/evden-eve-nakliyat",
    icon: <TruckIcon className="h-6 w-6" />,
    title: "Evden Eve Nakliyat",
    desc: "Şehir içi ve şehirlerarası evden eve güvenilir nakliyat hizmeti. Paketleme, taşıma ve yerleştirme tek elden.",
  },
  {
    href: "/asansorlu-nakliyat-hizmeti",
    icon: <ElevatorIcon className="h-6 w-6" />,
    title: "Asansörlü Nakliyat Hizmeti",
    desc: "Yüksek katlı bina ve sitelerde merdivensiz, hızlı ve güvenli asansörlü taşımacılık çözümü.",
  },
  {
    href: "/ofis-tasimaciligi",
    icon: <BuildingIcon className="h-6 w-6" />,
    title: "Ofis ve Kurumsal Taşımacılık",
    desc: "İş sürekliliğini aksatmadan ofis, mağaza ve kurumsal eşyaların planlı ve güvenli taşınması.",
  },
  {
    href: "/parca-esya-tasima",
    icon: <PackageIcon className="h-6 w-6" />,
    title: "Parça Eşya Taşıma",
    desc: "Tek parça mobilyadan birkaç kutu eşyaya kadar, ihtiyacınıza uygun ekonomik parça eşya taşıma.",
  },
  {
    href: "/esya-depolama",
    icon: <WarehouseIcon className="h-6 w-6" />,
    title: "Eşya Depolama",
    desc: "Taşınma sürecinde veya ihtiyaç halinde eşyalarınız için güvenli, kameralı ve kuru depolama alanları.",
  },
  {
    href: "/sigortali-tasimacilik",
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Sigortalı Taşımacılık",
    desc: "Tüm nakliyat hizmetlerimizde eşyalarınız taşıma sigortası ile güvence altına alınır.",
  },
];

const processSteps = [
  { title: "Ücretsiz Keşif", desc: "Telefonla arayın, eşya miktarınıza göre ücretsiz keşif ve net fiyat teklifi alın." },
  { title: "Planlama", desc: "Size en uygun taşınma tarihi ve ekip planlamasını birlikte belirleriz." },
  { title: "Paketleme", desc: "Hassas eşyalarınız profesyonel ambalaj malzemeleriyle güvenle paketlenir." },
  { title: "Taşıma", desc: "Evden eve veya asansörlü nakliyat yöntemiyle eşyalarınız güvenle taşınır." },
  { title: "Teslim ve Kontrol", desc: "Yeni adresinizde eşyalar yerleştirilir, birlikte son kontrol yapılır." },
];

const faq = [
  {
    q: "Evden eve nakliyat fiyatları nasıl belirleniyor?",
    a: "Fiyatlarımız; eşya miktarı, taşınacak mesafe, kat durumu (asansörlü nakliyat ihtiyacı olup olmadığı) ve talep edilen ek hizmetlere (ambalajlama, depolama, sigorta) göre şekillenir. Size özel net fiyat için ücretsiz keşif hizmetimizden faydalanabilirsiniz.",
  },
  {
    q: "Asansörlü nakliyat hizmeti hangi durumlarda tercih edilmeli?",
    a: "Özellikle 3. kat ve üzeri konutlarda, dar merdivenli binalarda, ağır beyaz eşya veya piyano gibi hassas ürünlerin taşınmasında asansörlü nakliyat hem zaman kazandırır hem de hasar riskini ortadan kaldırır.",
  },
  {
    q: "Türkiye'nin her iline hizmet veriyor musunuz?",
    a: "Evet, MerkezNakliyat olarak İstanbul, Ankara, İzmir gibi büyükşehirlerin yanı sıra Türkiye'nin 81 ilinde evden eve nakliyat ve asansörlü nakliyat hizmeti sunuyoruz.",
  },
  {
    q: "Eşyalarım taşıma sırasında sigortalı mı?",
    a: "Evet, tüm evden eve ve asansörlü nakliyat hizmetlerimizde eşyalarınız taşıma sigortası kapsamında güvence altındadır.",
  },
  {
    q: "Taşınma için ne kadar önceden randevu almalıyım?",
    a: `Yoğun dönemler haricinde genellikle 1-2 gün önceden randevu ile hizmet planlayabiliyoruz. Acil taşınma durumlarında ${PHONE_DISPLAY} numarasından bize ulaşarak aynı gün için müsaitlik sorgulayabilirsiniz.`,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="container-page relative pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <SectionKicker>Türkiye&apos;nin Güvenilir Nakliyat Firması</SectionKicker>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              <span className="text-gradient">Evden Eve Nakliyat</span> ve{" "}
              <span className="text-gradient">Asansörlü Nakliyat Hizmeti</span>&apos;nde
              Uzman Çözüm Ortağınız
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              MerkezNakliyat, Türkiye&apos;nin 81 ilinde sigortalı evden eve nakliyat ve
              merdivensiz asansörlü taşımacılık hizmeti sunar. Profesyonel ekibimiz ve
              modern ekipmanlarımızla eşyalarınız güvenle yeni adresine ulaşır.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallNowButton />
              <WhatsAppButton />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-orange-500" /> Sigortalı Taşımacılık
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-orange-500" /> 81 İlde Hizmet
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-orange-500" /> 7/24 Randevu Hattı
              </span>
            </div>
          </div>

          <div className="relative">
            <PhotoFrame
              src="/images/hero.jpg"
              alt="MerkezNakliyat ekibi asansörlü nakliyat ile evden eve taşıma yapıyor"
              aspect="aspect-[4/5] sm:aspect-[5/4]"
              className="shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)]"
            />
            <div className="glass-card absolute -bottom-6 -left-4 flex items-center gap-3 p-4 sm:-left-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <ShieldIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">%100 Sigortalı</div>
                <div className="text-xs text-slate-500">Taşıma güvencesi</div>
              </div>
            </div>
            <div className="glass-card absolute -top-5 -right-3 flex items-center gap-3 p-4 sm:-right-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">81 İl</div>
                <div className="text-xs text-slate-500">Türkiye geneli</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page section-padding">
        <StatsBar />
      </section>

      <section className="container-page section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Hizmetlerimiz</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Nakliyat İhtiyacınıza Özel Çözümler
          </h2>
          <p className="mt-4 text-slate-500">
            Evden eve nakliyat ve asansörlü nakliyat hizmetinden ofis taşımacılığına
            kadar, taşınmanızın her adımını MerkezNakliyat güvencesiyle tamamlıyoruz.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </section>

      <section className="container-page section-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <PhotoFrame
            src="/images/ekibimiz.jpg"
            alt="MerkezNakliyat ekibi eşya taşırken"
            aspect="aspect-[4/3]"
            className="order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <SectionKicker>Neden MerkezNakliyat?</SectionKicker>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Güvenilir Nakliyat Firması Seçmenin Farkı
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUs.slice(0, 4).map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {whyUs.slice(4).map((item) => (
            <div key={item.title} className="glass-card flex gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Nasıl Çalışıyoruz?</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            5 Adımda Sorunsuz Taşınma
          </h2>
        </div>
        <div className="mt-12">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="container-page section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Hizmet Bölgelerimiz</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Türkiye&apos;nin 81 İlinde Evden Eve ve Asansörlü Nakliyat
          </h2>
          <p className="mt-4 text-slate-500">
            MerkezNakliyat, büyükşehirlerden Anadolu&apos;nun en ücra ilçelerine kadar
            Türkiye genelinde evden eve nakliyat ve asansörlü nakliyat hizmeti verir.
          </p>
        </div>
        <div className="mt-10">
          <CityLinkGrid cities={featured} basePath="/evden-eve-nakliyat" />
        </div>
        <div className="mt-8 text-center">
          <Link href="/sehirler" className="btn-outline">
            Tüm 81 İli Görüntüle
          </Link>
        </div>
      </section>

      <section className="container-page section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Sıkça Sorulan Sorular</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Evden Eve ve Asansörlü Nakliyat Hakkında Merak Edilenler
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="container-page section-padding">
        <CTASection />
      </section>
    </>
  );
}
