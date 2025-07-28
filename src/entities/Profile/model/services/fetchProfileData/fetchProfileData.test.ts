import { fetchProfileData } from './fetchProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('fetchProfileData', () => {
  test('success', async () => {
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

    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.type).toBe('profile/fetchProfileData/fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.type).toBe('profile/fetchProfileData/rejected')
    expect(result.payload).toBe('Произошла ошибка при загрузке профиля')
  })
})
