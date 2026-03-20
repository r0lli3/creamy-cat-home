import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  { icon: '💬', title: 'Consultation', description: 'We meet your cat, learn their routine, preferences, and any special needs before their first stay.' },
  { icon: '🏠', title: 'Check-in', description: 'Drop off your cat in our welcoming space. We handle the rest — feeding, playtime, and cosy naps.' },
  { icon: '📸', title: 'Daily Updates', description: 'Receive daily photo and video updates so you can see exactly how happy your cat is in our care.' },
]

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>How we work</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-xl">
          We like to keep things{' '}
          <em className="italic">simple</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-cch-oak" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="w-16 h-16 bg-cch-linen border-2 border-cch-oak rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10">
                {s.icon}
              </div>
              <p className="text-xs font-medium text-cch-ash mb-2">Step {i + 1}</p>
              <h3 className="font-serif text-xl font-bold text-cch-black mb-3">{s.title}</h3>
              <p className="text-cch-black/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
