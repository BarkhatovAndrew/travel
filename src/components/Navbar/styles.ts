import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledNavbar = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.main};
  transition: 0.3s;

  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  .sign-up-btn {
    border: none;
    background-color: black;
    color: white;
    border-radius: 10px;
    height: 40px;
    width: 120px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ul {
    padding: 0;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    display: flex;

    a {
      transition: 0.2s;
      cursor: pointer;
    }

    a:hover {
      color: #d7514e;
    }
  }

  .right-bar {
    width: 350px;
    margin-right: 50px;

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
    width: 250px;
    margin-left: 50px;

    li {
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.main};

        &:hover {
          color: #d7514e;
        }
      }
    }
  }
`
