import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
  test('render component', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('render component with class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
