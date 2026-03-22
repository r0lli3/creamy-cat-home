'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { Language } from '@/content/siteCopy'

const languages = [
  { value: 'en', label: 'English', icon: '🇬🇧' },
  { value: 'th', label: 'Thai', icon: '🇹🇭' },
  { value: 'jp', label: 'Japanese', icon: '🇯🇵' },
] as const

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, copy } = useLanguage()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-[1.3rem] border transition-all duration-300 md:rounded-[1.5rem] ${
          scrolled || open
            ? 'border-white/45 bg-[#fef9ef]/85 shadow-[0_18px_50px_-28px_rgba(34,28,22,0.2)] backdrop-blur-xl'
            : 'border-white/35 bg-[#fef9ef]/60 shadow-[0_18px_50px_-34px_rgba(110,89,46,0.16)] backdrop-blur-xl'
        }`}
      >
        <div className="relative flex h-[3.85rem] items-center justify-between px-4 md:h-[4.5rem] md:px-6">
          <div className="flex items-center md:flex-1">
            <a href="#home" aria-label={copy.nav.brand} className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 flex-shrink-0 md:h-10 md:w-10">
                <Image
                  src="/creamyCatLogoTrans.png"
                  alt={`${copy.nav.brand} logo`}
                  fill
                  sizes="(max-width: 768px) 32px, 40px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          <div className="pointer-events-none absolute left-[46.75%] -translate-x-1/2 md:left-1/2">
            <div className="relative h-[0.95rem] w-[10.4rem] md:h-[1.35rem] md:w-[14.75rem]">
              <Image
                src="/textLogo.png"
                alt={copy.nav.brand}
                fill
                sizes="(max-width: 768px) 166px, 236px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex md:flex-1 md:justify-center">
            {copy.nav.links.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-cch-black/65 transition-colors hover:text-cch-black">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:flex-1 md:justify-end md:gap-3">
            <div className="hidden items-center rounded-full border border-white/55 bg-white/60 p-1 backdrop-blur md:flex">
              {languages.map(option => (
                <button
                  key={option.value}
                  type="button"
                  aria-label={option.label}
                  aria-pressed={language === option.value}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors ${
                    language === option.value
                      ? 'bg-cch-primary/12 ring-1 ring-cch-primary/20'
                      : 'opacity-65 hover:opacity-100'
                  }`}
                  onClick={() => setLanguage(option.value as Language)}
                >
                  <span aria-hidden>{option.icon}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-0.5 md:hidden">
              {languages.map(option => (
                <button
                  key={option.value}
                  type="button"
                  aria-label={option.label}
                  aria-pressed={language === option.value}
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.82rem] transition-transform ${
                    language === option.value
                      ? 'scale-110'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setLanguage(option.value as Language)}
                >
                  <span aria-hidden>{option.icon}</span>
                </button>
              ))}
            </div>
            <Button href="#contact" className="hidden md:inline-flex">{copy.nav.book}</Button>
            <button
              aria-label="Toggle menu"
              className="flex h-8 w-7 flex-col items-end justify-center gap-1.5 md:hidden"
              onClick={() => setOpen(o => !o)}
            >
              <span className={`block h-[2px] w-[1.15rem] rounded-full transition-all ${scrolled || open ? 'bg-[#8B7347]' : 'bg-[#8B7347]'} ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-[2px] w-[1.15rem] rounded-full transition-all ${scrolled || open ? 'bg-[#8B7347]' : 'bg-[#8B7347]'} ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-[1.15rem] rounded-full transition-all ${scrolled || open ? 'bg-[#8B7347]' : 'bg-[#8B7347]'} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          aria-label="mobile"
          className="mx-auto mt-3 flex max-w-6xl flex-col gap-4 rounded-[1.8rem] border border-white/45 bg-[#fef9ef]/90 px-5 py-5 shadow-[0_24px_60px_-36px_rgba(34,28,22,0.24)] backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center gap-2">
            {languages.map(option => (
              <button
                key={option.value}
                type="button"
                aria-label={option.label}
                aria-pressed={language === option.value}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/55 bg-white/65 text-lg transition-colors ${
                  language === option.value
                    ? 'ring-1 ring-cch-primary/25'
                    : 'opacity-75 hover:opacity-100'
                }`}
                onClick={() => setLanguage(option.value as Language)}
              >
                <span aria-hidden>{option.icon}</span>
              </button>
            ))}
          </div>
          {copy.nav.links.map(link => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-cch-black/75" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2 w-full justify-center">{copy.nav.book}</Button>
        </nav>
      )}
    </header>
  )
}
