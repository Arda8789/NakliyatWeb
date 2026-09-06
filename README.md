# MerkezNakliyat

SEO odaklı kurumsal web sitesi — Evden Eve Nakliyat ve Asansörlü Nakliyat Hizmeti.
Next.js (App Router) + TypeScript + Tailwind CSS ile geliştirildi, Vercel üzerinde
statik olarak yayınlanmak üzere tasarlandı.

## Öne Çıkanlar

- Türkiye'nin 81 ili için otomatik üretilen, her ikisi de servis bazlı iki ayrı
  şehir sayfası (`/evden-eve-nakliyat/[il]`, `/asansorlu-nakliyat-hizmeti/[il]`)
- 7 ana hizmet sayfası, nakliyat rehberi (blog) ve kurumsal sayfalar
- `sitemap.xml`, `robots.txt`, JSON-LD (MovingCompany, Service, FAQPage,
  BreadcrumbList) ve sayfa bazlı meta veriler
- Mobilde her zaman görünen "Hemen Ara" çağrı çubuğu ve WhatsApp yönlendirmesi

## Geliştirme

```bash
npm install
npm run dev
```

`http://localhost:3000` adresinden görüntüleyin.

## Ortam Değişkenleri

`NEXT_PUBLIC_SITE_URL` — sitenin canlı adresi (canonical URL, sitemap ve JSON-LD
için kullanılır). Vercel proje ayarlarından production domain'inizi tanımlayın,
örn: `https://merkeznakliyat.com`.

## Yapı

- `app/` — sayfalar ve route'lar (App Router)
- `components/` — paylaşılan arayüz bileşenleri
- `lib/` — şehir verisi, içerik şablonları, SEO/schema yardımcıları, blog yazıları

## Vercel'e Yayınlama

Depoyu [vercel.com/new](https://vercel.com/new) üzerinden içe aktarın; Next.js
otomatik olarak algılanır ve ek yapılandırma gerekmez.
