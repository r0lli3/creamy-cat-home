import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SocialProof } from '@/components/sections/SocialProof'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pt-24 md:px-6 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex min-h-[calc(100svh-6.75rem)] flex-col gap-4 md:grid md:min-h-0 md:grid-cols-[1.02fr_0.98fr] md:items-center md:gap-8">
          <FadeIn className="order-2 flex flex-1 flex-col md:order-1 md:block">
            <div className="mb-4 inline-flex rounded-full border border-white/50 bg-white/55 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cch-primary backdrop-blur md:mb-6">
              Premium Cat Home
            </div>

            <h1 className="max-w-xl font-serif text-[clamp(3rem,13vw,4.6rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-cch-black md:text-7xl md:leading-[0.95] md:tracking-tight">
              Premium cat care, done <span className="text-brand-glow">right</span>
            </h1>

            <p className="mt-3 max-w-xl text-[1rem] leading-7 text-cch-muted md:mt-6 md:text-lg md:leading-8">
              A warm, loving home-away-from-home for your cat while you&apos;re away. Personalised care, daily updates, and total peace of mind.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/50 bg-white/55 px-3 py-1.5 text-[0.95rem] font-medium text-cch-muted backdrop-blur">
                Calm private rooms
              </span>
              <span className="rounded-full border border-white/50 bg-white/55 px-3 py-1.5 text-[0.95rem] font-medium text-cch-muted backdrop-blur">
                Daily photo updates
              </span>
            </div>

            <div className="hidden md:mt-8 md:block md:pb-0 md:pt-0">
              <p className="mb-4 max-w-md text-sm leading-6 text-cch-black/55">
                Tap to book and we&apos;ll tailor the stay around your cat&apos;s routine.
              </p>

              <div className="grid gap-3 sm:max-w-md sm:grid-cols-2">
                <Button href="#contact" className="justify-center py-4 text-base">
                  Book a Stay
                </Button>
                <Button href="#services" variant="outline" className="justify-center py-4 text-base">
                  Explore Services
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 md:order-2">
            <div className="editorial-shadow relative overflow-hidden rounded-[2rem] p-3 md:rounded-[2.25rem] md:p-4">
              <div className="relative h-[34svh] min-h-[15rem] max-h-[21rem] overflow-hidden rounded-[1.6rem] md:aspect-[0.92] md:h-auto md:max-h-none md:rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1770489119613-c629b47063f2?auto=format&fit=crop&w=900&q=80"
                  alt="Cat being lovingly cared for at Creamy Cat Home"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,28,22,0.06)_0%,rgba(34,28,22,0.12)_34%,rgba(34,28,22,0.52)_100%)]" />
              </div>

              <div className="pointer-events-none absolute inset-x-8 bottom-9">
                <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Boutique Sanctuary
                </span>
                <h2 className="max-w-sm font-serif text-3xl font-extrabold leading-tight text-white drop-shadow md:text-4xl">
                  The warmest place for your cat.
                </h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="order-3 mt-auto md:hidden">
            <div className="sticky bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-20 rounded-[1.75rem] border border-white/55 bg-[#fef9ef]/82 p-3 shadow-[0_24px_50px_-30px_rgba(34,28,22,0.28)] backdrop-blur-xl">
              <p className="mb-3 px-1 text-sm leading-6 text-cch-black/55">
                Tap to book and we&apos;ll tailor the stay around your cat&apos;s routine.
              </p>
              <div className="grid gap-2.5">
                <Button href="#contact" className="justify-center py-4 text-base">
                  Book a Stay
                </Button>
                <Button href="#services" variant="outline" className="justify-center py-3.5 text-base">
                  Explore Services
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-[2rem] border border-white/45 bg-white/45 px-4 py-1 backdrop-blur md:mt-10 md:px-6">
        <SocialProof />
      </div>
    </section>
  )
}
