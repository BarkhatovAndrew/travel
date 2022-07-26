import { combineReducers, configureStore } from '@reduxjs/toolkit'
import housesReducer from './reducers/housesSlice'
import themeReducer from './reducers/themeSlice'
import modalReducer from './reducers/modalSlice'
import pageReducer from './reducers/pageSlice'
import { housesApi } from '../services/HousesService'
import { setupListeners } from '@reduxjs/toolkit/query'
import { articlesApi } from '../services/ArticlesService'

const rootReducer = combineReducers({
  housesReducer,
  modalReducer,
  themeReducer,
  pageReducer,
  [housesApi.reducerPath]: housesApi.reducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(housesApi.middleware, articlesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
