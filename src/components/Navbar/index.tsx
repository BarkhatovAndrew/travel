import { FC } from 'react'
import { menu } from '../../utils/menu'
import { Link } from 'react-router-dom'
import { GrLanguage } from 'react-icons/gr'
import { StyledNavbar } from './styles'

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <ul className="menu">
        {menu.map((item) => (
          <li key={item.title}>
            <Link to={item.url}>{item.title}</Link>
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
