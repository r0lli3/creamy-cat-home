export function SocialProof() {
  const items = ['The Cat Corner', 'Paws & Purrs', 'Feline Fine', 'Whisker Club', 'Kitty Kingdom', 'Meow Manor', 'Velvet Paws']

  return (
    <div className="overflow-hidden py-5">
      <p className="mb-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cch-primary/65">
        Trusted by cat owners from
      </p>
      <div className="flex overflow-hidden">
        <div className="flex gap-16 items-center flex-shrink-0 animate-marquee">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-medium tracking-wide text-cch-black/28">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-16 items-center flex-shrink-0 animate-marquee" aria-hidden>
          {[...items, ...items].map((item, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-medium tracking-wide text-cch-black/28">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
