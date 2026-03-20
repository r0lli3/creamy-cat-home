import { ReactNode } from 'react'

export function IconBox({ children, size = 'md', className = '' }: { children: ReactNode; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: 'w-8 h-8 text-base', md: 'w-12 h-12 text-xl', lg: 'w-16 h-16 text-2xl' }
  return (
    <div className={`${sizes[size]} bg-cch-black text-cch-parchment rounded-xl flex items-center justify-center flex-shrink-0 ${className}`}>
      {children}
    </div>
  )
}
