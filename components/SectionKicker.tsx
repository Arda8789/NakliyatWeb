export function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge mb-4">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}
