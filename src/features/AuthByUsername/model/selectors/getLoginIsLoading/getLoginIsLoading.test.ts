import { getLoginIsLoading } from './getLoginIsLoading'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginIsLoading', () => {
  test('should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
