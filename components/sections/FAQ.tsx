'use client'
import { useState } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const faqs = [
  {
    q: 'How long can my cat stay?',
    a: 'Cats can stay from a single overnight up to several weeks. We accommodate short city breaks and long international holidays alike.',
  },
  {
    q: 'Do you accept unneutered cats?',
    a: 'We accept neutered cats only to ensure the comfort and safety of all guests in our care.',
  },
  {
    q: 'What vaccinations does my cat need?',
    a: 'All cats must be up to date on their Feline Herpesvirus, Calicivirus, and Panleukopenia (FVRCP) vaccinations. Proof must be shown at check-in.',
  },
  {
    q: "Can I bring my cat's own food and bedding?",
    a: 'Absolutely — we encourage it! Familiar scents and food help cats settle in quickly. Bring whatever makes your cat feel at home.',
  },
  {
    q: 'How often will I receive updates?',
    a: "You'll receive at least one photo or video update per day. You can also message us anytime via WhatsApp for a quick check-in.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Questions</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-12">
          Frequently Asked{' '}
          <em className="italic">Questions</em>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-cch-linen rounded-2xl border border-cch-oak overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif font-bold text-cch-black">{faq.q}</span>
                <div className="w-8 h-8 bg-cch-black rounded-lg flex items-center justify-center text-cch-parchment text-lg flex-shrink-0 ml-4">
                  {open === i ? '−' : '+'}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-cch-black/60 text-sm leading-relaxed border-t border-cch-oak pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
