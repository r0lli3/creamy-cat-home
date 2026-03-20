export function SocialProof() {
  const items = ['The Cat Corner', 'Paws & Purrs', 'Feline Fine', 'Whisker Club', 'Kitty Kingdom', 'Meow Manor', 'Velvet Paws']

  return (
    <section className="py-12 border-y border-cch-oak overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-medium text-cch-ash tracking-widest uppercase">
          Trusted by cat owners from
        </p>
      </div>
      <div className="flex gap-12 items-center animate-none">
        <div className="flex gap-16 items-center flex-shrink-0 px-8">
          {items.map(item => (
            <span key={item} className="text-sm font-medium text-cch-black/30 whitespace-nowrap tracking-wide">
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for visual fill */}
        <div className="flex gap-16 items-center flex-shrink-0 px-8">
          {items.map(item => (
            <span key={item + '2'} className="text-sm font-medium text-cch-black/30 whitespace-nowrap tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
