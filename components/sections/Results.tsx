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
    <section id="gallery" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        {caseStudies.map((cs, i) => (
          <FadeIn key={i}>
            <div className={`soft-ui-card overflow-hidden rounded-[2rem] p-5 md:grid md:grid-cols-2 md:items-center md:gap-10 md:p-6 ${cs.flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="p-2 md:p-4">
                <SectionLabel>{cs.label}</SectionLabel>
                <h2 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-cch-black md:text-4xl">
                  {cs.heading}{' '}
                  <em className="italic">{cs.headingItalic}</em>
                  {cs.headingEnd ? ` ${cs.headingEnd}` : ''}
                </h2>
                <p className="mb-8 leading-7 text-cch-muted">{cs.body}</p>
                <div className="grid grid-cols-2 gap-4">
                  {cs.metrics.map(m => (
                    <div key={m.label} className="rounded-[1.4rem] border border-white/55 bg-white/55 px-4 py-4 backdrop-blur">
                      <p className="font-serif text-3xl font-extrabold text-cch-black">{m.value}</p>
                      <p className="mt-1 text-sm font-semibold text-cch-black">{m.label}</p>
                      <p className="mt-0.5 text-xs text-cch-black/40">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="editorial-shadow relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.75rem] md:mt-0">
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
