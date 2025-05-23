import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
  test('render component', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })

    await userEvent.click(screen.getByTestId('increment-btn'))

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    })

    await userEvent.click(screen.getByTestId('decrement-btn'))

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
