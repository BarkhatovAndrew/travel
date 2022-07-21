import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IHouse } from '../models/IHouse'

export const housesApi = createApi({
  reducerPath: 'housesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://travel-ad8e2-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<IHouse[], null>({
      query: () => ({
        url: '/houses.json',
      }),
    }),
  }),
})
