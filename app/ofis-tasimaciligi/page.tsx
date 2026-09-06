import type { Metadata } from "next";
import Link from "next/link";
import { SimpleServicePage } from "@/components/SimpleServicePage";
import { TruckIcon, ElevatorIcon, WarehouseIcon } from "@/components/icons";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ofis Taşımacılığı ve Kurumsal Taşımacılık Hizmeti",
  description:
    "Ofis taşımacılığı ve kurumsal taşımacılıkta MerkezNakliyat: iş sürekliliğinizi aksatmadan, hafta sonu veya mesai dışı planlamayla güvenli ofis taşıma. Hemen " + PHONE_DISPLAY,
  alternates: { canonical: "/ofis-tasimaciligi" },
};

export default function OfisTasimaciligiPage() {
  return (
    <SimpleServicePage
      slug="/ofis-tasimaciligi"
      kicker="Kurumsal Çözümler"
      h1={<>Ofis ve <span className="text-gradient">Kurumsal Taşımacılık</span> Hizmeti</>}
      serviceName="Ofis Taşımacılığı"
      serviceDescription="Kurumsal firmalar için planlı, güvenli ve iş sürekliliğini aksatmayan ofis taşımacılığı hizmeti."
      intro="MerkezNakliyat olarak ofis, mağaza, showroom ve kurumsal işletmelerin taşınma süreçlerini detaylı planlama ile yönetiyoruz. Bilgisayar, sunucu, evrak ve demirbaşlarınızı özenle paketleyip, iş akışınızı en az kesintiyle yeni adresinize taşıyoruz."
      benefits={[
        { title: "Mesai Dışı Taşıma Planlaması", desc: "Hafta sonu veya akşam saatlerinde taşınarak iş kaybını en aza indiriyoruz." },
        { title: "Demirbaş ve Doküman Güvenliği", desc: "Evrak, sunucu ve hassas ekipmanlar özel etiketleme ile kayıpsız taşınır." },
        { title: "Kurulum Desteği", desc: "Yeni ofisinizde masa, dolap ve ekipman yerleşimine destek veriyoruz." },
        { title: "Sigortalı Kurumsal Taşımacılık", desc: "Tüm demirbaş ve ekipmanlarınız taşıma sigortası kapsamındadır." },
      ]}
      contentBlocks={[
        {
          title: "Ofis Taşımacılığında Planlama Neden Önemli?",
          body: (
            <>
              <p>
                Kurumsal taşımacılıkta amaç, iş sürecinizi mümkün olduğunca az
                etkilemektir. Ekibimiz taşınmadan önce ofis keşfi yaparak eşya
                envanteri çıkarır, etiketleme sistemi kurar ve yeni ofiste hangi
                eşyanın nereye yerleşeceğini önceden planlar.
              </p>
              <p>
                Yüksek katlı plaza ve iş merkezlerinde{" "}
                <Link href="/asansorlu-nakliyat-hizmeti" className="text-blue-400 hover:text-blue-300">
                  asansörlü nakliyat hizmetimizle
                </Link>{" "}
                ofis eşyalarınızı hızlı ve güvenli şekilde taşıyoruz.
              </p>
            </>
          ),
        },
        {
          title: "Hangi İşletmelere Hizmet Veriyoruz?",
          body: (
            <p>
              Küçük ölçekli ofislerden çok katlı plaza şirketlerine, mağaza ve
              showroomlardan depo taşımalarına kadar her ölçekte kurumsal
              taşımacılık hizmeti sunuyoruz. Türkiye genelinde şube taşımaları
              için de şehirlerarası kurumsal nakliyat desteği sağlıyoruz.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Ofis taşımacılığı hafta sonu yapılabilir mi?", a: "Evet, iş sürekliliğinizi korumak için hafta sonu veya mesai saatleri dışında ofis taşıma planlaması yapabiliyoruz." },
        { q: "Bilgisayar ve sunucular nasıl taşınıyor?", a: "Elektronik ekipmanlar anti-statik ve darbe emici özel ambalaj malzemeleriyle paketlenerek taşınır." },
        { q: "Ofis taşımacılığı fiyatları neye göre belirlenir?", a: `Ofis büyüklüğü, demirbaş miktarı, kat durumu ve taşınma mesafesine göre fiyat belirlenir. Net teklif için ${PHONE_DISPLAY} numarasını arayabilirsiniz.` },
        { q: "Şehirlerarası şube taşıması yapıyor musunuz?", a: "Evet, Türkiye'nin farklı illerindeki şube ve ofis taşımalarında şehirlerarası kurumsal taşımacılık hizmeti veriyoruz." },
      ]}
      crossLinks={[
        { href: "/evden-eve-nakliyat", icon: <TruckIcon className="h-6 w-6" />, title: "Evden Eve Nakliyat", desc: "Ev taşımalarınız için sigortalı ve profesyonel çözüm." },
        { href: "/asansorlu-nakliyat-hizmeti", icon: <ElevatorIcon className="h-6 w-6" />, title: "Asansörlü Nakliyat Hizmeti", desc: "Yüksek katlı plazalarda merdivensiz taşıma." },
        { href: "/esya-depolama", icon: <WarehouseIcon className="h-6 w-6" />, title: "Eşya Depolama", desc: "Ofis eşyalarınız için güvenli depolama alanları." },
      ]}
    />
  );
}
