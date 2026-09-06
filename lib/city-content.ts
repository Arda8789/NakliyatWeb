import { City, getRelatedCities } from "./cities";
import { PHONE_DISPLAY } from "./site";

export type ServiceKey = "evden-eve" | "asansorlu";

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

const introVariantsEvdenEve = [
  (c: City) =>
    `${c.name} evden eve nakliyat hizmetinde MerkezNakliyat, ${c.region} bölgesinin en çok tercih edilen evden eve güvenilir nakliyat firmaları arasında yer alır. Ev eşyalarınızı özenle paketleyip, sigortalı araçlarımızla ${c.name} il merkezi ve tüm ilçelerine hasarsız şekilde taşıyoruz.`,
  (c: City) =>
    `${c.name}'da taşınma sürecinizi kolaylaştırmak için MerkezNakliyat ekibi 7/24 hizmetinizdedir. Evden eve nakliyat konusunda uzman ekiplerimiz, ${c.name} genelinde apartman, site ve müstakil evlerden eşyalarınızı güvenle alır, yeni adresinize eksiksiz teslim eder.`,
  (c: City) =>
    `${c.name} evden eve nakliyat ihtiyaçlarınızda MerkezNakliyat farkını yaşayın. ${c.region} bölgesindeki geniş araç filomuz ve deneyimli nakliye ekibimizle, evinizin her köşesindeki eşyayı profesyonel ambalaj malzemeleriyle paketleyip güvenli bir şekilde taşıyoruz.`,
  (c: City) =>
    `Yıllardır ${c.name} ve çevresinde evden eve nakliyat hizmeti veren MerkezNakliyat, şehir içi ve şehirlerarası taşımacılıkta binlerce aileye güvenle hizmet sundu. ${c.name}'daki yeni eviniz için taşınma sürecini baştan sona biz üstleniyoruz.`,
];

const introVariantsAsansorlu = [
  (c: City) =>
    `${c.name} asansörlü nakliyat hizmetinde MerkezNakliyat, özellikle yüksek katlı bina ve apartmanlarda merdiven kullanmadan, eşyalarınıza ve bina merdivenlerine zarar vermeden taşıma imkanı sunar. Asansörlü taşımacılık ekipmanlarımız ${c.name} genelinde hizmete hazırdır.`,
  (c: City) =>
    `${c.name}'da kat asansörü ile eşya taşıma artık çok daha kolay. MerkezNakliyat'ın modern cephe asansörleri, ${c.name} il merkezi ve ilçelerinde merdivensiz, hızlı ve güvenli asansörlü nakliyat hizmeti sağlar.`,
  (c: City) =>
    `Yüksek katlı konutlarda eşya taşımanın en pratik yolu asansörlü nakliyattır. ${c.name} bölgesinde hizmet veren MerkezNakliyat ekipleri, ağır mobilya ve beyaz eşyaları cephe asansörüyle güvenle indirip bindirir, merdiven riskini tamamen ortadan kaldırır.`,
  (c: City) =>
    `${c.name}'da asansörlü nakliyat hizmeti almak isteyen müşterilerimiz için MerkezNakliyat, son teknoloji yük asansörleri ve deneyimli operatör ekibiyle hızlı, güvenli ve ekonomik bir çözüm sunar.`,
];

export const benefitPoolEvdenEve = [
  { title: "Sigortalı Taşımacılık", desc: "Tüm eşyalarınız taşıma sigortası kapsamında güvence altındadır." },
  { title: "Profesyonel Ambalajlama", desc: "Kırılacak ve hassas eşyalar özel ambalaj malzemeleriyle paketlenir." },
  { title: "Deneyimli Nakliye Ekibi", desc: "Eşya indirme bindirme işlemleri uzman personelimizce yapılır." },
  { title: "Şehir İçi ve Şehirlerarası Hizmet", desc: "İl içi taşımanın yanı sıra Türkiye'nin her noktasına şehirlerarası nakliyat sağlarız." },
  { title: "Uygun Fiyat Garantisi", desc: "Şeffaf fiyatlandırma ile bütçenize uygun evden eve nakliyat paketleri sunarız." },
  { title: "7/24 Hızlı Randevu", desc: "Telefonla anında ücretsiz keşif ve fiyat teklifi alabilirsiniz." },
];

export const benefitPoolAsansorlu = [
  { title: "Merdivensiz Taşıma", desc: "Cephe asansörü ile eşyalarınızı merdiven kullanmadan pencereden indirip bindiriyoruz." },
  { title: "Bina ve Eşya Güvenliği", desc: "Merdiven, duvar ve korkuluklarda çizik veya hasar riski ortadan kalkar." },
  { title: "Hızlı Taşınma Süresi", desc: "Asansörlü nakliyat, klasik merdivenle taşımaya göre süreyi belirgin şekilde kısaltır." },
  { title: "Ağır Eşyalarda Güvenli Çözüm", desc: "Beyaz eşya, piyano, kasa ve büyük mobilyalar güvenle taşınır." },
  { title: "Deneyimli Operatör Ekibi", desc: "Asansör kullanımında uzman ekiplerimiz iş güvenliği kurallarına tam uyum sağlar." },
  { title: "Sigortalı Asansörlü Nakliyat", desc: "Asansörle taşıma sürecindeki tüm eşyalarınız sigorta kapsamındadır." },
];

export const processSteps = [
  { title: "Ücretsiz Keşif ve Fiyat Teklifi", desc: "Telefonla iletişime geçtiğinizde eşya miktarınıza göre ücretsiz keşif yapıp net fiyat teklifi veriyoruz." },
  { title: "Paketleme ve Ambalajlama", desc: "Kırılabilir ve hassas eşyalarınız özel koli, streç film ve köpük malzemeyle paketlenir." },
  { title: "Yükleme ve Taşıma", desc: "Eşyalarınız uzman ekibimiz tarafından araca ya da asansöre yüklenip güvenle taşınır." },
  { title: "Yeni Adrese Teslim", desc: "Eşyalarınız yeni adresinizde talimatlarınıza göre yerleştirilir ve kontrol sağlanır." },
  { title: "Son Kontrol ve Teslimat Onayı", desc: "Taşıma sonrası eşyalarınız birlikte kontrol edilir, memnuniyetiniz onaylanır." },
];

function buildFaqEvdenEve(c: City) {
  return [
    {
      q: `${c.name} evden eve nakliyat fiyatları ne kadar?`,
      a: `${c.name} evden eve nakliyat fiyatları; eşya miktarı, kat durumu, mesafe ve ek hizmetlere (ambalajlama, asansörlü taşıma, depolama) göre değişir. Size özel net fiyat için ${PHONE_DISPLAY} numaralı hattımızdan ücretsiz keşif talep edebilirsiniz.`,
    },
    {
      q: `${c.name}'da aynı gün evden eve nakliyat yapılıyor mu?`,
      a: `Evet, ${c.name} il merkezi ve ilçelerinde uygun araç ve ekip planlamasıyla aynı gün içinde evden eve nakliyat hizmeti sağlayabiliyoruz. Randevu için önceden aramanız işlemi hızlandırır.`,
    },
    {
      q: `Eşyalarım taşıma esnasında sigortalı mı?`,
      a: `Evet, MerkezNakliyat ile yapılan tüm evden eve nakliyat işlemlerinde eşyalarınız taşıma sigortası kapsamında güvence altına alınır.`,
    },
    {
      q: `${c.name}'dan başka bir şehre şehirlerarası nakliyat yapıyor musunuz?`,
      a: `Evet, ${c.name}'dan Türkiye'nin tüm illerine düzenli şehirlerarası evden eve nakliyat seferlerimiz mevcuttur.`,
    },
    {
      q: `Ambalaj malzemesi hizmete dahil mi?`,
      a: `Talep etmeniz halinde koli, streç film, baloncuklu naylon ve mobilya koruma malzemeleri dahil profesyonel ambalajlama hizmeti sunuyoruz.`,
    },
  ];
}

function buildFaqAsansorlu(c: City) {
  return [
    {
      q: `${c.name}'da asansörlü nakliyat hangi katlarda kullanılabilir?`,
      a: `${c.name} genelinde 2. kat ve üzeri tüm konutlarda, bina cephesine uygun asansör sistemlerimizle asansörlü nakliyat hizmeti veriyoruz.`,
    },
    {
      q: `Asansörlü nakliyat fiyatı neye göre belirlenir?`,
      a: `Kat sayısı, eşya miktarı, asansörün kurulacağı mesafe ve süre gibi faktörlere göre fiyat belirlenir. ${PHONE_DISPLAY} hattından ücretsiz fiyat teklifi alabilirsiniz.`,
    },
    {
      q: `Asansörlü taşımacılık bina veya balkona zarar verir mi?`,
      a: `Deneyimli operatör ekibimiz ve koruyucu ekipmanlarımız sayesinde bina cephesi, balkon ve korkuluklara zarar vermeden güvenli taşıma sağlanır.`,
    },
    {
      q: `${c.name}'da hangi eşyalar asansörle taşınabilir?`,
      a: `Beyaz eşya, koltuk takımı, gardırop, piyano, kasa gibi büyük ve ağır eşyalar dahil olmak üzere ev ve iş yeri eşyalarının tamamı asansörle taşınabilir.`,
    },
    {
      q: `Asansörlü nakliyat için ne kadar önceden randevu almalıyım?`,
      a: `Yoğun dönemler dışında ${c.name} içinde genellikle 1 gün önceden randevu ile asansörlü nakliyat hizmeti planlayabiliyoruz.`,
    },
  ];
}

export interface CityServiceContent {
  h1: string;
  title: string;
  metaDescription: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedCities: City[];
  serviceLabel: string;
}

export function getCityServiceContent(
  city: City,
  service: ServiceKey
): CityServiceContent {
  const seed = city.plate;
  const related = getRelatedCities(city.slug, 8);

  if (service === "evden-eve") {
    const intro1 = pick(introVariantsEvdenEve, seed)(city);
    const intro2 = `${city.name} genelinde ${city.metro ? "büyükşehir statüsündeki yoğun trafiğe ve site/apartman yönetimlerinin taşınma kurallarına" : "il merkezi ve ilçelerdeki farklı konut tiplerine"} uygun planlama yaparak, evden eve nakliyat sürecini sizin için stressiz hale getiriyoruz. Eşyalarınızın sökümü, paketlenmesi, taşınması ve yeni evinizde kurulumu tek elden MerkezNakliyat güvencesiyle tamamlanır.`;
    return {
      h1: `${city.name} Evden Eve Nakliyat`,
      title: `${city.name} Evden Eve Nakliyat | Güvenilir Nakliyat Firması - MerkezNakliyat`,
      metaDescription: `${city.name} evden eve nakliyat hizmeti mi arıyorsunuz? MerkezNakliyat ile ${city.name} il merkezi ve tüm ilçelerinde sigortalı, uygun fiyatlı evden eve güvenilir nakliyat. Hemen ${PHONE_DISPLAY} numaralı hattı arayın.`,
      intro: [intro1, intro2],
      benefits: [...benefitPoolEvdenEve],
      process: [...processSteps],
      faq: buildFaqEvdenEve(city),
      relatedCities: related,
      serviceLabel: "Evden Eve Nakliyat",
    };
  }

  const intro1 = pick(introVariantsAsansorlu, seed)(city);
  const intro2 = `${city.name}'daki ${city.metro ? "yüksek katlı site ve rezidanslarda" : "apartman ve konutlarda"} merdivenden eşya taşımanın getirdiği zaman kaybını ve hasar riskini, asansörlü nakliyat hizmetimizle sıfıra indiriyoruz. MerkezNakliyat'ın asansörlü taşımacılık ekipleri, ${city.name} il merkezi ve ilçelerinde eşyalarınızı pencereden güvenle indirip yeni katınıza aynı güvenlikle çıkarır.`;
  return {
    h1: `${city.name} Asansörlü Nakliyat Hizmeti`,
    title: `${city.name} Asansörlü Nakliyat Hizmeti | Asansörlü Taşımacılık - MerkezNakliyat`,
    metaDescription: `${city.name} asansörlü nakliyat hizmeti için MerkezNakliyat! Merdivensiz, hızlı ve sigortalı asansörlü taşımacılık ${city.name} genelinde. Ücretsiz keşif için ${PHONE_DISPLAY} hattını arayın.`,
    intro: [intro1, intro2],
    benefits: [...benefitPoolAsansorlu],
    process: [...processSteps],
    faq: buildFaqAsansorlu(city),
    relatedCities: related,
    serviceLabel: "Asansörlü Nakliyat Hizmeti",
  };
}
