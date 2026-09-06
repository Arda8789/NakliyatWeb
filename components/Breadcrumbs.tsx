import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Anasayfa", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          full.map((i) => ({ name: i.name, url: `${SITE_URL}${i.href}` }))
        )}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && <span className="text-slate-600">/</span>}
              {index === full.length - 1 ? (
                <span className="text-slate-300">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
