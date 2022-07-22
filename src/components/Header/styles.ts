import styled from 'styled-components'
import background from '../../assets/houseBg.jpg'

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  background: url(${background}) no-repeat 0 -360px;
  background-size: 1280px;
  position: relative;

  .header-text {
    width: 35%;
    margin-left: 50px;
  }

  h1 {
    font-size: 80px;
    margin-top: 50px;
    background: #cd5152;
    background: linear-gradient(to right, #cd5152 0%, #262626 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
