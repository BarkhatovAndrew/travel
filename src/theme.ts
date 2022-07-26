import { createGlobalStyle, DefaultTheme } from 'styled-components'

const paddings = {
  p1: '4px',
  p2: '8px',
  p3: '16px',
  p4: '32px',
  p5: '50px',
}

export const lightTheme: DefaultTheme = {
  colors: {
    main: '#232323FF',
    secondary: '#dd5e5b',
    background: '#f1eff1',
  },
  paddings,
}

export const darkTheme: DefaultTheme = {
  colors: {
    main: '#ffffff',
    secondary: '#dd5e5b',
    background: '#1c1c1c',
  },
  paddings,
}

export const GlobalStyle = createGlobalStyle`
  html {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`
