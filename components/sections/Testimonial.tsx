import { IconBox } from '@/components/ui/IconBox'

export function Testimonial() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <IconBox size="md" className="mx-auto mb-8">&ldquo;</IconBox>
        <blockquote className="font-serif text-3xl md:text-4xl font-bold text-cch-black leading-tight mb-8">
          I&apos;ve never felt so at ease leaving my cat behind. The daily photos and personal updates made our holiday so much{' '}
          <em className="italic text-cch-ash">more relaxing</em>.
        </blockquote>
        <p className="text-sm text-cch-black/40 font-medium">Sarah M. — proud owner of Biscuit the tabby</p>
      </div>
    </section>
  )
}
