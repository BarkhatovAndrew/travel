import { FC } from 'react'
import { RiHotelLine } from 'react-icons/ri'
import { TbPlane } from 'react-icons/tb'
import { AiOutlineCar } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { StyledButton, StyledSearchBar } from './styles'

const SearchBar: FC = () => {
  return (
    <StyledSearchBar>
      <div className="buttons">
        <StyledButton active>
          <RiHotelLine />
          Hotel
        </StyledButton>
        <StyledButton>
          <TbPlane />
          Flight
        </StyledButton>
        <StyledButton>
          <AiOutlineCar />
          Car Rental
        </StyledButton>
      </div>
      <div className="search-bar-panel">
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
          type="number"
          placeholder="Guests"
          min={1}
          max={12}
          className="guests"
        />
        <button className="search-btn">Search</button>
      </div>
    </StyledSearchBar>
  )
}

export default SearchBar
