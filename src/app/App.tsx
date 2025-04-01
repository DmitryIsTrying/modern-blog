import { AppRouter } from '@/app/providers/router'
import { userActions } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='contentPage'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
