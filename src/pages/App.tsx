import Navbar from '../components/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyle, lightTheme } from '../theme'
import { useAppSelector } from '../hooks/redux'
import PopularItemExpanded from '../components/PopularBlock/PopularItem/PopularItemExpanded'

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.3s;
`

function App() {
  const themeType = useAppSelector((state) => state.themeReducer.dark)
  const isModalOpen = useAppSelector((state) => state.modalReducer.isOpen)

  return (
    <ThemeProvider theme={themeType ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledDiv>
        <Container>
          <Navbar />
          <Outlet />
          <Footer />
          {isModalOpen && <PopularItemExpanded />}
        </Container>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
