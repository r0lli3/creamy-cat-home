'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SocialProof } from '@/components/sections/SocialProof'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Hero() {
  const { copy } = useLanguage()

  return (
    <section id="home" className="relative isolate overflow-hidden md:px-6 md:pt-28">
      <div className="md:mx-auto md:max-w-6xl">
        <FadeIn className="md:hidden">
          <div className="relative left-1/2 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1770489119613-c629b47063f2?auto=format&fit=crop&w=900&q=80"
              alt={copy.hero.imageAlt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,28,22,0.18)_0%,rgba(29,28,22,0.14)_18%,rgba(29,28,22,0.3)_42%,rgba(29,28,22,0.9)_100%)]" />

            <div className="absolute inset-x-6 bottom-[calc(env(safe-area-inset-bottom)+1.25rem)]">
              <h1 className="max-w-[12ch] font-serif text-[clamp(3rem,13vw,4.35rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-[#fffaf0] drop-shadow-[0_2px_14px_rgba(0,0,0,0.22)]">
                {copy.hero.title}
              </h1>

              <p className="mt-4 max-w-[19rem] text-[1rem] leading-7 text-[#f8f2e8] drop-shadow-[0_1px_10px_rgba(0,0,0,0.22)]">
                {copy.hero.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/24 bg-white/10 px-3 py-1.5 text-[0.95rem] font-medium text-[#f8f2e8] shadow-[0_1px_10px_rgba(0,0,0,0.18)] backdrop-blur">
                  {copy.hero.pills[0]}
                </span>
                <span className="rounded-full border border-white/24 bg-white/10 px-3 py-1.5 text-[0.95rem] font-medium text-[#f8f2e8] shadow-[0_1px_10px_rgba(0,0,0,0.18)] backdrop-blur">
                  {copy.hero.pills[1]}
                </span>
              </div>

              <div className="mt-6 mb-4 grid grid-cols-2 gap-2.5">
                <Button
                  href="#services"
                  variant="outline"
                  className="justify-center border-white/28 bg-white/14 py-4 text-base text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-white/18 hover:text-white"
                >
                  {copy.hero.ctaServices}
                </Button>
                <Button href="#contact" className="mr-16 justify-center py-4 text-base">{copy.hero.ctaBook}</Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="hidden md:grid md:grid-cols-[1.02fr_0.98fr] md:items-center md:gap-8">
          <FadeIn className="md:block">
            <h1 className="max-w-xl font-serif text-7xl font-extrabold leading-[0.95] tracking-tight text-cch-black">
              {copy.hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-cch-muted">
              {copy.hero.body}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/50 bg-white/55 px-3 py-1.5 text-[0.95rem] font-medium text-cch-muted backdrop-blur">
                {copy.hero.pills[0]}
              </span>
              <span className="rounded-full border border-white/50 bg-white/55 px-3 py-1.5 text-[0.95rem] font-medium text-cch-muted backdrop-blur">
                {copy.hero.pills[1]}
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:max-w-md sm:grid-cols-2">
              <Button href="#contact" className="justify-center py-4 text-base">{copy.hero.ctaBook}</Button>
              <Button href="#services" variant="outline" className="justify-center py-4 text-base">
                {copy.hero.ctaServices}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="editorial-shadow relative overflow-hidden rounded-[2rem] p-3 md:rounded-[2.25rem] md:p-4">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1770489119613-c629b47063f2?auto=format&fit=crop&w=900&q=80"
                  alt={copy.hero.imageAlt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,28,22,0.06)_0%,rgba(34,28,22,0.12)_34%,rgba(34,28,22,0.52)_100%)]" />
              </div>

              <div className="pointer-events-none absolute inset-x-8 bottom-9">
                <h2 className="max-w-sm font-serif text-4xl font-extrabold leading-tight text-white drop-shadow">
                  {copy.hero.overlayTitle}
                </h2>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative mx-4 mt-6 overflow-hidden rounded-[2rem] border border-white/45 bg-white/45 px-4 py-1 backdrop-blur md:mx-auto md:mt-10 md:max-w-6xl md:px-6">
        <SocialProof />
      </div>
    </section>
  )
}
