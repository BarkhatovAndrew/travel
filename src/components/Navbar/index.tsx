import { FC } from 'react'
import styled from 'styled-components'
import { menu } from '../../utils/menu'
import { Link } from 'react-router-dom'
import { GrLanguage } from 'react-icons/gr'

const StyledNavbar = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: #f1eff1;

  .sign-up-btn {
    border: none;
    background-color: black;
    color: white;
    border-radius: 10px;
    height: 40px;
    width: 120px;
  }

  ul {
    padding: 0;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    display: flex;
  }

  a {
    transition: 0.2s;
  }

  a:hover {
    color: #d7514e;
  }

  .right-bar {
    width: 350px;
    margin-right: 20px;

    li {
      display: flex;
      align-items: center;

      a {
        margin-left: 8px;
      }
    }
  }

  .menu {
    width: 300px;

    li {
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`

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
