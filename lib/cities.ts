export type Region =
  | "Marmara"
  | "Ege"
  | "Akdeniz"
  | "İç Anadolu"
  | "Karadeniz"
  | "Doğu Anadolu"
  | "Güneydoğu Anadolu";

export interface City {
  plate: number;
  name: string;
  slug: string;
  region: Region;
  metro: boolean;
}

export const CITIES: City[] = [
  { plate: 1, name: "Adana", slug: "adana", region: "Akdeniz", metro: true },
  { plate: 2, name: "Adıyaman", slug: "adiyaman", region: "Güneydoğu Anadolu", metro: false },
  { plate: 3, name: "Afyonkarahisar", slug: "afyonkarahisar", region: "Ege", metro: false },
  { plate: 4, name: "Ağrı", slug: "agri", region: "Doğu Anadolu", metro: false },
  { plate: 5, name: "Amasya", slug: "amasya", region: "Karadeniz", metro: false },
  { plate: 6, name: "Ankara", slug: "ankara", region: "İç Anadolu", metro: true },
  { plate: 7, name: "Antalya", slug: "antalya", region: "Akdeniz", metro: true },
  { plate: 8, name: "Artvin", slug: "artvin", region: "Karadeniz", metro: false },
  { plate: 9, name: "Aydın", slug: "aydin", region: "Ege", metro: true },
  { plate: 10, name: "Balıkesir", slug: "balikesir", region: "Marmara", metro: true },
  { plate: 11, name: "Bilecik", slug: "bilecik", region: "Marmara", metro: false },
  { plate: 12, name: "Bingöl", slug: "bingol", region: "Doğu Anadolu", metro: false },
  { plate: 13, name: "Bitlis", slug: "bitlis", region: "Doğu Anadolu", metro: false },
  { plate: 14, name: "Bolu", slug: "bolu", region: "Karadeniz", metro: false },
  { plate: 15, name: "Burdur", slug: "burdur", region: "Akdeniz", metro: false },
  { plate: 16, name: "Bursa", slug: "bursa", region: "Marmara", metro: true },
  { plate: 17, name: "Çanakkale", slug: "canakkale", region: "Marmara", metro: false },
  { plate: 18, name: "Çankırı", slug: "cankiri", region: "İç Anadolu", metro: false },
  { plate: 19, name: "Çorum", slug: "corum", region: "Karadeniz", metro: false },
  { plate: 20, name: "Denizli", slug: "denizli", region: "Ege", metro: true },
  { plate: 21, name: "Diyarbakır", slug: "diyarbakir", region: "Güneydoğu Anadolu", metro: true },
  { plate: 22, name: "Edirne", slug: "edirne", region: "Marmara", metro: false },
  { plate: 23, name: "Elazığ", slug: "elazig", region: "Doğu Anadolu", metro: false },
  { plate: 24, name: "Erzincan", slug: "erzincan", region: "Doğu Anadolu", metro: false },
  { plate: 25, name: "Erzurum", slug: "erzurum", region: "Doğu Anadolu", metro: true },
  { plate: 26, name: "Eskişehir", slug: "eskisehir", region: "İç Anadolu", metro: true },
  { plate: 27, name: "Gaziantep", slug: "gaziantep", region: "Güneydoğu Anadolu", metro: true },
  { plate: 28, name: "Giresun", slug: "giresun", region: "Karadeniz", metro: false },
  { plate: 29, name: "Gümüşhane", slug: "gumushane", region: "Karadeniz", metro: false },
  { plate: 30, name: "Hakkari", slug: "hakkari", region: "Doğu Anadolu", metro: false },
  { plate: 31, name: "Hatay", slug: "hatay", region: "Akdeniz", metro: true },
  { plate: 32, name: "Isparta", slug: "isparta", region: "Akdeniz", metro: false },
  { plate: 33, name: "Mersin", slug: "mersin", region: "Akdeniz", metro: true },
  { plate: 34, name: "İstanbul", slug: "istanbul", region: "Marmara", metro: true },
  { plate: 35, name: "İzmir", slug: "izmir", region: "Ege", metro: true },
  { plate: 36, name: "Kars", slug: "kars", region: "Doğu Anadolu", metro: false },
  { plate: 37, name: "Kastamonu", slug: "kastamonu", region: "Karadeniz", metro: false },
  { plate: 38, name: "Kayseri", slug: "kayseri", region: "İç Anadolu", metro: true },
  { plate: 39, name: "Kırklareli", slug: "kirklareli", region: "Marmara", metro: false },
  { plate: 40, name: "Kırşehir", slug: "kirsehir", region: "İç Anadolu", metro: false },
  { plate: 41, name: "Kocaeli", slug: "kocaeli", region: "Marmara", metro: true },
  { plate: 42, name: "Konya", slug: "konya", region: "İç Anadolu", metro: true },
  { plate: 43, name: "Kütahya", slug: "kutahya", region: "Ege", metro: false },
  { plate: 44, name: "Malatya", slug: "malatya", region: "Doğu Anadolu", metro: true },
  { plate: 45, name: "Manisa", slug: "manisa", region: "Ege", metro: true },
  { plate: 46, name: "Kahramanmaraş", slug: "kahramanmaras", region: "Akdeniz", metro: true },
  { plate: 47, name: "Mardin", slug: "mardin", region: "Güneydoğu Anadolu", metro: true },
  { plate: 48, name: "Muğla", slug: "mugla", region: "Ege", metro: true },
  { plate: 49, name: "Muş", slug: "mus", region: "Doğu Anadolu", metro: false },
  { plate: 50, name: "Nevşehir", slug: "nevsehir", region: "İç Anadolu", metro: false },
  { plate: 51, name: "Niğde", slug: "nigde", region: "İç Anadolu", metro: false },
  { plate: 52, name: "Ordu", slug: "ordu", region: "Karadeniz", metro: true },
  { plate: 53, name: "Rize", slug: "rize", region: "Karadeniz", metro: false },
  { plate: 54, name: "Sakarya", slug: "sakarya", region: "Marmara", metro: true },
  { plate: 55, name: "Samsun", slug: "samsun", region: "Karadeniz", metro: true },
  { plate: 56, name: "Siirt", slug: "siirt", region: "Güneydoğu Anadolu", metro: false },
  { plate: 57, name: "Sinop", slug: "sinop", region: "Karadeniz", metro: false },
  { plate: 58, name: "Sivas", slug: "sivas", region: "İç Anadolu", metro: false },
  { plate: 59, name: "Tekirdağ", slug: "tekirdag", region: "Marmara", metro: true },
  { plate: 60, name: "Tokat", slug: "tokat", region: "Karadeniz", metro: false },
  { plate: 61, name: "Trabzon", slug: "trabzon", region: "Karadeniz", metro: true },
  { plate: 62, name: "Tunceli", slug: "tunceli", region: "Doğu Anadolu", metro: false },
  { plate: 63, name: "Şanlıurfa", slug: "sanliurfa", region: "Güneydoğu Anadolu", metro: true },
  { plate: 64, name: "Uşak", slug: "usak", region: "Ege", metro: false },
  { plate: 65, name: "Van", slug: "van", region: "Doğu Anadolu", metro: true },
  { plate: 66, name: "Yozgat", slug: "yozgat", region: "İç Anadolu", metro: false },
  { plate: 67, name: "Zonguldak", slug: "zonguldak", region: "Karadeniz", metro: false },
  { plate: 68, name: "Aksaray", slug: "aksaray", region: "İç Anadolu", metro: false },
  { plate: 69, name: "Bayburt", slug: "bayburt", region: "Karadeniz", metro: false },
  { plate: 70, name: "Karaman", slug: "karaman", region: "İç Anadolu", metro: false },
  { plate: 71, name: "Kırıkkale", slug: "kirikkale", region: "İç Anadolu", metro: false },
  { plate: 72, name: "Batman", slug: "batman", region: "Güneydoğu Anadolu", metro: false },
  { plate: 73, name: "Şırnak", slug: "sirnak", region: "Güneydoğu Anadolu", metro: false },
  { plate: 74, name: "Bartın", slug: "bartin", region: "Karadeniz", metro: false },
  { plate: 75, name: "Ardahan", slug: "ardahan", region: "Doğu Anadolu", metro: false },
  { plate: 76, name: "Iğdır", slug: "igdir", region: "Doğu Anadolu", metro: false },
  { plate: 77, name: "Yalova", slug: "yalova", region: "Marmara", metro: true },
  { plate: 78, name: "Karabük", slug: "karabuk", region: "Karadeniz", metro: false },
  { plate: 79, name: "Kilis", slug: "kilis", region: "Güneydoğu Anadolu", metro: false },
  { plate: 80, name: "Osmaniye", slug: "osmaniye", region: "Akdeniz", metro: true },
  { plate: 81, name: "Düzce", slug: "duzce", region: "Karadeniz", metro: true },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getRelatedCities(slug: string, count = 6): City[] {
  const current = getCityBySlug(slug);
  if (!current) return [];
  const sameRegion = CITIES.filter(
    (c) => c.region === current.region && c.slug !== current.slug
  );
  const rest = CITIES.filter(
    (c) => c.region !== current.region && c.slug !== current.slug
  );
  const pickOrder = [...sameRegion, ...rest];
  return pickOrder.slice(0, count);
}

export const REGIONS: Region[] = [
  "Marmara",
  "Ege",
  "Akdeniz",
  "İç Anadolu",
  "Karadeniz",
  "Doğu Anadolu",
  "Güneydoğu Anadolu",
];
