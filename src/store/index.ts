import { combineReducers, configureStore } from '@reduxjs/toolkit'
import housesReducer from './reducers/housesSlice'
import themeReducer from './reducers/themeSlice'
import modalReducer from './reducers/modalSlice'
import { housesApi } from '../services/HousesService'
import { setupListeners } from '@reduxjs/toolkit/query'

const rootReducer = combineReducers({
  housesReducer,
  modalReducer,
  themeReducer,
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
