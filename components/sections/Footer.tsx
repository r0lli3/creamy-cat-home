'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/providers/LanguageProvider'

export function Footer() {
  const { copy } = useLanguage()
  const footerSections = [
    copy.footer.sections.navigate,
    copy.footer.sections.connect,
    copy.footer.sections.legal,
  ]

  return (
    <footer className="px-4 pb-10 pt-6 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/45 bg-white/45 px-6 py-10 backdrop-blur md:px-8 md:py-14">
        <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/55 bg-white/65">
                <Image
                  src="/creamyCatLogoTrans.png"
                  alt={`${copy.nav.brand} logo`}
                  fill
                  sizes="40px"
                  className="object-contain p-2"
                />
              </div>
              <span className="font-serif text-lg font-extrabold text-brand-glow">{copy.nav.brand}</span>
            </div>
            <p className="mb-4 max-w-xs text-sm leading-7 text-cch-black/55">
              {copy.footer.description}
            </p>
            <div className="flex gap-3">
              {['ig', 'fb'].map(s => (
                <div key={s} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/55 bg-white/65 text-xs text-cch-primary transition-opacity hover:opacity-70">
                  {s === 'ig' ? '📷' : '💬'}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:col-span-3 md:grid-cols-3 md:gap-10">
            {footerSections.map(section => (
              <div key={section.heading} className="min-w-0">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cch-black/40 md:mb-4">{section.heading}</h4>
                <ul className="space-y-2 md:space-y-2.5">
                  {section.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-sm text-cch-black/60 transition-colors hover:text-cch-black">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/55 pt-6 text-xs text-cch-black/30 md:pt-8">
          {copy.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
