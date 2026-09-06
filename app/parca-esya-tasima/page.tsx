import type { Metadata } from "next";
import Link from "next/link";
import { SimpleServicePage } from "@/components/SimpleServicePage";
import { TruckIcon, PackageIcon, WarehouseIcon } from "@/components/icons";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Parça Eşya Taşıma Hizmeti | Ekonomik Nakliyat Çözümü",
  description:
    "Tek parça mobilyadan birkaç kutu eşyaya kadar parça eşya taşıma hizmeti. MerkezNakliyat ile ekonomik ve güvenli parça yük taşımacılığı. Hemen " + PHONE_DISPLAY,
  alternates: { canonical: "/parca-esya-tasima" },
};

export default function ParcaEsyaTasimaPage() {
  return (
    <SimpleServicePage
      slug="/parca-esya-tasima"
      kicker="Ekonomik Taşıma"
      h1={<>Parça Eşya Taşıma ile <span className="text-gradient">Ekonomik</span> Nakliyat</>}
      serviceName="Parça Eşya Taşıma"
      serviceDescription="Tek parça mobilya veya az sayıda eşya için ekonomik ve güvenli parça eşya taşıma hizmeti."
      intro="Evinizin tamamını değil, sadece birkaç mobilya veya kutu eşyanızı taşımanız mı gerekiyor? MerkezNakliyat'ın parça eşya taşıma hizmeti ile ihtiyacınız kadar ödeyerek, tam kapasiteli kamyon masrafına katlanmadan güvenli taşıma imkanı sunuyoruz."
      benefits={[
        { title: "İhtiyaca Göre Ödeme", desc: "Sadece taşıdığınız eşya hacmi kadar ücretlendirme yapılır." },
        { title: "Hızlı Planlama", desc: "Az eşya için kısa sürede araç ve ekip organizasyonu sağlanır." },
        { title: "Tekil Mobilya Taşımaya Uygun", desc: "Koltuk, dolap, beyaz eşya gibi tek parça ürünler güvenle taşınır." },
        { title: "Güvenli Paketleme", desc: "Talep halinde tekli eşyalarınız da profesyonel ambalajlama ile korunur." },
      ]}
      contentBlocks={[
        {
          title: "Parça Eşya Taşıma Kimler İçin Uygundur?",
          body: (
            <p>
              Öğrenciler, yeni ev sahipleri, ikinci el eşya alım-satımı yapanlar veya
              sadece birkaç parça eşyasını yeni adresine taşımak isteyen herkes için
              parça eşya taşıma hizmeti hem zaman hem bütçe açısından avantajlıdır.
            </p>
          ),
        },
        {
          title: "Parça Yük Taşımacılığında Süreç",
          body: (
            <p>
              Taşınacak eşyanızın fotoğraf veya listesini paylaştığınızda size en
              uygun aracı ve tarihi planlıyoruz. Şehir içi parça eşya taşımanın
              yanı sıra{" "}
              <Link href="/evden-eve-nakliyat" className="text-blue-400 hover:text-blue-300">
                şehirlerarası evden eve nakliyat
              </Link>{" "}
              seferlerimize entegre parça yük taşıma seçeneklerimiz de mevcuttur.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Parça eşya taşıma fiyatı nasıl belirlenir?", a: `Taşınacak eşya sayısı, hacmi ve mesafeye göre fiyatlandırma yapılır. Detaylı bilgi için ${PHONE_DISPLAY} numarasını arayabilirsiniz.` },
        { q: "Tek bir koltuk veya dolap taşıtabilir miyim?", a: "Evet, tek parça mobilya taşımalarında da hizmet veriyoruz." },
        { q: "Şehirlerarası parça eşya taşıma yapıyor musunuz?", a: "Evet, düzenli şehirlerarası seferlerimize entegre şekilde parça yük taşımacılığı sağlıyoruz." },
        { q: "Parça eşyalarım sigortalı mı taşınıyor?", a: "Talep etmeniz halinde parça eşya taşımalarında da sigorta seçeneği sunuyoruz." },
      ]}
      crossLinks={[
        { href: "/evden-eve-nakliyat", icon: <TruckIcon className="h-6 w-6" />, title: "Evden Eve Nakliyat", desc: "Evinizin tamamı için uçtan uca taşınma çözümü." },
        { href: "/ambalajlama-hizmeti", icon: <PackageIcon className="h-6 w-6" />, title: "Ambalajlama Hizmeti", desc: "Parça eşyalarınız için profesyonel paketleme." },
        { href: "/esya-depolama", icon: <WarehouseIcon className="h-6 w-6" />, title: "Eşya Depolama", desc: "Taşımadan önce veya sonra güvenli depolama." },
      ]}
    />
  );
}
