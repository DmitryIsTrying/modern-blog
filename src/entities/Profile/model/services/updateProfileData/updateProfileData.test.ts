import { updateProfileData } from './updateProfileData'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ValidateProfileError } from '@/entities/Profile/model/types/profile'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('updateProfileData', () => {
  test('success', async () => {
    const form = {
      first: 'Yellow',
      lastname: 'Black',
      age: 19,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'altair',
      avatar: 'path/to/avatar',
    }

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: form }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.type).toBe('profile/updateProfileData/fulfilled')
    expect(result.payload).toEqual(form)
  })

  test('no data in store', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: {} })

    const result = await thunk.callThunk()

    expect(thunk.api.put).not.toHaveBeenCalled()
    expect(result.type).toBe('profile/updateProfileData/rejected')
    expect(result.payload).toEqual([ValidateProfileError.NO_DATA])
  })

  test('server error', async () => {
    const form = {
      first: 'Yellow',
      lastname: 'Black',
      age: 19,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'altair',
      avatar: 'path/to/avatar',
    }

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.type).toBe('profile/updateProfileData/rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })
})
