import { FC, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { StyledButton, StyledSearchBar } from './styles'
import { tabs } from '../../utils/headerTabs'

const SearchBar: FC = () => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0)
  const handleActiveTab = (id: 0 | 1 | 2) => {
    setActiveTab(id)
  }
  return (
    <StyledSearchBar>
      <div className="buttons">
        {tabs.map((tab) => (
          <StyledButton
            key={tab.id}
            active={tab.id === activeTab}
            onClick={() => handleActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.title}
          </StyledButton>
        ))}
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
