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
  {
    slug: "asansorlu-nakliyat-fiyatlarini-etkileyen-faktorler",
    title: "Asansörlü Nakliyat Fiyatlarını Etkileyen 7 Faktör",
    description:
      "Asansörlü nakliyat hizmeti alırken fiyatı belirleyen kat sayısı, bina konumu ve eşya hacmi gibi etkenleri detaylıca inceliyoruz.",
    date: "2026-04-05",
    readingTime: "7 dk",
    intro:
      "Asansörlü nakliyat hizmeti klasik taşımaya göre farklı bir fiyatlandırma mantığına sahiptir. Bu yazıda fiyatı belirleyen yedi temel faktörü ele alıyoruz.",
    sections: [
      {
        heading: "1. Kat Sayısı ve Bina Yüksekliği",
        paragraphs: [
          "Asansörün ulaşması gereken kat yüksekliği arttıkça kurulum süresi ve ekipman kullanımı da artar. Bu nedenle 2. kat ile 10. kat arasında fiyat farkı oluşur.",
        ],
      },
      {
        heading: "2. Bina Cephesine Erişim Kolaylığı",
        paragraphs: [
          "Asansörün güvenli şekilde konumlandırılabileceği bir cephe ve zemin gereklidir. Dar sokaklar veya park alanı kısıtları kurulum süresini ve dolayısıyla maliyeti etkileyebilir.",
        ],
      },
      {
        heading: "3. Taşınacak Eşya Hacmi",
        paragraphs: [
          "Daha fazla eşya, asansörün daha uzun süre çalışması anlamına gelir. 1+1 bir daire ile 4+1 bir dairenin asansörlü nakliyat süresi ve maliyeti farklıdır.",
        ],
      },
      {
        heading: "4. Eşyaların Ağırlığı ve Hassasiyeti",
        paragraphs: [
          "Piyano, kasa, beyaz eşya gibi ağır ve hassas eşyalar için ek güvenlik önlemleri ve daha yavaş, kontrollü bir taşıma süreci uygulanır.",
        ],
      },
      {
        heading: "5. Kurulum ve Sökülme Süresi",
        paragraphs: [
          "Asansörün kurulumu ve iş bitiminde sökülmesi de sürece dahildir. Bu süre, özellikle site yönetimi izinlerinin gerektiği yerlerde uzayabilir.",
        ],
      },
      {
        heading: "6. Şehir ve Bölge Farkları",
        paragraphs: [
          "Büyükşehirlerde yoğun trafik ve park kısıtları nedeniyle asansörlü nakliyat organizasyonu farklılık gösterebilir; bu da bölgesel fiyat farklarına yol açabilir.",
        ],
      },
      {
        heading: "7. Ek Hizmet Talepleri",
        paragraphs: [
          "Ambalajlama, eşya sigortası veya aynı gün hizmet gibi ek talepler paket fiyatına yansır. Net bir teklif için tüm ihtiyaçlarınızı keşif sırasında belirtmeniz önerilir.",
        ],
      },
    ],
  },
  {
    slug: "istanbul-evden-eve-nakliyat-rehberi",
    title: "İstanbul'da Evden Eve Nakliyat Rehberi: Bilmeniz Gereken Her Şey",
    description:
      "İstanbul gibi büyük ve yoğun bir şehirde evden eve nakliyat sürecini kolaylaştıracak pratik bilgiler ve öneriler.",
    date: "2026-04-18",
    readingTime: "8 dk",
    intro:
      "İstanbul'un trafiği, site yönetimleri ve dar sokakları evden eve nakliyat sürecini diğer şehirlere göre biraz daha farklı kılar. İşte İstanbul'da taşınırken bilmeniz gerekenler.",
    sections: [
      {
        heading: "Trafik ve Saat Planlaması",
        paragraphs: [
          "İstanbul'da yoğun trafik saatlerinden kaçınmak için taşınma saatini erken sabah veya öğleden sonraya planlamak, hem süreyi kısaltır hem de ekip verimliliğini artırır.",
        ],
      },
      {
        heading: "Site Yönetimi İzinleri",
        paragraphs: [
          "Birçok İstanbul semtinde yer alan siteler, asansör kullanımı ve taşınma saatleri için önceden bilgilendirme ister. Taşınmadan birkaç gün önce site yönetimiyle iletişime geçmenizi öneririz.",
        ],
      },
      {
        heading: "Dar Sokaklarda Asansörlü Nakliyat Avantajı",
        paragraphs: [
          "Boğaz hattı ve tarihi yarımada gibi dar sokaklı bölgelerde büyük araçların ve merdivenlerin kullanımı zorlaşabilir. Bu gibi durumlarda asansörlü nakliyat hizmeti, süreç kolaylığı sağlar.",
        ],
      },
      {
        heading: "İlçeden İlçeye Şehir İçi Nakliyat",
        paragraphs: [
          "Kadıköy'den Beşiktaş'a, Ümraniye'den Bakırköy'e İstanbul içi taşımalarda mesafe ve köprü geçişleri planlamayı etkiler. Deneyimli bir ekip, en uygun güzergahı ve saati sizin için belirler.",
        ],
      },
      {
        heading: "İstanbul'da Evden Eve Nakliyat için Öneriler",
        paragraphs: [
          "Randevunuzu mümkünse hafta içi bir güne almak, hem fiyat hem de zamanlama açısından avantaj sağlayabilir. Detaylı bilgi için İstanbul evden eve nakliyat sayfamızı inceleyebilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "ofis-tasimada-bilgisayar-sunucu-tasima-rehberi",
    title: "Ofis Taşımada Bilgisayar ve Sunucu Ekipmanlarını Taşıma Rehberi",
    description:
      "Kurumsal taşımacılıkta hassas elektronik ekipmanların güvenli taşınması için dikkat edilmesi gereken noktalar.",
    date: "2026-04-29",
    readingTime: "6 dk",
    intro:
      "Ofis taşımacılığında en kritik konulardan biri bilgisayar, sunucu ve ağ ekipmanlarının hasarsız taşınmasıdır. İşte dikkat edilmesi gereken temel noktalar.",
    sections: [
      {
        heading: "Taşınmadan Önce Yedekleme Yapın",
        paragraphs: [
          "Sunucu ve bilgisayarların taşınmasından önce tüm verilerin yedeklenmesi, olası bir aksaklıkta veri kaybını önler.",
        ],
      },
      {
        heading: "Kablo ve Bağlantı Noktalarını Etiketleyin",
        paragraphs: [
          "Sunucu odasındaki kablo karmaşasını önlemek için her kabloyu hangi cihaza ve porta bağlı olduğunu belirten etiketlerle işaretlemek, yeni ofiste kurulumu hızlandırır.",
        ],
      },
      {
        heading: "Anti-Statik ve Darbe Emici Ambalaj Kullanımı",
        paragraphs: [
          "Elektronik ekipmanlar, statik elektriğe karşı koruyucu naylon ve darbelere karşı köpük dolgulu kutularla paketlenmelidir.",
        ],
      },
      {
        heading: "Sıcaklık ve Nem Kontrolü",
        paragraphs: [
          "Sunucu gibi hassas cihazların taşınma sırasında aşırı sıcak veya nemli ortamlara maruz kalmaması önemlidir. Kapalı ve iklimlendirilmiş araçlarla taşınması önerilir.",
        ],
      },
      {
        heading: "Kurulum Önceliklendirmesi",
        paragraphs: [
          "Yeni ofiste önce ağ altyapısı ve sunucular kurulmalı, ardından çalışan bilgisayarları bağlanmalıdır. Bu sıralama, iş süreçlerinin en kısa sürede yeniden başlamasını sağlar.",
        ],
      },
    ],
  },
  {
    slug: "kiralik-eve-tasinirken-dikkat-edilmesi-gerekenler",
    title: "Kiralık Eve Taşınırken Dikkat Edilmesi Gerekenler",
    description:
      "Kiralık bir eve taşınmadan önce kontrol etmeniz gereken hukuki ve pratik detayları derledik.",
    date: "2026-05-10",
    readingTime: "6 dk",
    intro:
      "Kiralık eve taşınmak, ev sahibi olmaktan farklı bazı ek adımlar gerektirir. İşte kiracılar için taşınma öncesi kontrol listesi.",
    sections: [
      {
        heading: "Kira Sözleşmesini Dikkatle İnceleyin",
        paragraphs: [
          "Taşınmadan önce kira sözleşmesindeki depozito, aidat ve bakım sorumlulukları gibi maddeleri netleştirin.",
        ],
      },
      {
        heading: "Giriş Tespit Tutanağı Hazırlayın",
        paragraphs: [
          "Eve giriş yaptığınızda mevcut hasarları fotoğraflayıp bir tutanakla kayıt altına almak, çıkışta olası anlaşmazlıkları önler.",
        ],
      },
      {
        heading: "Asansörlü Nakliyat için Bina Yönetiminden İzin Alın",
        paragraphs: [
          "Kiralık bir sitede asansörlü nakliyat hizmeti kullanacaksanız, bina yönetiminden veya komşularınızdan önceden onay almanız sürecin sorunsuz ilerlemesini sağlar.",
        ],
      },
      {
        heading: "Abonelik Devirlerini Planlayın",
        paragraphs: [
          "Elektrik, su, doğalgaz ve internet aboneliklerinin yeni adrese devri için taşınma tarihine yakın bir gün belirleyin.",
        ],
      },
    ],
  },
  {
    slug: "esya-depolama-mi-direkt-tasima-mi",
    title: "Eşya Depolama mı, Direkt Taşıma mı? Hangisi Size Uygun?",
    description:
      "Taşınma sürecinde eşyalarınızı direkt yeni adresinize mi taşımalısınız yoksa geçici olarak depolamalı mısınız? Karar vermenize yardımcı oluyoruz.",
    date: "2026-05-22",
    readingTime: "5 dk",
    intro:
      "Bazı taşınma süreçlerinde yeni adresiniz henüz hazır olmayabilir. Bu durumda eşya depolama mı yoksa doğrudan taşıma mı daha uygun, birlikte değerlendirelim.",
    sections: [
      {
        heading: "Ne Zaman Direkt Taşıma Tercih Edilmeli?",
        paragraphs: [
          "Yeni adresiniz taşınmaya hazırsa ve tarihler net ise, eşyalarınızı doğrudan yeni evinize taşımak hem daha ekonomik hem de daha hızlıdır.",
        ],
      },
      {
        heading: "Ne Zaman Eşya Depolama Tercih Edilmeli?",
        paragraphs: [
          "Yeni eviniz tadilat aşamasındaysa, iki ev arasında tarih boşluğu varsa veya geçici bir süre yurt dışında olacaksanız, eşya depolama hizmeti eşyalarınızı güvenle saklamanızı sağlar.",
        ],
      },
      {
        heading: "Maliyet Karşılaştırması",
        paragraphs: [
          "Depolama hizmeti ek bir maliyet kalemi olsa da, eşyalarınızın güvenliği ve esnek zamanlama sağladığı için uzun vadede pratik bir çözüm olabilir.",
        ],
      },
      {
        heading: "Karma Çözüm: Kısmi Depolama",
        paragraphs: [
          "Bazı eşyalarınızı doğrudan yeni evinize taşırken, hemen ihtiyaç duymadığınız eşyaları geçici olarak depolamak da mümkündür. Bu karma yaklaşım, taşınma sürecini daha esnek hale getirir.",
        ],
      },
    ],
  },
  {
    slug: "nakliyat-firmasi-secerken-sorulmasi-gereken-sorular",
    title: "Nakliyat Firması Seçerken Sormanız Gereken 8 Soru",
    description:
      "Güvenilir bir nakliyat firması seçmeden önce mutlaka sormanız gereken soruları listeledik.",
    date: "2026-06-03",
    readingTime: "6 dk",
    intro:
      "Evden eve nakliyat veya asansörlü nakliyat hizmeti alacağınız firmayı seçerken doğru soruları sormak, sürprizlerle karşılaşmanızı önler.",
    sections: [
      {
        heading: "1. Sigortalı Taşımacılık Hizmetiniz Var mı?",
        paragraphs: [
          "Eşyalarınızın taşıma sırasında sigorta kapsamında olup olmadığını mutlaka netleştirin.",
        ],
      },
      {
        heading: "2. Fiyata Neler Dahil?",
        paragraphs: [
          "Ambalajlama, asansörlü nakliyat, indirme-bindirme gibi hizmetlerin fiyata dahil olup olmadığını önceden öğrenin.",
        ],
      },
      {
        heading: "3. Asansörlü Nakliyat Ekipmanınız Var mı?",
        paragraphs: [
          "Yüksek katlı bir binada yaşıyorsanız, firmanın kendi asansörlü nakliyat ekipmanına sahip olup olmadığını sorun.",
        ],
      },
      {
        heading: "4. Ne Kadar Sürede Keşif Yapabiliyorsunuz?",
        paragraphs: [
          "Ücretsiz keşif süresi ve randevu esnekliği, planlamanız açısından önemlidir.",
        ],
      },
      {
        heading: "5. Şehirlerarası Nakliyat Yapıyor musunuz?",
        paragraphs: [
          "Başka bir şehre taşınacaksanız, firmanın düzenli şehirlerarası sefer yapıp yapmadığını kontrol edin.",
        ],
      },
      {
        heading: "6. Hasar Durumunda Süreç Nasıl İşliyor?",
        paragraphs: [
          "Olası bir hasar durumunda takip edilecek prosedürü önceden öğrenmeniz, sürpriz yaşamanızı önler.",
        ],
      },
      {
        heading: "7. Referans veya Geçmiş Deneyim Paylaşabiliyor musunuz?",
        paragraphs: [
          "Firmanın kaç yıldır hizmet verdiği ve hangi bölgelerde deneyimli olduğu, güvenilirliği hakkında fikir verir.",
        ],
      },
      {
        heading: "8. İletişim ve Randevu Netliği Nasıl?",
        paragraphs: [
          "Telefonla hızlı ve net bilgi alabildiğiniz, randevu saatine bağlı kalan bir firma tercih etmeniz taşınma gününüzü kolaylaştırır.",
        ],
      },
    ],
  },
  {
    slug: "ogrenci-evi-tasima-rehberi",
    title: "Öğrenci Evi Taşıma Rehberi: Küçük Bütçeyle Kolay Taşınma",
    description:
      "Öğrenciler için ekonomik ve pratik ev taşıma önerileri: parça eşya taşımadan paketlemeye kadar bilmeniz gerekenler.",
    date: "2026-06-15",
    readingTime: "5 dk",
    intro:
      "Öğrenci evleri genellikle daha az eşyaya sahip olduğu için taşınma süreci farklı bir planlama gerektirir. İşte bütçe dostu bir öğrenci taşınması için öneriler.",
    sections: [
      {
        heading: "Parça Eşya Taşıma ile Bütçe Dostu Çözüm",
        paragraphs: [
          "Tam kapasiteli bir nakliyat aracı yerine parça eşya taşıma hizmeti, öğrenci bütçesine daha uygun bir seçenektir.",
        ],
      },
      {
        heading: "Dönem Başı ve Sonu Yoğunluğuna Dikkat",
        paragraphs: [
          "Eylül ve Haziran ayları öğrenci taşınmalarının yoğunlaştığı dönemlerdir. Bu tarihlerde erken randevu almanız önerilir.",
        ],
      },
      {
        heading: "Ortak Ev Arkadaşlarıyla Koordinasyon",
        paragraphs: [
          "Ev arkadaşlarınızla taşınma tarihini ve ortak eşyaların paylaşımını önceden netleştirmek, taşınma gününde karışıklığı önler.",
        ],
      },
      {
        heading: "Küçük Bütçeli Ambalaj Çözümleri",
        paragraphs: [
          "Kitap, kırtasiye ve küçük ev eşyaları için standart koli ve streç film yeterli olabilir; kırılacak eşyalarınız için ek koruma talep etmeniz yeterlidir.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
