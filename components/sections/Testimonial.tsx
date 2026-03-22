'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Testimonial() {
  const { copy } = useLanguage()

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="soft-ui-card relative overflow-hidden rounded-[2.5rem] p-8 md:p-10">
            <div className="absolute left-4 top-0 text-[7rem] leading-none text-cch-primary/5">&ldquo;</div>
            <blockquote className="relative mb-8 font-serif text-3xl font-extrabold leading-tight text-cch-black md:text-4xl">
              {copy.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/65 text-sm font-bold text-cch-primary">
                SM
              </div>
              <p className="text-sm font-medium text-cch-black/55">{copy.testimonial.author}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
