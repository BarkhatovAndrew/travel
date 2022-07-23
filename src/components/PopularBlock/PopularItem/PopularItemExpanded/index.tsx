import { FC } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const StyledExpanded = styled(motion.div)`
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

  .container {
    display: flex;
    width: 60vw;
    height: 500px;
    background-color: white;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`

const PopularItemExpanded: FC = () => {
  return (
    <StyledExpanded>
      <div className="container"></div>
    </StyledExpanded>
  )
}

export default PopularItemExpanded
