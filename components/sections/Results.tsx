'use client'

import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/components/providers/LanguageProvider'

const photos = [
  'https://images.unsplash.com/photo-1759856897865-0396f224737c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1762396019211-3308400d4cae?auto=format&fit=crop&w=900&q=80',
]

export function Results() {
  const { copy } = useLanguage()

  return (
    <section id="gallery" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        {copy.results.items.map((cs, i) => (
          <FadeIn key={i}>
            <div className={`soft-ui-card overflow-hidden rounded-[2rem] p-5 md:grid md:grid-cols-2 md:items-center md:gap-10 md:p-6 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="p-2 md:p-4">
                <SectionLabel>{cs.label}</SectionLabel>
                <h2 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-cch-black md:text-4xl">
                  {cs.heading}
                </h2>
                <p className="mb-8 leading-7 text-cch-muted">{cs.body}</p>
                <div className="grid grid-cols-2 gap-4">
                  {cs.metrics.map(m => (
                    <div key={m.label} className="rounded-[1.4rem] border border-white/55 bg-white/55 px-4 py-4 backdrop-blur">
                      <p className="font-serif text-3xl font-extrabold text-cch-black">{m.value}</p>
                      <p className="mt-1 text-sm font-semibold text-cch-black">{m.label}</p>
                      <p className="mt-0.5 text-xs text-cch-black/40">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="editorial-shadow relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.75rem] md:mt-0">
                <Image
                  src={photos[i]}
                  alt={cs.photoAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
