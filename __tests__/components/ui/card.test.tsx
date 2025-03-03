import { render } from '@testing-library/react'
import { Card } from '@/components/ui/card'

describe('Card Component', () => {
  it('renders with default props', () => {
    const { container } = render(
      <Card>
        <p>Test content</p>
      </Card>
    )
    
    expect(container.firstChild).toHaveClass('rounded-lg border bg-card text-card-foreground shadow-sm')
  })

  it('renders with custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <p>Test content</p>
      </Card>
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })
})