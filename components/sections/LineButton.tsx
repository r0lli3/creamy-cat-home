'use client'

import Image from 'next/image'

import { useLanguage } from '@/components/providers/LanguageProvider'

export function LineButton() {
  const { copy } = useLanguage()

  return (
    <a
      href="https://lin.ee/rJbRDBL"
      target="_blank"
      rel="noreferrer"
      aria-label={copy.lineButton.ariaLabel}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[60] inline-flex items-center gap-2 rounded-full border border-white/25 bg-[linear-gradient(135deg,#06C755_0%,#05B24D_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-18px_rgba(6,199,85,0.55)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] md:right-6"
    >
      <Image
        src="/brand/line-brand-icon.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
      />
      <span className="hidden sm:inline">{copy.lineButton.label}</span>
    </a>
  )
}
