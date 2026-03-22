'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Services() {
  const { copy } = useLanguage()
  const services = copy.services.items

  return (
    <section id="services" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>{copy.services.label}</SectionLabel>
          <h2 className="mb-12 max-w-xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
            {copy.services.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="soft-ui-card rounded-[2.4rem] p-6 md:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1.55rem] border border-white/60 bg-[linear-gradient(135deg,#F5E0BA_0%,#DFCA9B_100%)] text-2xl text-cch-primary shadow-[0_12px_24px_-16px_rgba(110,89,46,0.45)]">
                  {services[0].icon}
                </div>
                <span className="rounded-full border border-white/55 bg-white/65 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-cch-primary">
                  {copy.services.premium}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-cch-black">{services[0].title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-cch-muted">{services[0].description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="soft-ui-card rounded-[2.15rem] p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[1.35rem] border border-white/60 bg-white/65 text-xl text-cch-primary">
                  {services[1].icon}
                </div>
                <h3 className="font-serif text-xl font-extrabold text-cch-black">{services[1].title}</h3>
                <p className="mt-2 text-sm leading-6 text-cch-muted">{services[1].description}</p>
              </div>

              <div className="soft-ui-card-dark rounded-[2.15rem] p-5 text-cch-parchment">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[1.35rem] border border-white/20 bg-white/15 text-xl">
                  {services[2].icon}
                </div>
                <h3 className="font-serif text-xl font-extrabold">{services[2].title}</h3>
                <p className="mt-2 text-sm leading-6 text-cch-parchment/80">{services[2].description}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
