'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconBox } from '@/components/ui/IconBox'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Mission() {
  const { copy } = useLanguage()

  return (
    <section id="about" className="px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="soft-ui-card rounded-[2.5rem] p-8 md:p-14">
            <SectionLabel>{copy.mission.label}</SectionLabel>
            <h2 className="mb-8 max-w-2xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
              {copy.mission.title}
            </h2>
            <div className="mb-10 grid gap-8 text-base leading-8 text-cch-muted md:grid-cols-2">
              <p>{copy.mission.body[0]}</p>
              <p>{copy.mission.body[1]}</p>
            </div>
            <div className="flex items-center gap-3">
              <IconBox size="sm">🐾</IconBox>
              <span className="font-serif text-lg font-extrabold text-cch-black">{copy.nav.brand}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
