"use client";

import { useState } from "react";
import { TruckIcon } from "./icons";

export function PhotoFrame({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  rounded?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`relative overflow-hidden ${aspect} ${rounded} bg-gradient-to-br from-[#16294D] to-[#0B1730] ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.14]">
          <TruckIcon className="h-20 w-20 text-white" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspect} ${rounded} bg-slate-100 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
