import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionKicker } from "@/components/SectionKicker";
import { StatsBar } from "@/components/StatsBar";
import { CTASection } from "@/components/CTASection";
import { ShieldIcon, ElevatorIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import { PhotoFrame } from "@/components/PhotoFrame";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | MerkezNakliyat",
  description:
    "MerkezNakliyat, Türkiye genelinde evden eve nakliyat ve asansörlü nakliyat hizmeti sunan sigortalı ve güvenilir bir nakliyat firmasıdır.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  { icon: <ShieldIcon className="h-6 w-6" />, title: "Güvenilirlik", desc: "Her taşımada eşyalarınızın güvenliğini sigortalı hizmet anlayışıyla garanti ederiz." },
  { icon: <ElevatorIcon className="h-6 w-6" />, title: "Modern Ekipman", desc: "Asansörlü nakliyat dahil güncel ekipmanlarımızla hızlı ve hasarsız taşıma sağlarız." },
  { icon: <MapPinIcon className="h-6 w-6" />, title: "Türkiye Geneli Erişim", desc: "81 ilde evden eve ve asansörlü nakliyat hizmeti sunacak organizasyon gücüne sahibiz." },
  { icon: <ClockIcon className="h-6 w-6" />, title: "Zamanında Hizmet", desc: "Randevu saatine bağlılık ve şeffaf iletişimle taşınma sürecinizi planlarız." },
];

export default function HakkimizdaPage() {
  return (
    <div className="container-page pt-8">
      <Breadcrumbs items={[{ name: "Hakkımızda", href: "/hakkimizda" }]} />

      <section className="pt-8 sm:pt-10">
        <SectionKicker>Hakkımızda</SectionKicker>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          <span className="text-gradient">MerkezNakliyat</span> ile Güvenilir
          Taşınma Deneyimi
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          {BUSINESS.legalName}, evden eve nakliyat ve asansörlü nakliyat
          hizmetlerinde uzmanlaşmış, Türkiye genelinde hizmet veren güvenilir bir
          nakliyat firmasıdır. Misyonumuz, taşınma sürecini müşterilerimiz için
          mümkün olduğunca stressiz, hızlı ve güvenli hale getirmektir.
        </p>
      </section>

      <section className="pt-12 sm:pt-16">
        <PhotoFrame
          src="/images/ekibimiz.jpg"
          alt="MerkezNakliyat ekibi sahada eşya taşırken"
          aspect="aspect-[21/9]"
        />
      </section>

      <section className="section-padding">
        <StatsBar />
      </section>

      <section className="section-padding grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Misyonumuz</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Her taşınmanın kendine özgü bir hikayesi olduğuna inanıyoruz. Bu nedenle
            evden eve nakliyat ve asansörlü nakliyat hizmetlerimizi, her müşterimizin
            ihtiyacına göre özelleştirerek sunuyoruz. Amacımız sadece eşya taşımak
            değil, güvenli ve huzurlu bir yeni başlangıca eşlik etmektir.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Vizyonumuz</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Türkiye&apos;nin 81 ilinde evden eve nakliyat ve asansörlü nakliyat
            hizmetinde akla ilk gelen güvenilir marka olmak. Modern ekipman
            yatırımlarımız ve sigortalı taşımacılık anlayışımızla sektörde fark
            yaratmaya devam ediyoruz.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <SectionKicker>Değerlerimiz</SectionKicker>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Bizi MerkezNakliyat Yapan Değerler
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                {v.icon}
              </div>
              <h3 className="mt-5 text-[15px] font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <CTASection />
      </section>
    </div>
  );
}
