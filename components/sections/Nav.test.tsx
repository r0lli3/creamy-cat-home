import { render, screen, fireEvent } from '@testing-library/react'
import { Nav } from './Nav'

describe('Nav', () => {
  it('renders logo and CTA', () => {
    render(<Nav />)
    expect(screen.getByText('Creamy Cat Home')).toBeInTheDocument()
    expect(screen.getByText('Book a Stay')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Nav />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByRole('navigation', { name: 'mobile' })).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByRole('navigation', { name: 'mobile' })).toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'mobile' })).not.toBeInTheDocument()
  })
})
