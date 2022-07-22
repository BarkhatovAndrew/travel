import SearchBar from '../SearchBar'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-text">
        <h1>Explore your place to stay</h1>
      </div>
      <SearchBar />
    </StyledHeader>
  )
}

export default Header
