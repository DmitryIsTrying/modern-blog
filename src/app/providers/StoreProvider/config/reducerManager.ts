import { AnyAction, CombinedState, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { ReducerManager, StateSchema } from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: Array<keyof StateSchema> = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: CombinedState<StateSchema> | undefined, action: AnyAction) => {
      let newState = state ?? ({} as CombinedState<StateSchema>)

      if (keysToRemove.length > 0) {
        newState = { ...newState }
        for (const key of keysToRemove) {
          if (key in newState) {
            delete newState[key]
          }
        }
        keysToRemove = []
      }

      return combinedReducer(newState, action)
    },

    add: (key: keyof StateSchema, reducer: Reducer) => {
      if (!key || reducers[key]) return
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: keyof StateSchema) => {
      if (!key || !reducers[key]) return
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}
