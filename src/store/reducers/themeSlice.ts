import { createSlice } from '@reduxjs/toolkit'

interface IThemeState {
  dark: boolean
}

const initialState: IThemeState = {
  dark: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      state.dark = !state.dark
    },
  },
})

export default themeSlice.reducer
