import { FC } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { StyledSearchBar } from './styles'
import { motion } from 'framer-motion'
import Tabs from './Tabs'

const SearchBar: FC = () => {
  return (
    <StyledSearchBar>
      <Tabs />
      <motion.div
        className="search-bar-panel"
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
      >
        <BiSearchAlt2 />
        <input type="text" placeholder="Norway, Oslo" className="search-city" />
        <input
          type="text"
          className="check-in-datepicker"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          placeholder="Check In"
        />
        <input
          type="text"
          className="check-out-datepicker"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          placeholder="Check Out"
        />
        <input
          onKeyDown={() => false}
          type="number"
          placeholder="Guests"
          min={1}
          max={12}
          className="guests"
        />
        <button className="search-btn">Search</button>
      </motion.div>
    </StyledSearchBar>
  )
}

export default SearchBar
