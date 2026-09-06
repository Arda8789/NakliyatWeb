"use client";

import { useState } from "react";
import { WHATSAPP_HREF } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Merhaba, MerkezNakliyat'tan bilgi almak istiyorum.%0AAd Soyad: ${encodeURIComponent(
      name
    )}%0ATelefon: ${encodeURIComponent(phone)}%0AŞehir: ${encodeURIComponent(
      city
    )}%0AMesaj: ${encodeURIComponent(message)}`;
    window.open(`${WHATSAPP_HREF}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-slate-400">Ad Soyad</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:outline-none"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-400">Telefon</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:outline-none"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-slate-400">Şehir</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:outline-none"
          placeholder="Örn. İstanbul"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-slate-400">Mesajınız</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400/50 focus:outline-none"
          placeholder="Taşınma tarihiniz ve eşya durumunuz hakkında kısaca bilgi verin"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        WhatsApp&apos;tan Gönder
      </button>
      <p className="text-center text-xs text-slate-500">
        Form, mesajınızı WhatsApp üzerinden iletmenizi sağlar. Daha hızlı yanıt için
        doğrudan arayabilirsiniz.
      </p>
    </form>
  );
}
