import { ReactNode } from 'react'

export function IconBox({ children, size = 'md', className = '' }: { children: ReactNode; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: 'h-8 w-8 text-base', md: 'h-12 w-12 text-xl', lg: 'h-16 w-16 text-2xl' }
  return (
    <div
      className={`${sizes[size]} flex flex-shrink-0 items-center justify-center rounded-[1.6rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.64)_100%)] text-cch-primary shadow-[0_16px_28px_-18px_rgba(110,89,46,0.3)] ${className}`}
    >
      {children}
    </div>
  )
}
