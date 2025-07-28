import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { getUserAuthData } from '@/entities/User'
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)
  console.log('isAuth', isAuth)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(({ isAuthOnly }) => {
      if (isAuthOnly && !isAuth) return false
      return true
    })
  }, [isAuth])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className='pageWrapper'>{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  )
}
