"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      <JsonLd data={faqSchema(items)} />
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold text-slate-900">{item.q}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
