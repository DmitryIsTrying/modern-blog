import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import { getLoginUsername } from './getLoginUsername'

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
