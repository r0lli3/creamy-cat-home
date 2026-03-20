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
