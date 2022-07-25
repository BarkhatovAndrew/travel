import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledPopularItem = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  background-color: white;
  position: relative;
  width: 30%;
  margin: 8px;
  border-radius: 10px;
  overflow: hidden;

  .like {
    position: absolute;
    right: 16px;
    top: 16px;
    background-color: white;
    width: 20px;
    color: black;
    height: auto;
    border-radius: 50%;
    padding: 6px;
    transition: 0.2s;
    cursor: pointer;
  }

  .like:hover {
    transform: scale(115%);
  }

  .description {
    padding: ${({ theme }) => theme.paddings.p3};
    color: black;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    padding: 0 12px;

    span {
      display: flex;
      align-items: center;
    }

    svg {
      margin-left: 8px;
      color: orange;
      width: 18px;
      height: auto;
    }
  }

  &:hover {
    -webkit-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  }
`
