import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Creamy Cat Home — Premium Cat Home',
  description: 'A luxury home away from home for your cat.',
  icons: {
    icon: '/creamyCatLogoTrans.png',
    shortcut: '/creamyCatLogoTrans.png',
    apple: '/creamyCatLogoTrans.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} bg-cch-parchment text-cch-black font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
