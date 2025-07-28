import { validateProfileData } from './validateProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ValidateProfileError } from '@/entities/Profile/model/types/profile'

describe('validateProfileData', () => {
  test('good data', async () => {
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

    const result = validateProfileData(data)

    expect(result).toHaveLength(0)
  })

  test('empty data', async () => {
    const data = {}

    const result = validateProfileData(data)

    expect(result).toHaveLength(3)
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })

  test('no user data', async () => {
    const data = undefined

    const result = validateProfileData(data)

    expect(result).toHaveLength(1)
    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })
})
