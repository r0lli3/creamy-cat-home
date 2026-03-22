'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SocialProof } from '@/components/sections/SocialProof'
import { useLanguage } from '@/components/providers/LanguageProvider'

const heroImage = '/cats/hero-room.png'
const heroGallery = [
  '/cats/cat-01.png',
  '/cats/cat-02.png',
  '/cats/cat-03.png',
  '/cats/cat-04.jpeg',
  '/cats/cat-05.png',
  '/cats/cat-06.jpeg',
  '/cats/cat-07.png',
  '/cats/cat-08.jpg',
]

export function Hero() {
  const { copy } = useLanguage()

  return (
    <section id="home" className="relative isolate overflow-hidden md:px-6 md:pt-28">
      <div className="md:mx-auto md:max-w-6xl">
        <FadeIn className="md:hidden">
          <div className="relative left-1/2 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden">
            <Image
              src={heroImage}
              alt={copy.hero.imageAlt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,28,22,0.08)_0%,rgba(29,28,22,0.18)_18%,rgba(29,28,22,0.3)_44%,rgba(29,28,22,0.88)_100%)]" />

            <div className="absolute inset-x-6 top-[11svh] flex flex-col items-center text-center">
              <h1 className="max-w-[10ch] font-serif text-[clamp(3rem,13vw,4.35rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-[#fffaf0] drop-shadow-[0_2px_14px_rgba(0,0,0,0.22)]">
                {copy.hero.title}
              </h1>

              <p className="mt-4 max-w-[19rem] text-[1rem] leading-7 text-[#f8f2e8] drop-shadow-[0_1px_10px_rgba(0,0,0,0.22)]">
                {copy.hero.body}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-white/24 bg-white/10 px-3 py-1.5 text-[0.95rem] font-medium text-[#f8f2e8] shadow-[0_1px_10px_rgba(0,0,0,0.18)] backdrop-blur">
                  {copy.hero.pills[0]}
                </span>
                <span className="rounded-full border border-white/24 bg-white/10 px-3 py-1.5 text-[0.95rem] font-medium text-[#f8f2e8] shadow-[0_1px_10px_rgba(0,0,0,0.18)] backdrop-blur">
                  {copy.hero.pills[1]}
                </span>
              </div>

              <div className="mt-6 w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex snap-x snap-mandatory gap-3 px-1">
                  {heroGallery.map((imageSrc, index) => (
                    <div
                      key={imageSrc}
                      className="relative h-28 w-24 shrink-0 snap-start overflow-hidden rounded-[1.35rem] border border-white/25 bg-white/10 shadow-[0_16px_28px_-18px_rgba(0,0,0,0.45)] backdrop-blur"
                    >
                      <Image
                        src={imageSrc}
                        alt={`Creamy Cat Home gallery image ${index + 1}`}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 w-full max-w-[19rem]">
                <Button href="#contact" className="w-full justify-center py-4 text-base">{copy.hero.ctaBook}</Button>
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

            <div className="mt-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-3 pr-4">
                {heroGallery.map((imageSrc, index) => (
                  <div
                    key={imageSrc}
                    className="relative h-28 w-24 shrink-0 overflow-hidden rounded-[1.35rem] border border-white/45 bg-white/55 shadow-[0_16px_28px_-18px_rgba(110,89,46,0.28)]"
                  >
                    <Image
                      src={imageSrc}
                      alt={`Creamy Cat Home gallery image ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:max-w-sm">
              <Button href="#contact" className="w-full justify-center py-4 text-base">{copy.hero.ctaBook}</Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="editorial-shadow relative overflow-hidden rounded-[2rem] p-3 md:rounded-[2.25rem] md:p-4">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem]">
                <Image
                  src={heroImage}
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
