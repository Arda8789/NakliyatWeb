import type { Metadata } from "next";
import Link from "next/link";
import { SimpleServicePage } from "@/components/SimpleServicePage";
import { TruckIcon, ElevatorIcon, PackageIcon } from "@/components/icons";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sigortalı Taşımacılık Hizmeti | Güvenceli Nakliyat",
  description:
    "MerkezNakliyat'ta tüm evden eve ve asansörlü nakliyat hizmetleri sigortalı taşımacılık güvencesiyle sunulur. Eşyalarınız taşıma sırasında güvence altında. Hemen " + PHONE_DISPLAY,
  alternates: { canonical: "/sigortali-tasimacilik" },
};

export default function SigortaliTasimacilikPage() {
  return (
    <SimpleServicePage
      slug="/sigortali-tasimacilik"
      kicker="Güvenceli Nakliyat"
      h1={<>Sigortalı Taşımacılık ile <span className="text-gradient">Endişesiz</span> Taşınma</>}
      serviceName="Sigortalı Taşımacılık"
      serviceDescription="Evden eve ve asansörlü nakliyat hizmetlerinde eşyaların taşıma sigortası ile güvence altına alınması."
      intro="MerkezNakliyat'ta güven en önemli önceliğimizdir. Bu nedenle evden eve nakliyat ve asansörlü nakliyat hizmetlerimizin tamamında eşyalarınız taşıma sigortası kapsamında güvence altına alınır. Taşınma sürecinde olası hasarlara karşı gönül rahatlığıyla hizmet alırsınız."
      benefits={[
        { title: "Tüm Hizmetlerde Standart Sigorta", desc: "Evden eve ve asansörlü nakliyatın tamamı sigorta kapsamındadır." },
        { title: "Hasar Durumunda Hızlı Çözüm", desc: "Olası hasar bildirimlerinde hızlı değerlendirme ve çözüm süreci." },
        { title: "Değerli Eşyalar için Ek Güvence", desc: "Yüksek değerli eşyalarınız için ek sigorta seçenekleri sunulur." },
        { title: "Şeffaf Sigorta Koşulları", desc: "Sigorta kapsamı ve koşulları taşınmadan önce net şekilde bilgilendirilir." },
      ]}
      contentBlocks={[
        {
          title: "Sigortalı Taşımacılık Neden Önemli?",
          body: (
            <p>
              Taşınma süreci, eşyaların indirilip bindirilmesi ve nakliyesi sırasında
              risk barındırabilir. Sigortalı taşımacılık, olası bir hasar durumunda
              maddi kaybınızı önleyerek taşınma sürecini güvence altına alır.
            </p>
          ),
        },
        {
          title: "Hangi Hizmetler Sigorta Kapsamında?",
          body: (
            <p>
              <Link href="/evden-eve-nakliyat" className="text-orange-600 hover:text-orange-700">
                Evden eve nakliyat
              </Link>{" "}
              ve{" "}
              <Link href="/asansorlu-nakliyat-hizmeti" className="text-orange-600 hover:text-orange-700">
                asansörlü nakliyat hizmetimiz
              </Link>{" "}
              dahil olmak üzere tüm taşıma hizmetlerimiz standart sigorta güvencesiyle
              sunulur.
            </p>
          ),
        },
      ]}
      faq={[
        { q: "Sigorta için ek ücret ödemem gerekir mi?", a: "Standart taşıma sigortası tüm hizmetlerimize dahildir. Ek değerli eşyalar için isteğe bağlı ek güvence seçenekleri sunulur." },
        { q: "Hasar durumunda ne yapmalıyım?", a: `Taşınma sırasında oluşan hasarı teslimat anında bildirmeniz sürecin hızlı ilerlemesini sağlar. Detaylı bilgi için ${PHONE_DISPLAY} numarasını arayabilirsiniz.` },
        { q: "Hangi eşyalar sigorta kapsamı dışında olabilir?", a: "Nakit, değerli evrak ve kişisel belgeler gibi taşınabilir kıymetli eşyaların ayrıca elden taşınmasını öneririz." },
        { q: "Sigorta poliçesi taşınmadan önce mi düzenlenir?", a: "Evet, taşınma öncesi keşif sırasında sigorta kapsamı ve koşulları netleştirilir." },
      ]}
      crossLinks={[
        { href: "/evden-eve-nakliyat", icon: <TruckIcon className="h-6 w-6" />, title: "Evden Eve Nakliyat", desc: "Sigortalı evden eve nakliyat hizmeti." },
        { href: "/asansorlu-nakliyat-hizmeti", icon: <ElevatorIcon className="h-6 w-6" />, title: "Asansörlü Nakliyat Hizmeti", desc: "Sigortalı asansörlü taşımacılık." },
        { href: "/ambalajlama-hizmeti", icon: <PackageIcon className="h-6 w-6" />, title: "Ambalajlama Hizmeti", desc: "Hasar riskini azaltan profesyonel paketleme." },
      ]}
    />
  );
}
