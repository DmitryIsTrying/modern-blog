import { getLoginUsername } from './getLoginUsername'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginUsername', () => {
  test('should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'test',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('test')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
