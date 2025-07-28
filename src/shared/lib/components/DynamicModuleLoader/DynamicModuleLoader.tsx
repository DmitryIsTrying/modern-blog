import { Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider'
import { PropsWithRequiredChildren } from '@/shared/lib/customTypes/PropsWithRequiredChildren'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoader {
  reducers: ReducersList
  removeOnUnmount?: boolean
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeOnUnmount,
}: PropsWithRequiredChildren<DynamicModuleLoader>) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    for (const key in reducers) {
      const typedKey = key as StateSchemaKey
      store.reducerManager.add(typedKey, reducers[typedKey]!)
      dispatch({ type: `@INIT ${typedKey} reducer` })
    }

    return () => {
      if (removeOnUnmount) {
        for (const key in reducers) {
          const typedKey = key as StateSchemaKey
          store.reducerManager.remove(typedKey)
          dispatch({ type: `@DESTROY ${typedKey} reducer` })
        }
      }
    }
  }, [])

  return <>{children}</>
}
