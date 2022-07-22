import { FC, ReactNode } from 'react'
import { StyledContainer } from './styles'

interface IProps {
  children: ReactNode
}

const Container: FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
