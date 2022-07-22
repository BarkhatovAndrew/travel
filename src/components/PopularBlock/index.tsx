import { FC } from 'react'
import styled from 'styled-components'
import PopularItem from './PopularItem'
import { housesApi } from '../../services/HousesService'

const StyledPopularBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.main};
    margin-left: ${({ theme }) => theme.paddings.p5};
    margin-top: ${({ theme }) => theme.paddings.p5};
    margin-bottom: 50px;
  }

  .houses {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 32px;
  }
`

const PopularBlock: FC = () => {
  const { data } = housesApi.useFetchAllUsersQuery(null)
  return (
    <StyledPopularBlock>
      <h2>Popular places</h2>
      <div className="houses">
        {data &&
          data.map((house) => <PopularItem key={house.title} house={house} />)}
      </div>
    </StyledPopularBlock>
  )
}

export default PopularBlock
