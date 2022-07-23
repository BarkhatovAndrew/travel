import { FC } from 'react'
import PopularItem from './PopularItem'
import { housesApi } from '../../services/HousesService'
import { StyledPopularBlock } from './styles'
import { useAppDispatch } from '../../hooks/redux'
import { housesSlice } from '../../store/reducers/housesSlice'

const PopularBlock: FC = () => {
  const { data } = housesApi.useFetchAllUsersQuery(null)
  const dispatch = useAppDispatch()
  const setHouses = () => {
    console.log(data)
    if (data) {
      dispatch(housesSlice.actions.setHouses(data))
    }
  }
  return (
    <StyledPopularBlock>
      <h2 onClick={setHouses}>Popular places</h2>
      <div className="houses">
        {data &&
          data.map((house) => <PopularItem key={house.title} house={house} />)}
      </div>
    </StyledPopularBlock>
  )
}

export default PopularBlock
