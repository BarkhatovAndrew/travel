import Navbar from './components/Navbar'
import Header from './components/Header'
import Container from './components/common/Container'
import PromoBar from './components/PromoBar'
import PopularBlock from './components/PopularBlock'

function App() {
  return (
    <Container>
      <Navbar />
      <Header />
      <PromoBar />
      <PopularBlock />
    </Container>
  )
}

export default App
