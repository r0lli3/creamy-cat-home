import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconBox } from '@/components/ui/IconBox'

export function Mission() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-cch-linen rounded-3xl p-10 md:p-16 border border-cch-oak">
          <SectionLabel>Our mission</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-8 max-w-2xl">
            Turning worried owners into{' '}
            <em className="italic">confident</em> cat parents
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-cch-black/60 text-base leading-relaxed mb-10">
            <p>
              We know how hard it is to leave your cat behind. That&apos;s why we&apos;ve built a space that feels less like a kennel and more like a second home — warm, calm, and full of love.
            </p>
            <p>
              Every cat in our care receives individual attention, tailored feeding schedules, and daily photo updates so you can relax knowing your furry family member is in safe hands.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IconBox size="sm">🐾</IconBox>
            <span className="font-serif font-bold text-cch-black text-lg">Creamy Cat Home</span>
          </div>
        </div>
      </div>
    </section>
  )
}
