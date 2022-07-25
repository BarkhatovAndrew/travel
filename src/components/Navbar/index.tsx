import { FC, useEffect } from 'react'
import { menu } from '../../utils/menu'
import { StyledNavbar } from './styles'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { themeSlice } from '../../store/reducers/themeSlice'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const Navbar: FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.themeReducer.dark)

  const changeTheme = () => {
    dispatch(themeSlice.actions.switchTheme())
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

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
          {theme ? (
            <BsFillMoonStarsFill onClick={changeTheme} />
          ) : (
            <BsFillSunFill onClick={changeTheme} />
          )}
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
