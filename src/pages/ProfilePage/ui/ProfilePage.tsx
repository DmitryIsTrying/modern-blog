import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useEffect } from 'react'

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  return (
    <DynamicModuleLoader removeOnUnmount reducers={reducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}
export default ProfilePage
