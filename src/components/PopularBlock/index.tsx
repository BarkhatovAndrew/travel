import { FC } from 'react'
import styled from 'styled-components'
import PopularItem from './PopularItem'
import { housesApi } from '../../services/HousesService'

const StyledPopularBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.main};
    margin-left: ${({ theme }) => theme.paddings.p5};
    margin-top: ${({ theme }) => theme.paddings.p5};
  }
`

const PopularBlock: FC = () => {
  const { data } = housesApi.useFetchAllUsersQuery(null)
  return (
    <StyledPopularBlock>
      <h2>Popular places</h2>
      {data && data.map((item) => item.title)}
      <PopularItem />
    </StyledPopularBlock>
  )
}

export default PopularBlock
