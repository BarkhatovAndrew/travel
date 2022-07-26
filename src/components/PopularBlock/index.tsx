import { FC, useEffect } from 'react'
import PopularItem from './PopularItem'
import { housesApi } from '../../services/HousesService'
import { StyledPopularBlock } from './styles'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { housesSlice } from '../../store/reducers/housesSlice'

const PopularBlock: FC = () => {
  const { data } = housesApi.useFetchAllHousesQuery(null)
  const dispatch = useAppDispatch()
  const houses = useAppSelector((state) => state.housesReducer.houses)

  useEffect(() => {
    if (data) {
      dispatch(housesSlice.actions.setHouses(data))
    }
  }, [data, dispatch])

  return (
    <StyledPopularBlock>
      <h2>Popular places</h2>
      <div className="houses">
        {houses.map((house) => (
          <PopularItem key={house.title} house={house} />
        ))}
      </div>
    </StyledPopularBlock>
  )
}

export default PopularBlock
