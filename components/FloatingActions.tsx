import { PHONE_TEL_HREF, WHATSAPP_HREF, PHONE_DISPLAY } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function MobileCallBar() {
  return (
    <div
      className="glass-panel fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t px-3 py-3 sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={PHONE_TEL_HREF}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(234,88,12,0.6)] active:scale-[0.98]"
      >
        <PhoneIcon className="h-4.5 w-4.5" />
        Hemen Ara · {PHONE_DISPLAY}
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-emerald-600"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

export function DesktopFloatingActions() {
  return (
    <div className="fixed bottom-7 right-7 z-40 hidden flex-col gap-3 sm:flex">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yazın"
        className="glass-card flex h-14 w-14 items-center justify-center rounded-full text-emerald-600 transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={PHONE_TEL_HREF}
        aria-label="Hemen ara"
        className="flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_10px_28px_-6px_rgba(234,88,12,0.65)] transition-transform hover:scale-110"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
