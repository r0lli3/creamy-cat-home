import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const services = [
  {
    icon: '🌙',
    title: 'Overnight Stays',
    description: 'Your cat sleeps in a cozy, private room with soft bedding, toys, and all the attention they deserve.',
  },
  {
    icon: '☀️',
    title: 'Daycare',
    description: 'Drop off your cat for a day of play, socialisation, and naps in a warm, supervised environment.',
  },
  {
    icon: '✂️',
    title: 'Grooming',
    description: 'From brush-outs to full grooms, we keep your cat looking and feeling their absolute best.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-xl">
            How we care for your{' '}
            <em className="italic">cat</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-cch-linen rounded-2xl p-8 border border-cch-oak">
                <div className="w-12 h-12 bg-cch-parchment rounded-xl flex items-center justify-center text-2xl mb-6 border border-cch-oak">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-cch-black mb-3">{s.title}</h3>
                <p className="text-cch-black/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
