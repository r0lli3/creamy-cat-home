import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const team = [
  { name: 'Emma Clarke', role: 'Head of Cat Care', emoji: '👩', bg: 'from-cch-oak to-cch-linen' },
  { name: 'James Patel', role: 'Senior Caretaker', emoji: '👨', bg: 'from-cch-ash to-cch-oak' },
  { name: 'Lily Chen', role: 'Grooming Specialist', emoji: '👩‍🦱', bg: 'from-cch-linen to-cch-ash' },
]

export function Team() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Our team</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-xl">
          Meet the team behind your cat&apos;s{' '}
          <em className="italic">happiness</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {team.map(m => (
            <div key={m.name} className="bg-cch-linen rounded-3xl p-6 border border-cch-oak">
              <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${m.bg} flex items-center justify-center text-7xl mb-6`}>
                {m.emoji}
              </div>
              <h3 className="font-serif text-xl font-bold text-cch-black">{m.name}</h3>
              <p className="text-sm text-cch-ash mt-1">{m.role}</p>
            </div>
          ))}
        </div>
        {/* Recruitment CTA */}
        <div className="bg-cch-linen rounded-3xl p-10 border border-cch-oak text-center">
          <h3 className="font-serif text-2xl font-bold text-cch-black mb-3">Want to join the team?</h3>
          <p className="text-cch-black/60 mb-6">We&apos;re always looking for passionate cat lovers to join our family.</p>
          <Button href="mailto:hello@creamycathome.com" variant="outline">Apply now</Button>
        </div>
      </div>
    </section>
  )
}
