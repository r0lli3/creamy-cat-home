import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  className?: string
}

export function Button({ children, variant = 'primary', href, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-[1.1rem] px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.01em] transition-all duration-200 active:scale-[0.98]'
  const styles = {
    primary:
      'border border-white/20 bg-[linear-gradient(135deg,#6E592E_0%,#887144_100%)] text-cch-parchment shadow-[0_18px_30px_-18px_rgba(87,68,27,0.75)] hover:brightness-105',
    outline:
      'border border-[#d9cfbf] bg-white/55 text-cch-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur hover:bg-white/80',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}
