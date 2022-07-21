import { IHouse } from '../../models/IHouse'
import { createSlice } from '@reduxjs/toolkit'

interface IHouseState {
  houses: IHouse[]
  isLoading: boolean
  error: string | unknown
}

const initialState: IHouseState = {
  houses: [],
  isLoading: false,
  error: '',
}

export const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
})

export default housesSlice.reducer
