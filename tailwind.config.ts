import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cch-parchment': '#FEF9EF',
        'cch-linen': '#F2EDE4',
        'cch-oak': '#DFCA9B',
        'cch-ash': '#C6BCA9',
        'cch-black': '#1D1C16',
        'cch-primary': '#6E592E',
        'cch-primary-deep': '#57441B',
        'cch-surface': '#FFFFFF',
        'cch-muted': '#4D463B',
      },
      fontFamily: {
        serif: ['var(--font-plus-jakarta)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
