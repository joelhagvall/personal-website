import { render, screen } from '@testing-library/react'
import Resume from '@/app/resume/page'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  },
}))

describe('Resume Page', () => {
  it('renders the resume content', () => {
    render(<Resume />)
    
    // Test for main sections
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
  })
})