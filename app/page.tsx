import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Mission } from '@/components/sections/Mission'
import { Results } from '@/components/sections/Results'
import { Process } from '@/components/sections/Process'
import { Testimonial } from '@/components/sections/Testimonial'
import { Comparison } from '@/components/sections/Comparison'
import { FAQ } from '@/components/sections/FAQ'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'
import { LineButton } from '@/components/sections/LineButton'

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_62%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(223,202,155,0.26),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),transparent_68%)] blur-2xl" />
      <Nav />
      <Hero />
      <Services />
      <Mission />
      <Results />
      <Process />
      <Testimonial />
      <Comparison />
      <FAQ />
      <CTASection />
      <Footer />
      <LineButton />
    </main>
  )
}
