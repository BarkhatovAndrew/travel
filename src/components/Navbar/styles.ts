import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledNavbar = styled(motion.div)`
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
        cursor: pointer;
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
