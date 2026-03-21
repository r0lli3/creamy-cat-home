import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { IconBox } from '@/components/ui/IconBox'
import { FadeIn } from '@/components/ui/FadeIn'

export function CTASection() {
  return (
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="soft-ui-card rounded-[2rem] p-10 text-center md:p-16">
            <IconBox size="lg" className="mx-auto mb-8">🐾</IconBox>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="mx-auto mb-6 max-w-2xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-6xl">
              Your cat&apos;s home away from home starts <em className="italic">right here</em>
            </h2>
            <p className="mx-auto mb-10 max-w-md text-lg text-cch-muted">
              Book a free consultation and let us show you why hundreds of cat owners trust us every year.
            </p>
            <Button href="mailto:hello@creamycathome.com" className="text-base px-10 py-4">Book a Stay</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
