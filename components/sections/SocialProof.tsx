export function SocialProof() {
  const items = ['The Cat Corner', 'Paws & Purrs', 'Feline Fine', 'Whisker Club', 'Kitty Kingdom', 'Meow Manor', 'Velvet Paws']

  return (
    <div className="py-6 border-t border-cch-oak overflow-hidden">
      <p className="text-center text-xs font-medium text-cch-oak tracking-widest uppercase mb-5">
        Trusted by cat owners from
      </p>
      <div className="flex overflow-hidden">
        <div className="flex gap-16 items-center flex-shrink-0 animate-marquee">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-sm font-medium text-cch-black/25 whitespace-nowrap tracking-wide">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-16 items-center flex-shrink-0 animate-marquee" aria-hidden>
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-sm font-medium text-cch-black/25 whitespace-nowrap tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
