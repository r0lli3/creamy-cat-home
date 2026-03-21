export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="mb-4 inline-flex rounded-full border border-white/50 bg-white/50 px-3 py-1 text-[0.65rem] font-sans font-bold uppercase tracking-[0.28em] text-cch-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur">
      {children}
    </span>
  )
}
