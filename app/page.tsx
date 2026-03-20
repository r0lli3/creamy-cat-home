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
    </main>
  )
}
