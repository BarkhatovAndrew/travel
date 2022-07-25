import { FC } from 'react'
import { menu } from '../../utils/menu'
import { GrLanguage } from 'react-icons/gr'
import { StyledNavbar } from './styles'

const Navbar: FC = () => {
  return (
    <StyledNavbar
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
    >
      <ul className="menu">
        {menu.map((item) => (
          <li key={item.title}>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
      <ul className="right-bar">
        <li>
          <GrLanguage />
          <a>Language</a>
        </li>
        <li>
          <a>Sign In</a>
        </li>
        <li>
          <button className="sign-up-btn">Sign Up</button>
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
