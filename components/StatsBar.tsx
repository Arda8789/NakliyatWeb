const STATS = [
  { value: "81", label: "İlde Hizmet" },
  { value: "15+", label: "Yıllık Tecrübe" },
  { value: "24.000+", label: "Tamamlanan Taşınma" },
  { value: "7/24", label: "Kesintisiz Destek" },
];

export function StatsBar() {
  return (
    <div className="glass-card grid grid-cols-2 gap-6 p-6 sm:p-8 md:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-gradient text-3xl font-extrabold sm:text-4xl">{s.value}</div>
          <div className="mt-1.5 text-xs font-medium text-slate-400 sm:text-sm">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
