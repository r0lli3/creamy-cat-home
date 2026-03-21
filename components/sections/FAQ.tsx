'use client'
import { useState } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { copy } = useLanguage()

  return (
    <section id="questions" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>{copy.faq.label}</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
          {copy.faq.title}
        </h2>
        <div className="space-y-3">
          {copy.faq.items.map((faq, i) => (
            <div key={i} className="soft-ui-card overflow-hidden rounded-[1.75rem]">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif font-extrabold text-cch-black">{faq.q}</span>
                <div className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/65 text-lg text-cch-primary">
                  {open === i ? '−' : '+'}
                </div>
              </button>
              {open === i && (
                <div className="border-t border-white/55 px-6 pb-5 pt-4 text-sm leading-7 text-cch-muted">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
