import { getProfileData } from './getProfileData'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

const data = {
  first: 'Yellow',
  lastname: 'Black',
  age: 19,
  currency: Currency.RUB,
  country: Country.RUSSIA,
  city: 'Moscow',
  username: 'altair',
  avatar: 'path/to/avatar',
}

describe('getProfileData', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
