import type { Metadata } from "next";
import Link from "next/link";
import { SimpleServicePage } from "@/components/SimpleServicePage";
import { TruckIcon, ElevatorIcon, ShieldIcon } from "@/components/icons";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eşya Depolama Hizmeti | Güvenli ve Kameralı Depolama",
  description:
    "Taşınma sürecinde veya ihtiyaç halinde eşyalarınız için güvenli, kuru ve kameralı eşya depolama hizmeti. MerkezNakliyat güvencesiyle. Hemen " + PHONE_DISPLAY,
  alternates: { canonical: "/esya-depolama" },
};

export default function EsyaDepolamaPage() {
  return (
    <SimpleServicePage
      slug="/esya-depolama"
      kicker="Güvenli Depolama"
      h1={<>Eşya Depolama ile <span className="text-gradient">Güvenli</span> Saklama Çözümü</>}
      serviceName="Eşya Depolama"
      serviceDescription="Taşınma sürecinde veya uzun süreli ihtiyaçlarda güvenli, kuru ve kameralı eşya depolama hizmeti."
      intro="Yeni eviniz henüz hazır değilse, yurt dışına geçici olarak gidiyorsanız veya sadece bazı eşyalarınıza şu an yer yoksa, MerkezNakliyat'ın güvenli depolama alanlarında eşyalarınızı sigortalı şekilde saklayabilirsiniz."
      benefits={[
        { title: "Kameralı ve Güvenlikli Alanlar", desc: "Depo alanlarımız 7/24 kamera sistemi ile izlenir." },
        { title: "Nem ve Neme Karşı Korumalı", desc: "Eşyalarınız kuru ve kontrollü ortamlarda saklanır." },
        { title: "Kısa veya Uzun Vadeli Seçenekler", desc: "İhtiyacınıza göre haftalık, aylık veya yıllık depolama planları sunuyoruz." },
        { title: "Taşıma ile Entegre Hizmet", desc: "Evden eve nakliyat sürecinizle birlikte depolama planlaması yapabilirsiniz." },
      ]}
      contentBlocks={[
        {
          title: "Eşya Depolama Ne Zaman İhtiyaç Olur?",
          body: (
            <p>
              Ev taşıma tarihleri arasında boşluk oluştuğunda, yurt dışı görevlendirme
              veya tadilat süreçlerinde, miras veya ikinci el eşyaların geçici olarak
              saklanması gerektiğinde eşya depolama hizmeti pratik bir çözümdür.
            </p>
          ),
        },
        {
          title: "Depolama ve Nakliyat Birlikte Planlanabilir",
          body: (
            <p>
              {" "}
              <Link href="/evden-eve-nakliyat" className="text-orange-600 hover:text-orange-700">
                Evden eve nakliyat
              </Link>{" "}
              hizmetimizle birlikte eşyalarınızı doğrudan depo alanımıza taşıyabilir,
              ihtiyaç duyduğunuzda tekrar adresinize teslim ettirebilirsiniz.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Eşya depolama süresi ne kadar olabilir?", a: "İhtiyacınıza göre kısa vadeli (haftalık/aylık) veya uzun vadeli (yıllık) depolama seçenekleri sunuyoruz." },
        { q: "Depoladığım eşyalar sigortalı mı?", a: "Evet, depolama sürecinde eşyalarınız için sigorta seçeneği mevcuttur." },
        { q: "Depolama fiyatları neye göre belirlenir?", a: `Eşya hacmi ve depolama süresine göre fiyatlandırma yapılır. Detaylı bilgi için ${PHONE_DISPLAY} numarasını arayabilirsiniz.` },
        { q: "Depodaki eşyalarıma istediğim zaman ulaşabilir miyim?", a: "Evet, önceden randevu alarak depodaki eşyalarınıza erişim sağlayabilir veya adresinize teslimini talep edebilirsiniz." },
      ]}
      crossLinks={[
        { href: "/evden-eve-nakliyat", icon: <TruckIcon className="h-6 w-6" />, title: "Evden Eve Nakliyat", desc: "Depolama öncesi veya sonrası taşıma hizmeti." },
        { href: "/asansorlu-nakliyat-hizmeti", icon: <ElevatorIcon className="h-6 w-6" />, title: "Asansörlü Nakliyat Hizmeti", desc: "Depoya veya depodan asansörlü taşıma." },
        { href: "/sigortali-tasimacilik", icon: <ShieldIcon className="h-6 w-6" />, title: "Sigortalı Taşımacılık", desc: "Depolanan ve taşınan eşyalarınız güvence altında." },
      ]}
    />
  );
}
