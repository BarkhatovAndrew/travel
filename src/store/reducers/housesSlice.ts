import { IHouse } from '../../models/IHouse'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IHouseState {
  houses: IHouse[]
}

const initialState: IHouseState = {
  houses: [],
}

export const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setHouses(state, action: PayloadAction<IHouse[]>) {
      const fromStorage = JSON.parse(
        localStorage.getItem('liked_houses') ?? '[]'
      )
      state.houses = action.payload.map((house) => ({
        ...house,
        liked: fromStorage.includes(house.id),
      }))
    },
    likeHouse(state, action: PayloadAction<string>) {
      state.houses = state.houses.map((house) =>
        house.id === action.payload ? { ...house, liked: !house.liked } : house
      )
    },
  },
})

export default housesSlice.reducer
