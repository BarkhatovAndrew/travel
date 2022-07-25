import { createSlice } from '@reduxjs/toolkit'

interface IThemeState {
  dark: boolean
}

const initialState: IThemeState = {
  dark: localStorage.getItem('theme') === 'true',
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
