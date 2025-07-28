import { profileActions, profileReducer } from './profileSlice'
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { updateProfileData } from '@/entities/Profile/model/services/updateProfileData/updateProfileData'

describe('profileSlice', () => {
  let state: DeepPartial<ProfileSchema>
  let form: DeepPartial<Profile>

  beforeEach(() => {
    state = {
      isLoading: false,
      readonly: true,
      data: undefined,
      error: undefined,
      validateError: [ValidateProfileError.NO_DATA],
    }

    form = {
      first: 'Yellow',
      lastname: 'Black',
      age: 19,
      currency: Currency.RUB,
      country: Country.RUSSIA,
      city: 'Moscow',
      username: 'altair',
      avatar: 'path/to/avatar',
    }
  })

  test('test set readonly', () => {
    const action = profileActions.setReadonly(false)
    const changedState = profileReducer(state as ProfileSchema, action)
    expect(changedState.readonly).toBe(false)
  })

  test('test update profile', () => {
    const action = profileActions.updateProfile(form)
    const changedState = profileReducer(state as ProfileSchema, action)
    expect(changedState.form).toEqual(form)
  })

  test('test cancel edit', () => {
    const action = profileActions.cancelEdit()
    const changedState = profileReducer(state as ProfileSchema, action)
    expect(changedState.form).toBeUndefined()
  })

  test('test extra updateProfileData pending', () => {
    const action = updateProfileData.pending
    const changedState = profileReducer(state as ProfileSchema, action)
    expect(changedState.validateError).toBeUndefined()
    expect(changedState.isLoading).toBeTruthy()
  })

  test('test extra updateProfileData fulfilled', () => {
    const action = updateProfileData.fulfilled(form, '')
    const changedState = profileReducer(state as ProfileSchema, action)
    expect(changedState.form).toEqual(form)
    expect(changedState.data).toEqual(form)
    expect(changedState.readonly).toBeTruthy()
    expect(changedState.isLoading).toBeFalsy()
  })
})
