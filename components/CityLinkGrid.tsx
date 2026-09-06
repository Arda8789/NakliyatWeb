import Link from "next/link";
import { City } from "@/lib/cities";
import { MapPinIcon } from "./icons";

export function CityLinkGrid({
  cities,
  basePath,
}: {
  cities: City[];
  basePath: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {cities.map((c) => (
        <Link
          key={c.slug}
          href={`${basePath}/${c.slug}`}
          className="card-hover flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 hover:text-white"
        >
          <MapPinIcon className="h-4 w-4 shrink-0 text-blue-400" />
          <span className="truncate">{c.name}</span>
        </Link>
      ))}
    </div>
  );
}
