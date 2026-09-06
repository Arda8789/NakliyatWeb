"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { CallNowButton } from "./PhoneCTA";
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "./icons";
import { NAV_SERVICES, PHONE_TEL_HREF } from "@/lib/site";

const NAV_LINKS = [
  { title: "Şehirler", href: "/sehirler" },
  { title: "Blog", href: "/blog" },
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-panel sticky top-0 z-50 border-b">
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white">
              Hizmetlerimiz
              <ChevronDownIcon className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-20 w-80 translate-y-2 rounded-2xl p-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="glass-card !bg-[#0a1120]/95 p-2">
                {NAV_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-xl px-4 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallNowButton className="hidden sm:inline-flex" />
          <a
            href={PHONE_TEL_HREF}
            className="btn-primary !px-3.5 sm:hidden"
            aria-label="Hemen ara"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label="Menü"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-panel border-t px-5 pb-6 pt-2 lg:hidden">
          <p className="px-2 pb-2 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Hizmetlerimiz
          </p>
          {NAV_SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-2 py-2.5 text-[15px] text-slate-200 hover:text-white"
            >
              {s.title}
            </Link>
          ))}
          <div className="mt-2 border-t border-white/10 pt-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-2 py-2.5 text-[15px] text-slate-200 hover:text-white"
              >
                {l.title}
              </Link>
            ))}
          </div>
          <CallNowButton full className="mt-4" />
        </div>
      )}
    </header>
  );
}
