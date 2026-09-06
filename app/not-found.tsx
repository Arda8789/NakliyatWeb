import Link from "next/link";
import { CallNowButton } from "@/components/PhoneCTA";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-20">
      <div className="glass-card max-w-lg p-10 text-center">
        <span className="text-gradient text-6xl font-extrabold">404</span>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Aradığınız Sayfa Bulunamadı
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Bu sayfa taşınmış veya kaldırılmış olabilir. Evden eve nakliyat ve
          asansörlü nakliyat hizmetlerimize anasayfadan ulaşabilir ya da doğrudan
          bizi arayabilirsiniz.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-outline">
            Anasayfaya Dön
          </Link>
          <CallNowButton />
        </div>
      </div>
    </div>
  );
}
