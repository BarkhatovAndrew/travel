import { FC } from 'react'
import PopularItem from './PopularItem'
import { housesApi } from '../../services/HousesService'
import { StyledPopularBlock } from './styles'

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
