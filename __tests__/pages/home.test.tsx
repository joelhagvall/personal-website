import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock components and animations
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

jest.mock('@/components/ui/stars-background', () => ({
  StarsBackground: () => null,
}))

jest.mock('@/components/ui/shooting-stars', () => ({
  ShootingStars: () => null,
}))

describe('Home Page', () => {
  it('renders the main content', () => {
    render(<Home />)
    
    // Test for name
    expect(screen.getAllByText('Joel Hägvall')[0]).toBeInTheDocument()
    
    // Test for social links
    expect(screen.getByLabelText('GitHub profile')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn profile')).toBeInTheDocument()
    
    // Test for navigation links
    expect(screen.getAllByText('About Me')[0]).toBeInTheDocument()
    
    // Test for introduction content
    expect(screen.getByText(/Hi, i'm Joel Hägvall/)).toBeInTheDocument()
  })
})