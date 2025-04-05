import { AnyAction, configureStore, Dispatch, ReducersMapObject, ThunkDispatch } from '@reduxjs/toolkit'

import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api/api'
import type { NavigateOptions, To } from 'react-router-dom'
import { ReduxStoreWithManager, StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState ?? {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  }) as ReduxStoreWithManager

  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>
