import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { IconBox } from '@/components/ui/IconBox'

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-cch-linen rounded-3xl p-10 md:p-16 text-center border border-cch-oak">
          <IconBox size="lg" className="mx-auto mb-8">🐾</IconBox>
          <SectionLabel>Get started</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cch-black mb-6 max-w-2xl mx-auto">
            Your cat&apos;s home away from home starts{' '}
            <em className="italic">right here</em>
          </h2>
          <p className="text-cch-black/60 text-lg mb-10 max-w-md mx-auto">
            Book a free consultation and let us show you why hundreds of cat owners trust us every year.
          </p>
          <Button href="mailto:hello@creamycathome.com" className="text-base px-10 py-4">Book a Stay</Button>
        </div>
      </div>
    </section>
  )
}
