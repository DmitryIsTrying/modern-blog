import { ThunkConfig } from '@/app/providers/StoreProvider'
import { User, userActions } from '@/entities/User'
import i18n from '@/shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post('login', authData)
      if (!response.data) {
        throw new Error('empty data')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      extra.navigate?.('/about')
      return response.data
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
    }
  },
)
