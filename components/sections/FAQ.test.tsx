import { ReactNode } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FAQ } from './FAQ'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

function renderWithLanguageProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('FAQ', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders all questions in default Thai', () => {
    renderWithLanguageProvider(<FAQ />)
    expect(screen.getByText('แมวสามารถเข้าพักได้นานแค่ไหน?')).toBeInTheDocument()
  })

  it('expands an answer when question clicked', () => {
    renderWithLanguageProvider(<FAQ />)
    const q = screen.getByText('แมวสามารถเข้าพักได้นานแค่ไหน?')
    expect(screen.queryByText(/สามารถเข้าพักได้ตั้งแต่ 1 คืน/)).not.toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.getByText(/สามารถเข้าพักได้ตั้งแต่ 1 คืน/)).toBeInTheDocument()
  })

  it('collapses an open answer when clicked again', () => {
    renderWithLanguageProvider(<FAQ />)
    const q = screen.getByText('แมวสามารถเข้าพักได้นานแค่ไหน?')
    fireEvent.click(q)
    expect(screen.getByText(/สามารถเข้าพักได้ตั้งแต่ 1 คืน/)).toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.queryByText(/สามารถเข้าพักได้ตั้งแต่ 1 คืน/)).not.toBeInTheDocument()
  })
})
