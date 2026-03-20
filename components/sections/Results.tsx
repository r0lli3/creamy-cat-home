import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const caseStudies = [
  {
    label: 'Case study',
    heading: "Caring for a family's most precious",
    headingItalic: 'companion',
    headingEnd: '',
    body: "A family of four were nervous first-time cat hotel guests. Within 24 hours of their cat's first stay, they received a photo update and a personalised report — and they've been back every holiday since.",
    metrics: [
      { value: '500+', label: 'Cats Hosted', sub: 'Since we opened our doors' },
      { value: '98%', label: 'Return Rate', sub: 'From satisfied cat parents' },
    ],
    photo: 'https://images.unsplash.com/photo-1759856897865-0396f224737c?auto=format&fit=crop&w=900&q=80',
    photoAlt: 'A cat relaxing contentedly in a sunlit room',
    flip: false,
  },
  {
    label: 'Case study',
    heading: 'Building',
    headingItalic: 'trust',
    headingEnd: 'one stay at a time',
    body: "A solo traveller worried about leaving their senior cat for two weeks. Our dedicated senior care programme, daily video calls, and specialist diet management gave them complete peace of mind.",
    metrics: [
      { value: '4.9★', label: 'Average Rating', sub: 'Across all reviews' },
      { value: '100%', label: 'Update Rate', sub: 'Daily photo updates sent' },
    ],
    photo: 'https://images.unsplash.com/photo-1762396019211-3308400d4cae?auto=format&fit=crop&w=900&q=80',
    photoAlt: 'Owner smiling at their cat, comfortable and at ease',
    flip: true,
  },
]

export function Results() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {caseStudies.map((cs, i) => (
          <FadeIn key={i}>
            <div className={`grid md:grid-cols-2 gap-12 items-center ${cs.flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {/* Text */}
              <div>
                <SectionLabel>{cs.label}</SectionLabel>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-cch-black mb-4">
                  {cs.heading}{' '}
                  <em className="italic">{cs.headingItalic}</em>
                  {cs.headingEnd ? ` ${cs.headingEnd}` : ''}
                </h2>
                <p className="text-cch-black/60 leading-relaxed mb-8">{cs.body}</p>
                <div className="grid grid-cols-2 gap-6">
                  {cs.metrics.map(m => (
                    <div key={m.label}>
                      <p className="font-serif text-3xl font-bold text-cch-black">{m.value}</p>
                      <p className="text-sm font-medium text-cch-black mt-1">{m.label}</p>
                      <p className="text-xs text-cch-black/40 mt-0.5">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-video">
                <Image
                  src={cs.photo}
                  alt={cs.photoAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
