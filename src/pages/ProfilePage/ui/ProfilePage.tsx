import { profileReducer } from '@/entities/Profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  return (
    <DynamicModuleLoader removeOnUnmount reducers={reducers}>
      <div>{t('PROFILE PAGE')}</div>
    </DynamicModuleLoader>
  )
}
export default ProfilePage
