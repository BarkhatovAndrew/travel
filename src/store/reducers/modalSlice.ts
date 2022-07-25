import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHouse } from '../../models/IHouse'

interface IModalState {
  isOpen: boolean
  content: IHouse | null
}

const initialState: IModalState = {
  isOpen: false,
  content: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IHouse>) {
      state.isOpen = true
      state.content = action.payload
    },
    closeModal(state) {
      state.isOpen = false
    },
  },
})

export default modalSlice.reducer
