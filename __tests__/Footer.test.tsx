import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('renders the footer content', () => {
    render(<Footer />)
    
    // Test for name presence
    expect(screen.getByText('Joel Hägvall')).toBeInTheDocument()
    
    // Test for location text
    expect(screen.getByText('Software Developer based in Stockholm, Sweden.')).toBeInTheDocument()
    
    // Test for social links
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    
    // Test for copyright text
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} • Built with Next.js`)).toBeInTheDocument()
  })
})