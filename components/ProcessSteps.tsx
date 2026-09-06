export function ProcessSteps({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step.title} className="glass-card p-5">
          <div className="text-gradient text-3xl font-extrabold">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-3 text-[15px] font-bold text-white">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
