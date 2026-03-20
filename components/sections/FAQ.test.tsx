import { render, screen, fireEvent } from '@testing-library/react'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders all questions', () => {
    render(<FAQ />)
    expect(screen.getByText('How long can my cat stay?')).toBeInTheDocument()
  })

  it('expands an answer when question clicked', () => {
    render(<FAQ />)
    const q = screen.getByText('How long can my cat stay?')
    expect(screen.queryByText(/Cats can stay/)).not.toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.getByText(/Cats can stay/)).toBeInTheDocument()
  })

  it('collapses an open answer when clicked again', () => {
    render(<FAQ />)
    const q = screen.getByText('How long can my cat stay?')
    fireEvent.click(q)
    expect(screen.getByText(/Cats can stay/)).toBeInTheDocument()
    fireEvent.click(q)
    expect(screen.queryByText(/Cats can stay/)).not.toBeInTheDocument()
  })
})
