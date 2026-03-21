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
    <section id="questions" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>Questions</SectionLabel>
        <h2 className="mb-12 font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
          Frequently Asked <em className="italic">Questions</em>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="soft-ui-card overflow-hidden rounded-[1.75rem]">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif font-extrabold text-cch-black">{faq.q}</span>
                <div className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/65 text-lg text-cch-primary">
                  {open === i ? '−' : '+'}
                </div>
              </button>
              {open === i && (
                <div className="border-t border-white/55 px-6 pb-5 pt-4 text-sm leading-7 text-cch-muted">
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
