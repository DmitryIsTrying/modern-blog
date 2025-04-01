import { CounterSchema } from './../types/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  let state: CounterSchema
  beforeEach(() => {
    state = { value: 10 }
  })

  test('should decrement value', () => {
    expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 })
  })

  test('should increment value', () => {
    expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 })
  })

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
  })

  test('should work with init state', () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({ value: 0 })
  })
})
