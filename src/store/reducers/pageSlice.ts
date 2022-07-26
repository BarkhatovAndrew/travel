import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPage } from '../../models/IPage'

interface IPageState {
  page: IPage | null
}

const initialState: IPageState = {
  page: null,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<IPage>) {
      state.page = action.payload
    },
  },
})

export default pageSlice.reducer
