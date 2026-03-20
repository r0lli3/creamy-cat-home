import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const rows = [
  'Personal daily photo & video updates',
  'Individual attention for each cat',
  'Specialist senior & kitten care',
  'Home-cooked meal options',
  'Vet-on-call access',
  'Flexible drop-off & pick-up times',
]

export function Comparison() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>The difference</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-2xl">
            Why choose Creamy Cat Home over{' '}
            <em className="italic">everyone</em> else?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Other kennels */}
            <div className="bg-cch-linen rounded-3xl p-8 border border-cch-oak">
              <h3 className="font-sans font-semibold text-cch-black/40 text-sm mb-6 uppercase tracking-widest">Other Kennels</h3>
              <ul className="space-y-4">
                {rows.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cch-oak/50 flex items-center justify-center text-cch-black/30 text-xs flex-shrink-0 mt-0.5">✕</div>
                    <span className="text-cch-black/40 text-sm line-through">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Creamy Cat Home */}
            <div className="bg-cch-black rounded-3xl p-8">
              <h3 className="font-sans font-semibold text-cch-parchment/60 text-sm mb-6 uppercase tracking-widest">Creamy Cat Home</h3>
              <ul className="space-y-4">
                {rows.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cch-ash/30 flex items-center justify-center text-cch-ash text-xs flex-shrink-0 mt-0.5">✓</div>
                    <span className="text-cch-parchment text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
