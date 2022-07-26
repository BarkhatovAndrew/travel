import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { articlesApi } from '../services/ArticlesService'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { pageSlice } from '../store/reducers/pageSlice'
import { BsFacebook, BsTelegram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import NotFoundPage from './NotFound'

const StyledArticle = styled.div`
  margin: 32px 50px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.main};
  position: relative;

  .header {
    font-size: 42px;
    position: absolute;
    left: 32px;
    top: 32px;
    color: white;
    background-color: black;
    padding: 12px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 350px;
  }

  .sidebar {
    width: 30%;
    padding: 0 24px;

    h3 {
      margin: 24px 0;
    }
  }

  .text {
    margin-left: 12px;
    width: 70%;
  }

  .content {
    margin-top: 50px;
    display: flex;
    font-size: 18px;

    ul {
      margin-left: 32px;
    }

    h2 {
      margin: 16px;
    }

    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .share {
    display: flex;
    justify-content: flex-end;
    margin: 8px 50px;
    svg {
      width: 34px;
      height: 34px;
      margin: 4px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(110%);
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`

const ArticlePage: FC = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const { data, isLoading, isError } = articlesApi.useFetchAllArticlesQuery(
    Number(params.pageId)
  )
  const article = useAppSelector((state) => state.pageReducer.page)

  useEffect(() => {
    if (data) {
      dispatch(pageSlice.actions.setPage(data))
    }
  }, [data, dispatch])

  if (isError) {
    return <p>Error</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (article) {
    return (
      <StyledArticle>
        <h1 className="header">{article.title}</h1>
        <img src={require(`../assets/${article.img}`)} alt={article.title} />
        <div className="content">
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="sidebar">
            <h3>Related Articles</h3>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
            <h3>Categories</h3>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
          </div>
        </div>
        <div className="share">
          <BsTelegram />
          <BsWhatsapp />
          <BsFacebook />
          <BsTwitter />
        </div>
      </StyledArticle>
    )
  }

  return <NotFoundPage />
}

export default ArticlePage
