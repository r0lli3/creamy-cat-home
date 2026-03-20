import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SocialProof } from '@/components/sections/SocialProof'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-16">
      <div className="flex-1 flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Text */}
          <FadeIn>
            <p className="text-sm font-medium text-cch-oak tracking-widest uppercase mb-6">Premium Cat Home</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-cch-black leading-tight mb-6">
              Premium cat care, done{' '}
              <em className="not-italic italic text-cch-oak">right</em>
            </h1>
            <p className="text-cch-black/60 text-lg leading-relaxed mb-8 max-w-md">
              A warm, loving home-away-from-home for your cat while you&apos;re away. Personalised care, daily updates, and total peace of mind.
            </p>
            <Button href="#contact" className="text-base px-8 py-4">Book a Stay</Button>
          </FadeIn>

          {/* Visual */}
          <FadeIn delay={0.15} className="relative">
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-cch-oak via-cch-linen to-cch-ash flex items-center justify-center">
              <span className="text-9xl">🐱</span>
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-cch-parchment rounded-2xl px-4 py-3 shadow-lg border border-cch-oak">
              <p className="text-xs text-cch-oak font-medium">Happy guests</p>
              <p className="text-cch-black font-bold">500+ cats hosted</p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Ticker — anchored to bottom of hero, always above the fold */}
      <SocialProof />
    </section>
  )
}
