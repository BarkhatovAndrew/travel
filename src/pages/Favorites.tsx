import { FC, useEffect } from 'react'
import { housesApi } from '../services/HousesService'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import PopularItem from '../components/PopularBlock/PopularItem'
import { housesSlice } from '../store/reducers/housesSlice'
import styled from 'styled-components'

const StyledLikedHouses = styled.div`
  color: ${({ theme }) => theme.colors.main};

  h2 {
    font-size: 36px;
    text-align: center;
    margin-left: 50px;
    margin-bottom: 50px;
    margin-top: 36px;
  }

  .houses {
    margin-left: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.main};
  }

  .not-found {
    img {
      width: 600px;
    }

    p {
      text-align: center;
    }
  }
`

const FavoritesPage: FC = () => {
  const { data } = housesApi.useFetchAllHousesQuery(null)
  const dispatch = useAppDispatch()
  const houses = useAppSelector((state) => state.housesReducer.houses)
  const likedHouses = houses
    .filter((house) => house.liked)
    .map((house) => <PopularItem house={house} key={house.id} />)

  useEffect(() => {
    if (data) {
      dispatch(housesSlice.actions.setHouses(data))
    }
  }, [data, dispatch])

  return (
    <StyledLikedHouses>
      <h2>Your favorites places</h2>
      <div className="houses">
        {likedHouses.length ? (
          likedHouses
        ) : (
          <div className="not-found">
            <img
              src="https://media4.giphy.com/media/6uGhT1O4sxpi8/giphy.gif?cid=ecf05e474thgxsf1qmefgayfwh7x03ytvrgso0yz2jcocs83&rid=giphy.gif&ct=g"
              alt="lol"
            />
            <p>Add something to your favorite</p>
          </div>
        )}
      </div>
    </StyledLikedHouses>
  )
}

export default FavoritesPage
