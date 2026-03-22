'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/providers/LanguageProvider'

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]">
      <path
        d="M15.4 5.2c.74.84 1.68 1.48 2.76 1.77v2.46a6.2 6.2 0 0 1-3.26-1v5.53a5.42 5.42 0 1 1-5.42-5.42c.3 0 .58.03.86.08v2.52a2.95 2.95 0 1 0 2.08 2.82V3.8h2.94v1.4Z"
        fill="#221C16"
      />
      <path
        d="M14.6 4.2c.7 1 1.7 1.77 2.86 2.17v1.18a5.25 5.25 0 0 1-2.86-1.31V4.2Z"
        fill="#25F4EE"
        opacity="0.95"
      />
      <path
        d="M13.83 4.72v9.08a3.72 3.72 0 1 1-2.62-3.56v1.28a2.54 2.54 0 1 0 1.52 2.33V3.8h1.1v.92Z"
        fill="#FE2C55"
        opacity="0.85"
      />
    </svg>
  )
}

export function Footer() {
  const { copy } = useLanguage()
  const footerSections = [
    copy.footer.sections.navigate,
    copy.footer.sections.connect,
    copy.footer.sections.legal,
  ]
  const socialButtons = [
    {
      key: 'instagram',
      label: 'Instagram',
      icon: (
        <Image
          src="/brand/instagram-icon.png"
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
      ),
    },
    {
      key: 'tiktok',
      label: 'TikTok',
      icon: <TikTokIcon />,
    },
    {
      key: 'line',
      label: 'LINE',
      icon: (
        <Image
          src="/brand/line-brand-icon.png"
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
      ),
    },
  ]

  return (
    <footer className="px-4 pb-10 pt-6 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/45 bg-white/45 px-6 py-10 backdrop-blur md:px-8 md:py-14">
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
              {socialButtons.map(social => (
                <button
                  key={social.key}
                  type="button"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/65 text-cch-primary shadow-[0_10px_24px_-18px_rgba(110,89,46,0.35)] transition-transform duration-200 hover:scale-[1.04]"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-5 gap-y-8 md:col-span-3 md:gap-10">
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
