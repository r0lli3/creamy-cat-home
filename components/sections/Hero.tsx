import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SocialProof } from '@/components/sections/SocialProof'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pt-24 md:px-6 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="md:hidden">
          <div className="editorial-shadow relative min-h-[calc(100svh-8.25rem)] overflow-hidden rounded-[2.25rem] p-3">
            <div className="absolute inset-3 overflow-hidden rounded-[1.9rem]">
              <Image
                src="https://images.unsplash.com/photo-1770489119613-c629b47063f2?auto=format&fit=crop&w=900&q=80"
                alt="Cat being lovingly cared for at Creamy Cat Home"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,28,22,0.16)_0%,rgba(29,28,22,0.08)_18%,rgba(29,28,22,0.16)_40%,rgba(29,28,22,0.78)_100%)]" />
            </div>

            <div className="absolute inset-x-8 top-8">
              <span className="inline-flex rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md">
                Boutique Sanctuary
              </span>
            </div>

            <div className="absolute inset-x-8 bottom-[calc(env(safe-area-inset-bottom)+1.5rem)]">
              <div className="inline-flex rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                Premium Cat Home
              </div>

              <h1 className="mt-4 max-w-[12.5ch] font-serif text-[clamp(3rem,13vw,4.4rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-white">
                Premium cat care, done right
              </h1>

              <p className="mt-4 max-w-[18.5rem] text-[1rem] leading-7 text-white/82">
                A warm, loving home-away-from-home for your cat while you&apos;re away. Personalised care, daily updates, and total peace of mind.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[0.95rem] font-medium text-white/90 backdrop-blur">
                  Calm private rooms
                </span>
                <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[0.95rem] font-medium text-white/90 backdrop-blur">
                  Daily photo updates
                </span>
              </div>

              <div className="mt-5 grid gap-2.5">
                <Button href="#contact" className="justify-center py-4 text-base">
                  Book a Stay
                </Button>
                <Button
                  href="#services"
                  variant="outline"
                  className="justify-center border-white/20 bg-white/10 py-3.5 text-base text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-white/15 hover:text-white"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="hidden md:grid md:grid-cols-[1.02fr_0.98fr] md:items-center md:gap-8">
          <FadeIn className="md:block">
            <div className="mb-6 inline-flex rounded-full border border-white/50 bg-white/55 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cch-primary backdrop-blur">
              Premium Cat Home
            </div>

            <h1 className="max-w-xl font-serif text-7xl font-extrabold leading-[0.95] tracking-tight text-cch-black">
              Premium cat care, done <span className="text-brand-glow">right</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-cch-muted">
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

            <div className="mt-8 grid gap-3 sm:max-w-md sm:grid-cols-2">
              <Button href="#contact" className="justify-center py-4 text-base">
                Book a Stay
              </Button>
              <Button href="#services" variant="outline" className="justify-center py-4 text-base">
                Explore Services
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="editorial-shadow relative overflow-hidden rounded-[2rem] p-3 md:rounded-[2.25rem] md:p-4">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem]">
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
                <h2 className="max-w-sm font-serif text-4xl font-extrabold leading-tight text-white drop-shadow">
                  The warmest place for your cat.
                </h2>
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
