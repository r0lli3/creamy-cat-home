'use client'

import Image from 'next/image'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function CTASection() {
  const { copy } = useLanguage()

  return (
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="soft-ui-card rounded-[2.6rem] p-10 text-center md:p-16">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-[1.6rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.64)_100%)] shadow-[0_16px_28px_-18px_rgba(110,89,46,0.3)]">
              <Image
                src="/creamyCatLogoTrans.png"
                alt={`${copy.nav.brand} logo`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <SectionLabel>{copy.cta.label}</SectionLabel>
            <h2 className="mx-auto mb-6 max-w-2xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-6xl">
              {copy.cta.title}
            </h2>
            <p className="mx-auto mb-10 max-w-md text-lg text-cch-muted">
              {copy.cta.body}
            </p>
            <Button href="mailto:hello@creamycathome.com" className="text-base px-10 py-4">{copy.cta.button}</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
