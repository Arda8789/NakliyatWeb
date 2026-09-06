import { CallNowButton, WhatsAppButton } from "./PhoneCTA";

export function CTASection({
  title = "Taşınma Sürecinizi Bugün Planlayalım",
  desc = "Türkiye'nin her ilinden ücretsiz keşif ve fiyat teklifi için hemen arayın. MerkezNakliyat güvencesiyle evden eve ve asansörlü nakliyat çözümleri bir telefon kadar yakın.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <div className="glass-card relative overflow-hidden p-8 text-center sm:p-14">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-orange-400/15 blur-[100px]" />
      <div className="relative">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">{desc}</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallNowButton />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
