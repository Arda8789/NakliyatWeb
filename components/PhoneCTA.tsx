import { PHONE_DISPLAY, PHONE_TEL_HREF, WHATSAPP_HREF } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function CallNowButton({
  className = "",
  label = "Hemen Ara",
  full = false,
}: {
  className?: string;
  label?: string;
  full?: boolean;
}) {
  return (
    <a
      href={PHONE_TEL_HREF}
      className={`btn-primary ${full ? "w-full" : ""} ${className}`}
      aria-label={`${PHONE_DISPLAY} numarasını ara`}
    >
      <PhoneIcon className="h-4.5 w-4.5" />
      <span>{label}</span>
      <span className="hidden sm:inline text-white/85">· {PHONE_DISPLAY}</span>
    </a>
  );
}

export function WhatsAppButton({
  className = "",
  full = false,
}: {
  className?: string;
  full?: boolean;
}) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-outline ${full ? "w-full" : ""} ${className}`}
      aria-label="WhatsApp üzerinden yazın"
    >
      <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-400" />
      <span>WhatsApp&apos;tan Yaz</span>
    </a>
  );
}

export function InlinePhoneLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_TEL_HREF}
      className={`font-semibold text-white underline decoration-blue-400/50 underline-offset-4 hover:text-blue-300 ${className}`}
    >
      {PHONE_DISPLAY}
    </a>
  );
}
