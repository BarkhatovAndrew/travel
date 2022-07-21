import { combineReducers, configureStore } from '@reduxjs/toolkit'
import housesReducer from './reducers/housesSlice'
import { housesApi } from '../services/HousesService'
import { setupListeners } from '@reduxjs/toolkit/query'

const rootReducer = combineReducers({
  housesReducer,
  [housesApi.reducerPath]: housesApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(housesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
