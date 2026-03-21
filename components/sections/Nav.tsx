'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Questions', href: '#questions' },
]

const languages = [
  { value: 'en', label: 'EN' },
  { value: 'th', label: 'TH' },
  { value: 'jp', label: 'JP' },
] as const

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<(typeof languages)[number]['value']>('en')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-[1.5rem] border transition-all duration-300 ${
          scrolled || open
            ? 'border-white/45 bg-[#fef9ef]/85 shadow-[0_18px_50px_-28px_rgba(34,28,22,0.2)] backdrop-blur-xl'
            : 'border-white/35 bg-[#fef9ef]/60 shadow-[0_18px_50px_-34px_rgba(110,89,46,0.16)] backdrop-blur-xl'
        }`}
      >
        <div className="relative flex h-16 items-center justify-between px-4 md:h-[4.5rem] md:px-6">
          <a href="#home" aria-label="Creamy Cat Home" className="flex items-center gap-2.5">
            <div
              className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border ${
                scrolled || open
                  ? 'border-white/60 bg-white/80 text-cch-primary'
                  : 'border-white/40 bg-white/55 text-cch-primary'
              }`}
            >
              <Image
                src="/creamyCatLogoTrans.png"
                alt="Creamy Cat Home logo"
                fill
                sizes="36px"
                className="scale-[1.55] object-contain"
                priority
              />
            </div>
          </a>

          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-base font-extrabold italic tracking-tight text-brand-glow md:text-lg">
              Creamy Cat Home
            </span>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-cch-black/65 transition-colors hover:text-cch-black">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-full border border-white/55 bg-white/60 p-1 backdrop-blur md:flex">
              {languages.map(option => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={language === option.value}
                  className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors ${
                    language === option.value
                      ? 'bg-cch-primary text-cch-parchment'
                      : 'text-cch-black/55 hover:text-cch-black'
                  }`}
                  onClick={() => setLanguage(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <Button href="#contact" className="hidden md:inline-flex">Book a Stay</Button>
            <button
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/45 bg-white/55 shadow-[0_10px_24px_-18px_rgba(110,89,46,0.45)] md:hidden"
              onClick={() => setOpen(o => !o)}
            >
              <span className={`block h-0.5 w-4 transition-all ${scrolled || open ? 'bg-cch-primary' : 'bg-cch-primary'} ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-4 transition-all ${scrolled || open ? 'bg-cch-primary' : 'bg-cch-primary'} ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-4 transition-all ${scrolled || open ? 'bg-cch-primary' : 'bg-cch-primary'} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 flex max-w-6xl justify-end md:hidden">
        <div className="flex items-center rounded-full border border-white/55 bg-[#fef9ef]/78 p-1 shadow-[0_12px_30px_-22px_rgba(34,28,22,0.25)] backdrop-blur">
          {languages.map(option => (
            <button
              key={option.value}
              type="button"
              aria-pressed={language === option.value}
              className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors ${
                language === option.value
                  ? 'bg-cch-primary text-cch-parchment'
                  : 'text-cch-black/55 hover:text-cch-black'
              }`}
              onClick={() => setLanguage(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {open && (
        <nav
          aria-label="mobile"
          className="mx-auto mt-3 flex max-w-6xl flex-col gap-4 rounded-[1.8rem] border border-white/45 bg-[#fef9ef]/90 px-5 py-5 shadow-[0_24px_60px_-36px_rgba(34,28,22,0.24)] backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center rounded-full border border-white/55 bg-white/65 p-1">
            {languages.map(option => (
              <button
                key={option.value}
                type="button"
                aria-pressed={language === option.value}
                className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors ${
                  language === option.value
                    ? 'bg-cch-primary text-cch-parchment'
                    : 'text-cch-black/55 hover:text-cch-black'
                }`}
                onClick={() => setLanguage(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          {links.map(link => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-cch-black/75" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2 w-full justify-center">Book a Stay</Button>
        </nav>
      )}
    </header>
  )
}
