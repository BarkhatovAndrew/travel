import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPage } from '../models/IPage'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://travel-ad8e2-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: (builder) => ({
    fetchAllArticles: builder.query<IPage, number>({
      query: (pageId) => `/articles/${pageId}.json`,
    }),
  }),
})
