import { ThunkConfig } from '@/app/providers/StoreProvider'
import i18n from '@/shared/config/i18n/i18n'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('profile')
      if (!response.data) {
        throw new Error('empty data')
      }

      return response.data
    } catch {
      return rejectWithValue(i18n.t('Произошла ошибка при загрузке профиля'))
    }
  },
)
