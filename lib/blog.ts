export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "evden-eve-nakliyat-fiyatlari-nasil-hesaplanir",
    title: "Evden Eve Nakliyat Fiyatları Nasıl Hesaplanır?",
    description:
      "Evden eve nakliyat fiyatlarını etkileyen faktörleri, keşif sürecini ve bütçenizi doğru planlamanın yollarını anlatıyoruz.",
    date: "2026-01-12",
    readingTime: "6 dk",
    intro:
      "Evden eve nakliyat fiyatları, birçok değişkene bağlı olarak şekillenir. Bu yazıda fiyatı belirleyen ana etkenleri ve bütçenizi doğru planlamanın yollarını inceliyoruz.",
    sections: [
      {
        heading: "Eşya Miktarı ve Ev Metrekaresi",
        paragraphs: [
          "Evden eve nakliyat fiyatını belirleyen en temel faktör, taşınacak eşyanın hacmi ve ev metrekaresidir. 1+1 bir daire ile 4+1 bir villanın taşınma maliyeti doğal olarak farklıdır.",
          "Ücretsiz keşif sırasında ekibimiz eşyalarınızı yerinde inceleyerek gerçekçi bir hacim ve fiyat teklifi sunar.",
        ],
      },
      {
        heading: "Mesafe: Şehir İçi mi, Şehirlerarası mı?",
        paragraphs: [
          "Aynı şehir içinde yapılan taşımalar ile şehirlerarası evden eve nakliyat arasında yakıt, süre ve lojistik planlama farkı nedeniyle fiyat farkı oluşur.",
          "Şehirlerarası taşımalarda dönüş yükü organizasyonu sayesinde bazı güzergahlarda daha avantajlı fiyatlar sunabiliyoruz.",
        ],
      },
      {
        heading: "Kat Durumu ve Asansörlü Nakliyat İhtiyacı",
        paragraphs: [
          "Asansörsüz binalarda veya yüksek katlarda merdivenden taşıma hem süreyi uzatır hem de hasar riskini artırır. Bu gibi durumlarda asansörlü nakliyat hizmeti tercih etmek, hem güvenliği artırır hem de orta-uzun vadede daha ekonomik olabilir.",
        ],
      },
      {
        heading: "Ek Hizmetler: Ambalajlama, Depolama, Sigorta",
        paragraphs: [
          "Profesyonel ambalajlama, geçici eşya depolama veya ek sigorta gibi hizmetler talep etmeniz durumunda paket fiyatına dahil edilir. Bu hizmetleri baştan planlamak, taşınma günü sürpriz maliyetlerin önüne geçer.",
        ],
      },
    ],
  },
  {
    slug: "asansorlu-nakliyat-nedir-avantajlari",
    title: "Asansörlü Nakliyat Nedir? Avantajları Nelerdir?",
    description:
      "Asansörlü nakliyat hizmetinin ne olduğunu, hangi durumlarda tercih edilmesi gerektiğini ve sağladığı avantajları anlatıyoruz.",
    date: "2026-01-20",
    readingTime: "5 dk",
    intro:
      "Yüksek katlı bina ve sitelerde taşınmanın en pratik yolu olan asansörlü nakliyat, merdiven kullanmadan hızlı ve güvenli taşıma imkanı sunar.",
    sections: [
      {
        heading: "Asansörlü Nakliyat Nasıl Çalışır?",
        paragraphs: [
          "Bina cephesine kurulan özel yük asansörleri sayesinde eşyalar doğrudan pencere veya balkondan indirilip bindirilir. Bu yöntem, dar ve dönemeçli merdivenlerde büyük mobilyaları taşımanın getirdiği riski ortadan kaldırır.",
        ],
      },
      {
        heading: "Zaman Tasarrufu",
        paragraphs: [
          "Merdivenle taşımaya kıyasla asansörlü nakliyat, özellikle çok katlı binalarda taşınma süresini belirgin şekilde kısaltır. Bu da hem işçilik maliyetini hem de taşınma gününüzün yorgunluğunu azaltır.",
        ],
      },
      {
        heading: "Eşya ve Bina Güvenliği",
        paragraphs: [
          "Merdiven, korkuluk ve duvarlarda çizik veya hasar oluşma riski asansörlü nakliyatla neredeyse sıfıra iner. Bu, hem sizin hem de komşularınızın ve bina yönetiminin memnuniyeti açısından önemlidir.",
        ],
      },
      {
        heading: "Hangi Eşyalar İçin İdealdir?",
        paragraphs: [
          "Beyaz eşya, gardırop, koltuk takımı, piyano ve kasa gibi büyük ve ağır eşyaların taşınmasında asansörlü nakliyat en güvenli ve pratik yöntemdir.",
        ],
      },
    ],
  },
  {
    slug: "tasinma-oncesi-kontrol-listesi",
    title: "Taşınma Öncesi Hazırlık: 10 Maddelik Kontrol Listesi",
    description:
      "Evden eve nakliyat gününe hazırlanırken izlemeniz gereken adımları ve pratik ipuçlarını derledik.",
    date: "2026-02-02",
    readingTime: "7 dk",
    intro:
      "Sorunsuz bir taşınma süreci için doğru planlama şart. İşte taşınma öncesi mutlaka kontrol etmeniz gereken 10 önemli madde.",
    sections: [
      {
        heading: "1-5: Planlama Aşaması",
        paragraphs: [
          "1. Taşınma tarihinizi belirleyin ve nakliyat firmanızla en az birkaç gün önceden randevu oluşturun.",
          "2. Kullanmadığınız eşyaları ayıklayın; gereksiz yük hem maliyeti hem de süreyi artırır.",
          "3. Kat durumunuzu değerlendirin, gerekiyorsa asansörlü nakliyat talep edin.",
          "4. Kırılacak ve değerli eşyalarınız için ayrı bir liste oluşturun.",
          "5. Yeni adresinizdeki kat planını öğrenerek büyük mobilyaların sığıp sığmayacağını kontrol edin.",
        ],
      },
      {
        heading: "6-10: Taşınma Günü Hazırlığı",
        paragraphs: [
          "6. Kutularınızı odalara göre etiketleyin, yeni evde yerleşimi kolaylaştırır.",
          "7. Elektronik cihazların kablo ve aksesuarlarını ayrı poşetlerde saklayın.",
          "8. Değerli evrak ve takılarınızı yanınızda taşıyın, nakliyat aracına vermeyin.",
          "9. Eski adresinizde su, elektrik, doğalgaz aboneliklerinizin son okumasını yaptırın.",
          "10. Taşınma günü evde bulunarak teslim alma sürecini birlikte kontrol edin.",
        ],
      },
    ],
  },
  {
    slug: "esya-paketleme-rehberi",
    title: "Eşya Paketleme Rehberi: Kırılacak Eşyalar Nasıl Paketlenir?",
    description:
      "Cam, porselen ve elektronik eşyaları taşınma sırasında hasarsız korumak için doğru ambalajlama tekniklerini anlatıyoruz.",
    date: "2026-02-14",
    readingTime: "6 dk",
    intro:
      "Doğru ambalajlama, evden eve nakliyat sürecinde hasar riskini en aza indiren en önemli adımdır. İşte eşya türüne göre paketleme önerileri.",
    sections: [
      {
        heading: "Cam ve Porselen Eşyalar",
        paragraphs: [
          "Her parçayı ayrı ayrı baloncuklu naylonla sarın, kutu içinde boşluk kalmayacak şekilde gazete kağıdı veya köpük ile destekleyin. Kutunun üzerine 'Kırılacak Eşya' etiketi eklemeyi unutmayın.",
        ],
      },
      {
        heading: "Elektronik Eşyalar",
        paragraphs: [
          "Mümkünse orijinal kutularında taşıyın. Orijinal kutu yoksa darbe emici köpük ve anti-statik naylon kullanın. Kabloları etiketleyerek ayrı bir poşette saklayın.",
        ],
      },
      {
        heading: "Mobilyalar",
        paragraphs: [
          "Köşeleri koruyucu köpük ile kapatın, yüzeyleri streç film veya mobilya örtüsüyle sarın. Sökülebilir parçaları (ayaklar, raflar) ayrı paketleyip etiketleyin.",
        ],
      },
      {
        heading: "Profesyonel Ambalajlama Desteği",
        paragraphs: [
          "Zaman kısıtınız varsa veya değerli eşyalarınız için ekstra güvence istiyorsanız, profesyonel ambalajlama hizmetimizden faydalanabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "sehirlerarasi-nakliyatta-dikkat-edilmesi-gerekenler",
    title: "Şehirlerarası Nakliyatta Dikkat Edilmesi Gerekenler",
    description:
      "Farklı bir şehre taşınırken sürecin sorunsuz ilerlemesi için dikkat etmeniz gereken önemli noktaları paylaşıyoruz.",
    date: "2026-02-25",
    readingTime: "6 dk",
    intro:
      "Şehirlerarası evden eve nakliyat, şehir içi taşımaya göre daha fazla planlama gerektirir. İşte dikkat edilmesi gereken temel noktalar.",
    sections: [
      {
        heading: "Doğru Firma Seçimi",
        paragraphs: [
          "Şehirlerarası taşımalarda güvenilir ve sigortalı bir nakliyat firması seçmek, uzun mesafede oluşabilecek risklere karşı en önemli güvencenizdir.",
        ],
      },
      {
        heading: "Teslimat Süresi Planlaması",
        paragraphs: [
          "Mesafeye bağlı olarak teslimat süresi değişebilir. Yeni adresinize ne zaman ulaşacağınızı netleştirip buna göre geçici konaklama veya eşya ihtiyaçlarınızı planlayın.",
        ],
      },
      {
        heading: "Sigorta ve Envanter Kontrolü",
        paragraphs: [
          "Uzun mesafeli taşımalarda eşyalarınızın bir envanterini çıkarmanız, teslimat sırasında kontrol yapmanızı kolaylaştırır. Sigortalı taşımacılık hizmeti bu süreçte size ekstra güvence sağlar.",
        ],
      },
    ],
  },
  {
    slug: "ofis-tasimada-is-surekliligini-korumak",
    title: "Ofis Taşımada İş Sürekliliğini Korumanın Yolları",
    description:
      "Kurumsal taşımacılık sürecinde iş akışınızı aksatmadan ofis taşımanın pratik yollarını anlatıyoruz.",
    date: "2026-03-05",
    readingTime: "5 dk",
    intro:
      "Ofis taşımacılığı, doğru planlanmadığında iş kaybına yol açabilir. İşte kurumsal taşımalarda iş sürekliliğini korumanın yolları.",
    sections: [
      {
        heading: "Mesai Dışı Taşınma Planlaması",
        paragraphs: [
          "Hafta sonu veya akşam saatlerinde yapılan ofis taşımaları, çalışanlarınızın ve müşterilerinizin iş akışını etkilemez.",
        ],
      },
      {
        heading: "Departman Bazlı Etiketleme",
        paragraphs: [
          "Kutuların ve ekipmanların departmanlara göre etiketlenmesi, yeni ofiste hızlı bir kurulum ve organizasyon sağlar.",
        ],
      },
      {
        heading: "Kritik Ekipmanların Önceliklendirilmesi",
        paragraphs: [
          "Sunucu, ağ ekipmanları gibi kritik sistemlerin öncelikli taşınıp kurulması, iş süreçlerinizin en kısa sürede yeniden başlamasını sağlar.",
        ],
      },
    ],
  },
  {
    slug: "nakliyat-sigortasi-neden-onemlidir",
    title: "Nakliyat Sigortası Neden Önemlidir?",
    description:
      "Taşınma sürecinde sigortalı taşımacılığın sağladığı güvenceyi ve neden tercih edilmesi gerektiğini anlatıyoruz.",
    date: "2026-03-15",
    readingTime: "4 dk",
    intro:
      "Taşınma sürecinde beklenmedik durumlar yaşanabilir. Nakliyat sigortası, bu risklere karşı sizi maddi kayıptan korur.",
    sections: [
      {
        heading: "Sigortasız Taşımanın Riskleri",
        paragraphs: [
          "Sigortasız yapılan taşımalarda oluşabilecek bir hasar durumunda maliyet tamamen müşteriye kalabilir. Bu da taşınma sürecini stresli hale getirir.",
        ],
      },
      {
        heading: "Sigortalı Taşımacılığın Sağladığı Güvence",
        paragraphs: [
          "MerkezNakliyat olarak sunduğumuz sigortalı taşımacılık hizmeti, evden eve ve asansörlü nakliyat süreçlerinde eşyalarınızı güvence altına alır.",
        ],
      },
      {
        heading: "Değerli Eşyalar için Ek Sigorta",
        paragraphs: [
          "Standart sigorta kapsamının yanı sıra, özellikle değerli veya antika eşyalarınız için ek sigorta seçenekleri de değerlendirilebilir.",
        ],
      },
    ],
  },
  {
    slug: "tasinma-icin-dogru-zamanlama",
    title: "Yaz mı Kış mı? Taşınma İçin Doğru Zamanlamayı Seçmek",
    description:
      "Evden eve nakliyat için mevsim ve gün seçiminin fiyat ve konfora etkisini inceliyoruz.",
    date: "2026-03-28",
    readingTime: "5 dk",
    intro:
      "Taşınma tarihinizi seçerken mevsim, hafta içi/hafta sonu tercihi ve yoğunluk dönemleri fiyatı ve süreci doğrudan etkiler.",
    sections: [
      {
        heading: "Yaz Ayları: Yoğun Talep Dönemi",
        paragraphs: [
          "Yaz ayları, okul tatilleri ve ev değişikliklerinin yoğunlaştığı dönem olduğu için nakliyat talebi artar. Bu dönemde erken randevu almanız önerilir.",
        ],
      },
      {
        heading: "Kış Ayları: Daha Esnek Planlama",
        paragraphs: [
          "Kış aylarında talep nispeten azaldığından, randevu esnekliği ve bazı dönemlerde daha uygun fiyatlar bulmak mümkün olabilir.",
        ],
      },
      {
        heading: "Hafta İçi mi, Hafta Sonu mu?",
        paragraphs: [
          "Hafta içi taşınmalar genellikle daha az yoğun olduğu için ekip planlaması daha esnek ilerler. Hafta sonu taşınmak isteyenlerin ise önceden randevu almasını öneririz.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
