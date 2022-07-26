import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledNotFound = styled(motion.div)`
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 250px;
    color: ${({ theme }) => theme.colors.main};
  }
`

const NotFoundPage: FC = () => {
  return (
    <StyledNotFound>
      <motion.h1 animate={{ y: 0 }} initial={{ y: -100 }}>
        404
      </motion.h1>
    </StyledNotFound>
  )
}

export default NotFoundPage
