import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledExpanded = styled(motion.div)`
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 100%,
    rgba(0, 0, 0, 0.5) 100%
  );

  .close {
    position: absolute;
    right: 24px;
    top: 24px;
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 50vw;
    max-height: 80vh;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.main};
    left: 50%;
    top: 50%;
    overflow-y: scroll;
    border-radius: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    h2 {
      background-color: #1a1a1a;
      padding: 4px 8px;
      margin: 20px;
      position: absolute;
      font-weight: bolder;
      color: white;
      font-size: 40px;
    }

    h3 {
      margin: 8px 32px;
    }

    .info {
      display: flex;
      align-items: center;
      margin: 16px 32px;
      font-size: 24px;
      justify-content: space-between;
    }

    .description {
      margin: 0 32px 32px;
      font-size: 18px;
    }

    svg {
      color: orange;
    }
  }
`
