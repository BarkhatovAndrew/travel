import Navbar from './components/Navbar'
import Header from './components/Header'
import Container from './components/common/Container'
import PromoBar from './components/PromoBar'
import PopularBlock from './components/PopularBlock'
import Footer from './components/Footer'

function App() {
  return (
    <Container>
      <Navbar />
      <Header />
      <PromoBar />
      <PopularBlock />
      <Footer />
    </Container>
  )
}

export default App
