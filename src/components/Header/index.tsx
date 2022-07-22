import SearchBar from '../SearchBar'
import { StyledHeader } from './styles'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <StyledHeader animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <div className="header-text">
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -250, opacity: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          Explore your place to stay
        </motion.h1>
      </div>
      <SearchBar />
    </StyledHeader>
  )
}

export default Header
