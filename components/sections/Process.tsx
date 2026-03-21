import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const steps = [
  { icon: '💬', title: 'Consultation', description: 'We meet your cat, learn their routine, preferences, and any special needs before their first stay.' },
  { icon: '🏠', title: 'Check-in', description: 'Drop off your cat in our welcoming space. We handle the rest — feeding, playtime, and cosy naps.' },
  { icon: '📸', title: 'Daily Updates', description: 'Receive daily photo and video updates so you can see exactly how happy your cat is in our care.' },
]

export function Process() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mb-12 max-w-xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
            We like to keep things <em className="italic">simple</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="soft-ui-card rounded-[1.8rem] p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/60 bg-white/65 text-2xl text-cch-primary">
                  {s.icon}
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-cch-primary/70">Step {i + 1}</p>
                <h3 className="mb-3 font-serif text-xl font-extrabold text-cch-black">{s.title}</h3>
                <p className="text-sm leading-7 text-cch-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
