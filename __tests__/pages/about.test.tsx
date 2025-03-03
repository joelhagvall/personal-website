import { render, screen } from '@testing-library/react'
import About from '@/app/about/page'

// Mock the canvas and ResizeObserver
beforeAll(() => {
  // Mock ResizeObserver
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  // Mock canvas getContext
  HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
    clearRect: jest.fn(),
    beginPath: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    fillStyle: '',
  }));
});

// Mock all animation components
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className}>{children}</div>
    ),
    h1: ({ children, className, ...props }: any) => (
      <h1 className={className}>{children}</h1>
    ),
    p: ({ children, className, ...props }: any) => (
      <p className={className}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: any) => children,
  useAnimation: () => ({ start: jest.fn() }),
  useInView: () => [jest.fn(), true],
}))

// Mock the StarsBackground and ShootingStars components
jest.mock('@/components/ui/stars-background', () => ({
  StarsBackground: () => null,
}));

jest.mock('@/components/ui/shooting-stars', () => ({
  ShootingStars: () => null,
}));

describe('About Page', () => {
  it('renders the about page content', () => {
    render(<About />)
    
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/My name is Joel Hägvall/)).toBeInTheDocument()
  })
})