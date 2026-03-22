'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Comparison() {
  const { copy } = useLanguage()

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{copy.comparison.label}</SectionLabel>
          <h2 className="mb-12 max-w-2xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
            {copy.comparison.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="soft-ui-card rounded-[2.4rem] p-7">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cch-black/40">{copy.comparison.other}</h3>
              <ul className="space-y-4">
                {copy.comparison.rows.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cch-oak/45 text-xs text-cch-black/35">✕</div>
                    <span className="text-sm text-cch-black/40 line-through">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="soft-ui-card-dark rounded-[2.4rem] p-7">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cch-parchment/60">{copy.comparison.ours}</h3>
              <ul className="space-y-4">
                {copy.comparison.rows.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-xs text-cch-parchment">✓</div>
                    <span className="text-cch-parchment text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
