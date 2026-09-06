import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={SITE_NAME}>
      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl shadow-[0_6px_20px_-6px_rgba(37,99,235,0.7)] transition-transform duration-300 group-hover:scale-105">
        <Image src="/logo.svg" alt={`${SITE_NAME} logo`} fill priority sizes="44px" />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-white">
            Merkez<span className="text-gradient">Nakliyat</span>
          </span>
          <span className="mt-0.5 text-[11px] font-medium tracking-wide text-slate-400">
            Evden Eve &amp; Asansörlü Nakliyat
          </span>
        </span>
      )}
    </Link>
  );
}
