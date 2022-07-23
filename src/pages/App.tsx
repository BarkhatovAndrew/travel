import Navbar from '../components/Navbar'
import Container from '../components/common/Container'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default App
