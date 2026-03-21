import { ReactNode } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

function renderWithLanguageProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('Nav', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders logo and default Thai CTA', () => {
    renderWithLanguageProvider(<Nav />)
    expect(screen.getByText('Creamy Cat Home')).toBeInTheDocument()
    expect(screen.getAllByText('จองเข้าพัก')[0]).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    renderWithLanguageProvider(<Nav />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('navigation', { name: 'mobile' })).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByRole('navigation', { name: 'mobile' })).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'mobile' })).not.toBeInTheDocument()
  })

  it('updates shared page copy when the language changes', () => {
    renderWithLanguageProvider(
      <>
        <Nav />
        <Hero />
      </>,
    )

    expect(screen.getAllByText('ดูแลแมวระดับพรีเมียม อย่างที่ควรเป็น')[0]).toBeInTheDocument()
    fireEvent.click(screen.getAllByLabelText('English')[0])
    expect(screen.getAllByText('Premium cat care, done right')[0]).toBeInTheDocument()
  })
})
