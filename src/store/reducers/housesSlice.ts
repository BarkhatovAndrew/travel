import { IHouse } from '../../models/IHouse'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  reducers: {
    setHouses(state, action: PayloadAction<IHouse[]>) {
      state.houses = action.payload
    },
  },
})

export default housesSlice.reducer
