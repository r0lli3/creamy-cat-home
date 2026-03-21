import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconBox } from '@/components/ui/IconBox'
import { FadeIn } from '@/components/ui/FadeIn'

export function Mission() {
  return (
    <section id="about" className="px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="soft-ui-card rounded-[2rem] p-8 md:p-14">
            <SectionLabel>Our mission</SectionLabel>
            <h2 className="mb-8 max-w-2xl font-serif text-4xl font-extrabold tracking-tight text-cch-black md:text-5xl">
              Turning worried owners into <em className="italic">confident</em> cat parents
            </h2>
            <div className="mb-10 grid gap-8 text-base leading-8 text-cch-muted md:grid-cols-2">
              <p>
                We know how hard it is to leave your cat behind. That&apos;s why we&apos;ve built a space that feels less like a kennel and more like a second home — warm, calm, and full of love.
              </p>
              <p>
                Every cat in our care receives individual attention, tailored feeding schedules, and daily photo updates so you can relax knowing your furry family member is in safe hands.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IconBox size="sm">🐾</IconBox>
              <span className="font-serif text-lg font-extrabold text-cch-black">Creamy Cat Home</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
