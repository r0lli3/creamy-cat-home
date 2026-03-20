'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

const links = ['Home', 'About', 'Services', 'Gallery']

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cch-parchment/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-cch-black rounded-lg flex items-center justify-center text-cch-parchment text-sm font-bold">
            🐾
          </div>
          <span className="font-serif font-bold text-cch-black text-lg">Creamy Cat Home</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-cch-black/70 hover:text-cch-black transition-colors">
              {l}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Button href="#contact" className="hidden md:inline-flex">Book a Stay</Button>
          <button
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(o => !o)}
          >
            <span className={`block w-5 h-0.5 bg-cch-black transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cch-black transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cch-black transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="mobile" className="md:hidden bg-cch-parchment border-t border-cch-oak px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Button href="#contact" className="mt-2 w-full justify-center">Book a Stay</Button>
        </nav>
      )}
    </header>
  )
}
