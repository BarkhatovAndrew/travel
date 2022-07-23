import styled from 'styled-components'
import { motion } from 'framer-motion'

interface IButtonProps {
  active?: boolean
}

export const StyledButton = styled(motion.button)<IButtonProps>`
  transition: 0.2s;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : 'white'};
  color: ${(props) => (props.active ? 'white' : props.theme.colors.main)};

  &:hover {
    -webkit-filter: brightness(110%);
    transition: 0.2s;
  }
`
