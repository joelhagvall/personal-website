import { render, screen } from '@testing-library/react'
import Projects from '@/app/projects/page'

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

describe('Projects Page', () => {
  it('renders the projects content', () => {
    render(<Projects />)
    
    // Test for heading
    expect(screen.getByText('Projects')).toBeInTheDocument()
    
    // Test for project titles
    expect(screen.getByText('Tor Onion Site Scraper')).toBeInTheDocument()
    expect(screen.getByText('Carspotter')).toBeInTheDocument()
    expect(screen.getByText('Spotify Playlist Generator')).toBeInTheDocument()
    
    // Test for technology tags
    // Change this:
    expect(screen.getAllByText('Python')[0]).toBeInTheDocument()
    expect(screen.getByText('Flutter')).toBeInTheDocument()
  })
})