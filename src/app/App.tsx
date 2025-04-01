import { AppRouter } from '@/app/providers/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense } from 'react'

export const App = () => {
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
