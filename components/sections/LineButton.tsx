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
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[60] inline-flex items-center justify-center transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] md:right-6"
    >
      <Image
        src="/brand/line-brand-icon.png"
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 drop-shadow-[0_14px_30px_rgba(34,28,22,0.18)]"
      />
    </a>
  )
}
