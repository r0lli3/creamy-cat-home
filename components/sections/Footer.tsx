const footerLinks = {
  Navigate: ['Home', 'About', 'Services', 'Gallery'],
  Connect: ['Book a Stay', 'Instagram', 'Facebook', 'WhatsApp'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Contact'],
}

export function Footer() {
  return (
    <footer className="border-t border-cch-oak bg-cch-linen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-cch-black rounded-lg flex items-center justify-center text-cch-parchment text-sm">🐾</div>
              <span className="font-serif font-bold text-cch-black text-lg">Creamy Cat Home</span>
            </div>
            <p className="text-sm text-cch-black/50 leading-relaxed mb-4 max-w-xs">
              A warm, loving home-away-from-home for your cat.{' '}
              <em>Real</em> care from people who truly love cats.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['ig', 'fb'].map(s => (
                <div key={s} className="w-8 h-8 bg-cch-black rounded-full flex items-center justify-center text-cch-parchment text-xs cursor-pointer hover:opacity-70 transition-opacity">
                  {s === 'ig' ? '📷' : '💬'}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-cch-black/40 uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-cch-black/60 hover:text-cch-black transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-cch-oak pt-8 text-xs text-cch-black/30">
          © 2026 Creamy Cat Home. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
