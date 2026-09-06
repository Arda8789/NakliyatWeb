import type { Metadata } from "next";
import Link from "next/link";
import { SimpleServicePage } from "@/components/SimpleServicePage";
import { TruckIcon, ElevatorIcon, ShieldIcon } from "@/components/icons";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ambalajlama ve Paketleme Hizmeti | Hasarsız Taşımacılık",
  description:
    "Profesyonel ambalajlama ve eşya paketleme hizmeti ile taşınma sırasında hasar riskini sıfıra indirin. MerkezNakliyat ile hasarsız taşımacılık. Hemen " + PHONE_DISPLAY,
  alternates: { canonical: "/ambalajlama-hizmeti" },
};

export default function AmbalajlamaHizmetiPage() {
  return (
    <SimpleServicePage
      slug="/ambalajlama-hizmeti"
      kicker="Profesyonel Paketleme"
      h1={<>Ambalajlama Hizmeti ile <span className="text-gradient">Hasarsız</span> Taşımacılık</>}
      serviceName="Ambalajlama ve Paketleme Hizmeti"
      serviceDescription="Kırılacak ve hassas eşyalar için profesyonel ambalajlama ve paketleme hizmeti."
      intro="Taşınma sırasında en çok endişe edilen konu, eşyaların hasar görme riskidir. MerkezNakliyat'ın profesyonel ambalajlama hizmeti; cam, porselen, elektronik ve mobilyalarınızı özel koruyucu malzemelerle paketleyerek taşınma sürecinde tam güvenlik sağlar."
      benefits={[
        { title: "Kırılacak Eşyalara Özel Paketleme", desc: "Cam, porselen ve dekoratif eşyalar köpük ve baloncuklu naylonla korunur." },
        { title: "Mobilya Koruma Örtüleri", desc: "Koltuk, dolap ve yatak gibi büyük eşyalar özel koruma örtüleriyle sarılır." },
        { title: "Elektronik Eşya Paketleme", desc: "TV, bilgisayar gibi elektronik cihazlar darbe emici malzemeyle paketlenir." },
        { title: "Etiketleme ve Envanter Sistemi", desc: "Kutular odalara göre etiketlenerek yeni evde kolay yerleşim sağlanır." },
      ]}
      contentBlocks={[
        {
          title: "Ambalajlama Hizmeti Neleri Kapsar?",
          body: (
            <p>
              Ekibimiz taşınmadan önce evinize gelerek eşyalarınızın türüne uygun
              ambalaj malzemesi (koli, streç film, köpük, baloncuklu naylon) ile
              paketleme yapar. Bu sayede{" "}
              <Link href="/evden-eve-nakliyat" className="text-orange-600 hover:text-orange-700">
                evden eve nakliyat
              </Link>{" "}
              sürecinde hasar riski en aza iner.
            </p>
          ),
        },
        {
          title: "Kendi Eşyanızı Paketlemek İsterseniz",
          body: (
            <p>
              Dilerseniz sadece ambalaj malzemesi temin edip kendi paketlemenizi
              yapabilir, dilerseniz tüm süreci uzman ekibimize bırakabilirsiniz.
              Her iki seçenek için de esnek paketler sunuyoruz.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Ambalaj malzemeleri fiyata dahil mi?", a: `Talebinize göre ambalaj malzemesi dahil veya hariç paketler sunuyoruz. Detaylı bilgi için ${PHONE_DISPLAY} numarasını arayabilirsiniz.` },
        { q: "Hangi eşyalar özel paketleme gerektirir?", a: "Cam, ayna, porselen, tablo, elektronik cihazlar ve antika eşyalar özel koruyucu ambalajlama gerektirir." },
        { q: "Paketleme taşınmadan kaç gün önce yapılmalı?", a: "Genellikle taşınmadan 1 gün önce paketleme yapılmasını öneriyoruz, ancak talebe göre taşınma günü de paketleme mümkündür." },
        { q: "Ambalaj malzemeleri geri alınıyor mu?", a: "Talep etmeniz halinde kullanılan kutu ve koruma malzemelerinin bir kısmı taşınma sonrası geri toplanabilir." },
      ]}
      crossLinks={[
        { href: "/evden-eve-nakliyat", icon: <TruckIcon className="h-6 w-6" />, title: "Evden Eve Nakliyat", desc: "Paketlenen eşyalarınız için güvenli taşıma." },
        { href: "/asansorlu-nakliyat-hizmeti", icon: <ElevatorIcon className="h-6 w-6" />, title: "Asansörlü Nakliyat Hizmeti", desc: "Paketli eşyaların merdivensiz taşınması." },
        { href: "/sigortali-tasimacilik", icon: <ShieldIcon className="h-6 w-6" />, title: "Sigortalı Taşımacılık", desc: "Paketleme ve taşımada ekstra güvence." },
      ]}
    />
  );
}
