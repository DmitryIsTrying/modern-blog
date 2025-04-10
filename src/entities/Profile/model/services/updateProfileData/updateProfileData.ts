import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getProfileForm } from '@/entities/Profile/model/selectors/getProfileForm/getProfileForm'
import i18n from '@/shared/config/i18n/i18n'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('profile', formData)

      return response.data
    } catch {
      return rejectWithValue(i18n.t('Произошла ошибка при обновлении профиля'))
    }
  },
)
