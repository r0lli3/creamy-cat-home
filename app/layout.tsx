import type { Metadata } from 'next'
import { Inter, Fredoka } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Creamy Cat Home — Premium Cat Home',
  description: 'A luxury home away from home for your cat.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} bg-cch-parchment text-cch-black font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
