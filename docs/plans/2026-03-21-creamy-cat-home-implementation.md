# Creamy Cat Home — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page scroll marketing website for Creamy Cat Home (premium cat hotel) replicating the Viral SMA Framer site design 1:1, adapted with a warm custom colour palette.

**Architecture:** Single Next.js 14 App Router page (`app/page.tsx`) composed of 13 section components in `components/sections/`. Shared UI primitives (Button, Card, Badge) in `components/ui/`. No routing, no data fetching, all placeholder content.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, Playfair Display + Inter via `next/font`, Framer Motion for scroll animations, Vitest + React Testing Library for interactive component tests.

**Design reference:** `docs/plans/2026-03-21-creamy-cat-home-design.md`

**Colour tokens:**
- `cch-parchment`: `#F7F5F2` — page background
- `cch-linen`: `#E9E3DA` — card/section surfaces
- `cch-oak`: `#D8C3A5` — borders, dividers, warm accents
- `cch-ash`: `#A8B5A2` — labels, tags, secondary accents
- `cch-black`: `#222222` — text, buttons, icons

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`

**Step 1: Scaffold Next.js app in the project root**

```bash
cd /Users/rparame/CursorWorkspaces/CreamyCatHome
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes
```

Expected: Project created with Next.js 14, Tailwind, TypeScript, App Router.

**Step 2: Install additional dependencies**

```bash
npm install framer-motion
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Step 3: Add Vitest config**

Create `vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
})
```

Create `vitest.setup.ts`:
```ts
import '@testing-library/jest-dom'
```

Add to `package.json` scripts:
```json
"test": "vitest",
"test:run": "vitest run"
```

**Step 4: Configure Tailwind colour tokens**

Replace contents of `tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cch-parchment': '#F7F5F2',
        'cch-linen': '#E9E3DA',
        'cch-oak': '#D8C3A5',
        'cch-ash': '#A8B5A2',
        'cch-black': '#222222',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

**Step 5: Set up global styles and fonts in `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Creamy Cat Home — Premium Cat Hotel',
  description: 'A luxury home away from home for your cat.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-cch-parchment text-cch-black font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

Replace `app/globals.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

**Step 6: Clear `app/page.tsx` to a blank shell**

```tsx
export default function Home() {
  return <main></main>
}
```

**Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: Server running at http://localhost:3000, blank parchment page.

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 project with Tailwind and CCH colour tokens"
```

---

## Task 2: Shared UI Primitives

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/SectionLabel.tsx`
- Create: `components/ui/IconBox.tsx`

**Step 1: Create `components/ui/Button.tsx`**

```tsx
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  className?: string
}

export function Button({ children, variant = 'primary', href, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-sans font-medium text-sm transition-all duration-200'
  const styles = {
    primary: 'bg-cch-black text-cch-parchment hover:opacity-80',
    outline: 'border border-cch-black text-cch-black hover:bg-cch-linen',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}
```

**Step 2: Create `components/ui/SectionLabel.tsx`**

```tsx
export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block text-xs font-sans font-medium tracking-widest uppercase text-cch-ash mb-4">
      {children}
    </span>
  )
}
```

**Step 3: Create `components/ui/IconBox.tsx`**

```tsx
import { ReactNode } from 'react'

export function IconBox({ children, size = 'md' }: { children: ReactNode; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-8 h-8 text-base', md: 'w-12 h-12 text-xl', lg: 'w-16 h-16 text-2xl' }
  return (
    <div className={`${sizes[size]} bg-cch-black text-cch-parchment rounded-xl flex items-center justify-center flex-shrink-0`}>
      {children}
    </div>
  )
}
```

**Step 4: Commit**

```bash
git add components/
git commit -m "feat: add shared UI primitives (Button, SectionLabel, IconBox)"
```

---

## Task 3: Navigation

**Files:**
- Create: `components/sections/Nav.tsx`
- Test: `components/sections/Nav.test.tsx`

**Step 1: Write the failing test**

Create `components/sections/Nav.test.tsx`:
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Nav } from './Nav'

describe('Nav', () => {
  it('renders logo and CTA', () => {
    render(<Nav />)
    expect(screen.getByText('Creamy Cat Home')).toBeInTheDocument()
    expect(screen.getByText('Book a Stay')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Nav />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('navigation', { name: 'mobile' })).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByRole('navigation', { name: 'mobile' })).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'mobile' })).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm run test:run -- Nav.test
```

Expected: FAIL — `Nav` not found.

**Step 3: Implement `components/sections/Nav.tsx`**

```tsx
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
```

**Step 4: Run test to verify it passes**

```bash
npm run test:run -- Nav.test
```

Expected: PASS (2 tests).

**Step 5: Add Nav to `app/page.tsx`**

```tsx
import { Nav } from '@/components/sections/Nav'

export default function Home() {
  return (
    <main>
      <Nav />
    </main>
  )
}
```

**Step 6: Commit**

```bash
git add app/page.tsx components/sections/Nav.tsx components/sections/Nav.test.tsx
git commit -m "feat: add sticky Nav with mobile hamburger menu"
```

---

## Task 4: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`

**Step 1: Create `components/sections/Hero.tsx`**

```tsx
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          <p className="text-sm font-medium text-cch-ash tracking-widest uppercase mb-6">Premium Cat Hotel</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cch-black leading-tight mb-6">
            Premium cat care, done{' '}
            <em className="not-italic italic text-cch-ash">right</em>
          </h1>
          <p className="text-cch-black/60 text-lg leading-relaxed mb-8 max-w-md">
            A warm, loving home-away-from-home for your cat while you're away. Personalised care, daily updates, and total peace of mind.
          </p>
          <Button href="#contact" className="text-base px-8 py-4">Book a Stay</Button>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-cch-oak via-cch-linen to-cch-ash flex items-center justify-center">
            <span className="text-9xl">🐱</span>
          </div>
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-cch-parchment rounded-2xl px-4 py-3 shadow-lg border border-cch-oak">
            <p className="text-xs text-cch-ash font-medium">Happy guests</p>
            <p className="text-cch-black font-bold">500+ cats hosted</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx`**

```tsx
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  )
}
```

**Step 3: Verify visually in browser at http://localhost:3000**

Expected: Full-height hero with heading, CTA, and warm gradient visual panel.

**Step 4: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section"
```

---

## Task 5: Social Proof Strip

**Files:**
- Create: `components/sections/SocialProof.tsx`

**Step 1: Create `components/sections/SocialProof.tsx`**

```tsx
export function SocialProof() {
  const items = ['The Cat Corner', 'Paws & Purrs', 'Feline Fine', 'Whisker Club', 'Kitty Kingdom', 'Meow Manor', 'Velvet Paws']

  return (
    <section className="py-12 border-y border-cch-oak overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-medium text-cch-ash tracking-widest uppercase">
          Trusted by cat owners from
        </p>
      </div>
      <div className="flex gap-12 items-center animate-none">
        <div className="flex gap-16 items-center flex-shrink-0 px-8">
          {items.map(item => (
            <span key={item} className="text-sm font-medium text-cch-black/30 whitespace-nowrap tracking-wide">
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for visual fill */}
        <div className="flex gap-16 items-center flex-shrink-0 px-8">
          {items.map(item => (
            <span key={item + '2'} className="text-sm font-medium text-cch-black/30 whitespace-nowrap tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/SocialProof.tsx app/page.tsx
git commit -m "feat: add social proof strip"
```

---

## Task 6: Services Section

**Files:**
- Create: `components/sections/Services.tsx`

**Step 1: Create `components/sections/Services.tsx`**

```tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const services = [
  {
    icon: '🌙',
    title: 'Overnight Stays',
    description: 'Your cat sleeps in a cozy, private room with soft bedding, toys, and all the attention they deserve.',
  },
  {
    icon: '☀️',
    title: 'Daycare',
    description: 'Drop off your cat for a day of play, socialisation, and naps in a warm, supervised environment.',
  },
  {
    icon: '✂️',
    title: 'Grooming',
    description: 'From brush-outs to full grooms, we keep your cat looking and feeling their absolute best.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Services</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-xl">
          How we care for your{' '}
          <em className="italic">cat</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-cch-linen rounded-2xl p-8 border border-cch-oak">
              <div className="w-12 h-12 bg-cch-parchment rounded-xl flex items-center justify-center text-2xl mb-6 border border-cch-oak">
                {s.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-cch-black mb-3">{s.title}</h3>
              <p className="text-cch-black/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Services.tsx app/page.tsx
git commit -m "feat: add Services section with 3 cards"
```

---

## Task 7: Mission Section

**Files:**
- Create: `components/sections/Mission.tsx`

**Step 1: Create `components/sections/Mission.tsx`**

```tsx
import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconBox } from '@/components/ui/IconBox'

export function Mission() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-cch-linen rounded-3xl p-10 md:p-16 border border-cch-oak">
          <SectionLabel>Our mission</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-8 max-w-2xl">
            Turning worried owners into{' '}
            <em className="italic">confident</em> cat parents
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-cch-black/60 text-base leading-relaxed mb-10">
            <p>
              We know how hard it is to leave your cat behind. That's why we've built a space that feels less like a kennel and more like a second home — warm, calm, and full of love.
            </p>
            <p>
              Every cat in our care receives individual attention, tailored feeding schedules, and daily photo updates so you can relax knowing your furry family member is in safe hands.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IconBox size="sm">🐾</IconBox>
            <span className="font-serif font-bold text-cch-black text-lg">Creamy Cat Home</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Mission.tsx app/page.tsx
git commit -m "feat: add Mission section"
```

---

## Task 8: Results Section

**Files:**
- Create: `components/sections/Results.tsx`

**Step 1: Create `components/sections/Results.tsx`**

```tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const caseStudies = [
  {
    label: 'Case study',
    heading: 'Caring for a family\'s most precious',
    headingItalic: 'companion',
    body: 'A family of four were nervous first-time cat hotel guests. Within 24 hours of their cat\'s first stay, they received a photo update and a personalised report — and they\'ve been back every holiday since.',
    metrics: [
      { value: '500+', label: 'Cats Hosted', sub: 'Since we opened our doors' },
      { value: '98%', label: 'Return Rate', sub: 'From satisfied cat parents' },
    ],
    flip: false,
  },
  {
    label: 'Case study',
    heading: 'Building',
    headingItalic: 'trust',
    headingEnd: 'one stay at a time',
    body: 'A solo traveller worried about leaving their senior cat for two weeks. Our dedicated senior care programme, daily video calls, and specialist diet management gave them complete peace of mind.',
    metrics: [
      { value: '4.9★', label: 'Average Rating', sub: 'Across all reviews' },
      { value: '100%', label: 'Update Rate', sub: 'Daily photo updates sent' },
    ],
    flip: true,
  },
]

export function Results() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {caseStudies.map((cs, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${cs.flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
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
            {/* Visual */}
            <div className="bg-gradient-to-br from-cch-oak to-cch-ash rounded-3xl aspect-video flex items-center justify-center">
              <span className="text-7xl">🐈</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Results.tsx app/page.tsx
git commit -m "feat: add Results/case studies section"
```

---

## Task 9: Process Section

**Files:**
- Create: `components/sections/Process.tsx`

**Step 1: Create `components/sections/Process.tsx`**

```tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  { icon: '💬', title: 'Consultation', description: 'We meet your cat, learn their routine, preferences, and any special needs before their first stay.' },
  { icon: '🏠', title: 'Check-in', description: 'Drop off your cat in our welcoming space. We handle the rest — feeding, playtime, and cosy naps.' },
  { icon: '📸', title: 'Daily Updates', description: 'Receive daily photo and video updates so you can see exactly how happy your cat is in our care.' },
]

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>How we work</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-xl">
          We like to keep things{' '}
          <em className="italic">simple</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-cch-oak" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="w-16 h-16 bg-cch-linen border-2 border-cch-oak rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10">
                {s.icon}
              </div>
              <p className="text-xs font-medium text-cch-ash mb-2">Step {i + 1}</p>
              <h3 className="font-serif text-xl font-bold text-cch-black mb-3">{s.title}</h3>
              <p className="text-cch-black/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Process.tsx app/page.tsx
git commit -m "feat: add Process section (3 steps)"
```

---

## Task 10: Testimonial Section

**Files:**
- Create: `components/sections/Testimonial.tsx`

**Step 1: Create `components/sections/Testimonial.tsx`**

```tsx
import { IconBox } from '@/components/ui/IconBox'

export function Testimonial() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <IconBox size="md" className="mx-auto mb-8">"</IconBox>
        <blockquote className="font-serif text-3xl md:text-4xl font-bold text-cch-black leading-tight mb-8">
          I've never felt so at ease leaving my cat behind. The daily photos and personal updates made our holiday so much{' '}
          <em className="italic text-cch-ash">more relaxing</em>.
        </blockquote>
        <p className="text-sm text-cch-black/40 font-medium">Sarah M. — proud owner of Biscuit the tabby</p>
      </div>
    </section>
  )
}
```

Note: `IconBox` doesn't support `className` yet — add it in `components/ui/IconBox.tsx`:

```tsx
export function IconBox({ children, size = 'md', className = '' }: { children: ReactNode; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: 'w-8 h-8 text-base', md: 'w-12 h-12 text-xl', lg: 'w-16 h-16 text-2xl' }
  return (
    <div className={`${sizes[size]} bg-cch-black text-cch-parchment rounded-xl flex items-center justify-center flex-shrink-0 ${className}`}>
      {children}
    </div>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Testimonial.tsx components/ui/IconBox.tsx app/page.tsx
git commit -m "feat: add Testimonial section"
```

---

## Task 11: Comparison Table

**Files:**
- Create: `components/sections/Comparison.tsx`

**Step 1: Create `components/sections/Comparison.tsx`**

```tsx
import { SectionLabel } from '@/components/ui/SectionLabel'

const rows = [
  'Personal daily photo & video updates',
  'Individual attention for each cat',
  'Specialist senior & kitten care',
  'Home-cooked meal options',
  'Vet-on-call access',
  'Flexible drop-off & pick-up times',
]

export function Comparison() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>The difference</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cch-black mb-16 max-w-2xl">
          Why choose Creamy Cat Home over{' '}
          <em className="italic">everyone</em> else?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Other kennels */}
          <div className="bg-cch-linen rounded-3xl p-8 border border-cch-oak">
            <h3 className="font-sans font-semibold text-cch-black/40 text-sm mb-6 uppercase tracking-widest">Other Kennels</h3>
            <ul className="space-y-4">
              {rows.map(r => (
                <li key={r} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cch-oak/50 flex items-center justify-center text-cch-black/30 text-xs flex-shrink-0 mt-0.5">✕</div>
                  <span className="text-cch-black/40 text-sm line-through">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Creamy Cat Home */}
          <div className="bg-cch-black rounded-3xl p-8">
            <h3 className="font-sans font-semibold text-cch-parchment/60 text-sm mb-6 uppercase tracking-widest">Creamy Cat Home</h3>
            <ul className="space-y-4">
              {rows.map(r => (
                <li key={r} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cch-ash/30 flex items-center justify-center text-cch-ash text-xs flex-shrink-0 mt-0.5">✓</div>
                  <span className="text-cch-parchment text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Comparison.tsx app/page.tsx
git commit -m "feat: add Comparison table section"
```

---

## Task 12: Team Section

**Files:**
- Create: `components/sections/Team.tsx`

**Step 1: Create `components/sections/Team.tsx`**

```tsx
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
          Meet the team behind your cat's{' '}
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
          <p className="text-cch-black/60 mb-6">We're always looking for passionate cat lovers to join our family.</p>
          <Button href="mailto:hello@creamycathome.com" variant="outline">Apply now</Button>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Team.tsx app/page.tsx
git commit -m "feat: add Team section"
```

---

## Task 13: FAQ Accordion

**Files:**
- Create: `components/sections/FAQ.tsx`
- Test: `components/sections/FAQ.test.tsx`

**Step 1: Write the failing test**

Create `components/sections/FAQ.test.tsx`:
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders all questions', () => {
    render(<FAQ />)
    expect(screen.getByText('How long can my cat stay?')).toBeInTheDocument()
  })

  it('expands an answer when question clicked', () => {
    render(<FAQ />)
    const q = screen.getByText('How long can my cat stay?')
    expect(screen.queryByText(/Cats can stay/)).not.toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.getByText(/Cats can stay/)).toBeInTheDocument()
  })

  it('collapses an open answer when clicked again', () => {
    render(<FAQ />)
    const q = screen.getByText('How long can my cat stay?')
    fireEvent.click(q)
    expect(screen.getByText(/Cats can stay/)).toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.queryByText(/Cats can stay/)).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npm run test:run -- FAQ.test
```

Expected: FAIL — `FAQ` not found.

**Step 3: Implement `components/sections/FAQ.tsx`**

```tsx
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
    q: 'Can I bring my cat\'s own food and bedding?',
    a: 'Absolutely — we encourage it! Familiar scents and food help cats settle in quickly. Bring whatever makes your cat feel at home.',
  },
  {
    q: 'How often will I receive updates?',
    a: 'You\'ll receive at least one photo or video update per day. You can also message us anytime via WhatsApp for a quick check-in.',
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
```

**Step 4: Run test to verify it passes**

```bash
npm run test:run -- FAQ.test
```

Expected: PASS (3 tests).

**Step 5: Add to `app/page.tsx` and commit**

```bash
git add components/sections/FAQ.tsx components/sections/FAQ.test.tsx app/page.tsx
git commit -m "feat: add FAQ accordion section with tests"
```

---

## Task 14: CTA Section

**Files:**
- Create: `components/sections/CTASection.tsx`

**Step 1: Create `components/sections/CTASection.tsx`**

```tsx
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { IconBox } from '@/components/ui/IconBox'

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-cch-linen rounded-3xl p-10 md:p-16 text-center border border-cch-oak">
          <IconBox size="lg" className="mx-auto mb-8">🐾</IconBox>
          <SectionLabel>Get started</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cch-black mb-6 max-w-2xl mx-auto">
            Your cat's home away from home starts{' '}
            <em className="italic">right here</em>
          </h2>
          <p className="text-cch-black/60 text-lg mb-10 max-w-md mx-auto">
            Book a free consultation and let us show you why hundreds of cat owners trust us every year.
          </p>
          <Button href="mailto:hello@creamycathome.com" className="text-base px-10 py-4">Book a Stay</Button>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/CTASection.tsx app/page.tsx
git commit -m "feat: add CTA section"
```

---

## Task 15: Footer

**Files:**
- Create: `components/sections/Footer.tsx`

**Step 1: Create `components/sections/Footer.tsx`**

```tsx
const footerLinks = {
  Navigate: ['Home', 'About', 'Services', 'Gallery'],
  Connect: ['Book a Stay', 'Instagram', 'Facebook', 'WhatsApp'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Contact'],
}

export function Footer() {
  return (
    <footer className="border-t border-cch-oak bg-cch-linen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-cch-black rounded-lg flex items-center justify-center text-cch-parchment text-sm">🐾</div>
              <span className="font-serif font-bold text-cch-black text-lg">Creamy Cat Home</span>
            </div>
            <p className="text-sm text-cch-black/50 leading-relaxed mb-4 max-w-xs">
              A warm, loving home-away-from-home for your cat.{' '}
              <em>Real</em> care from people who truly love cats.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['ig', 'fb'].map(s => (
                <div key={s} className="w-8 h-8 bg-cch-black rounded-full flex items-center justify-center text-cch-parchment text-xs cursor-pointer hover:opacity-70 transition-opacity">
                  {s === 'ig' ? '📷' : '💬'}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-cch-black/40 uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-cch-black/60 hover:text-cch-black transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-cch-oak pt-8 text-xs text-cch-black/30">
          © 2026 Creamy Cat Home. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Add to `app/page.tsx` and commit**

```bash
git add components/sections/Footer.tsx app/page.tsx
git commit -m "feat: add Footer"
```

---

## Task 16: Wire Up Full Page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace `app/page.tsx` with all sections wired up**

```tsx
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Services } from '@/components/sections/Services'
import { Mission } from '@/components/sections/Mission'
import { Results } from '@/components/sections/Results'
import { Process } from '@/components/sections/Process'
import { Testimonial } from '@/components/sections/Testimonial'
import { Comparison } from '@/components/sections/Comparison'
import { Team } from '@/components/sections/Team'
import { FAQ } from '@/components/sections/FAQ'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <Services />
      <Mission />
      <Results />
      <Process />
      <Testimonial />
      <Comparison />
      <Team />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
```

**Step 2: Run full test suite**

```bash
npm run test:run
```

Expected: All tests pass.

**Step 3: Check the full page visually at http://localhost:3000**

Verify: All 13 sections render correctly, colours match palette, typography hierarchy is correct.

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: wire up all sections into full single-page layout"
```

---

## Task 17: Scroll Animations

**Files:**
- Create: `components/ui/FadeIn.tsx`
- Modify: All section components (wrap content in `<FadeIn>`)

**Step 1: Create `components/ui/FadeIn.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Wrap the heading block in each section component with `<FadeIn>`**

For each section (`Hero`, `Services`, `Mission`, etc.), import `FadeIn` and wrap the main heading/content:

```tsx
import { FadeIn } from '@/components/ui/FadeIn'
// ...
<FadeIn>
  <SectionLabel>...</SectionLabel>
  <h2>...</h2>
</FadeIn>
<FadeIn delay={0.1}>
  {/* cards / body content */}
</FadeIn>
```

**Step 3: Commit**

```bash
git add components/ui/FadeIn.tsx components/sections/
git commit -m "feat: add scroll-triggered fade-in animations via Framer Motion"
```

---

## Task 18: Final Polish & Vercel Deploy

**Step 1: Run build to check for errors**

```bash
npm run build
```

Expected: Build succeeds with no type errors.

**Step 2: Run full test suite one final time**

```bash
npm run test:run
```

Expected: All tests pass.

**Step 3: Deploy to Vercel**

Use the `vercel:deploy` skill or run:

```bash
npx vercel --prod
```

Follow prompts: link to existing project or create new one named `creamy-cat-home`.

**Step 4: Verify live URL**

Visit the Vercel URL and check:
- [ ] All sections render on desktop and mobile
- [ ] Nav sticky behaviour works
- [ ] Mobile hamburger opens/closes
- [ ] FAQ accordion expands/collapses
- [ ] Fonts load (Playfair + Inter)
- [ ] Colour palette matches design doc

**Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Creamy Cat Home landing page — ready for production"
```
