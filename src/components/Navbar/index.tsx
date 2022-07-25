import { FC } from 'react'
import { menu } from '../../utils/menu'
import { StyledNavbar } from './styles'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { themeSlice } from '../../store/reducers/themeSlice'

const Navbar: FC = () => {
  const dispatch = useAppDispatch()

  const changeTheme = () => {
    dispatch(themeSlice.actions.switchTheme())
  }

  return (
    <StyledNavbar
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
    >
      <ul className="menu">
        {menu.map((item) => (
          <li key={item.title}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="right-bar">
        <li>
          <a onClick={changeTheme}>Theme</a>
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
