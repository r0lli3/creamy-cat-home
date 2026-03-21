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
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>The difference</SectionLabel>
          <h2 className="mb-12 max-w-2xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
            Why choose Creamy Cat Home over <em className="italic">everyone</em> else?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="soft-ui-card rounded-[2rem] p-7">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cch-black/40">Other Kennels</h3>
              <ul className="space-y-4">
                {rows.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cch-oak/45 text-xs text-cch-black/35">✕</div>
                    <span className="text-sm text-cch-black/40 line-through">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="soft-ui-card-dark rounded-[2rem] p-7">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cch-parchment/60">Creamy Cat Home</h3>
              <ul className="space-y-4">
                {rows.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-xs text-cch-parchment">✓</div>
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
