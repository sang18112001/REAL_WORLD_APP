import React, { useEffect, useState } from 'react'
import { articleAPI, profileAPI } from '../../api/conduit'
import { useParams } from 'react-router-dom'
import ArticleRender from './ArticleRender'
import { IMultipleArticle, ISingleArticle } from '../../types'

const ArticleList = ({ artNav }: { artNav: string }) => {
  const { username } = useParams()
  const [articles, setArticles] = useState<ISingleArticle[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const offset = (page - 1) * 10
  useEffect(() => {
    const setStateValue = (response: IMultipleArticle) => {
      setArticles(response.articles)
      setTotalPages(Math.floor(response.articlesCount / 10) + 1)
    }
    switch (artNav) {
      case 'Global':
        articleAPI.getArticles(offset).then(res => setStateValue(res))
        break
      case 'Favourites':
        username && articleAPI.getArticleByFavorited(username, offset).then(res => setStateValue(res))
        break
      case 'MyArticles':
        username && profileAPI.getProfileArticle(username, 5, offset).then(res => setStateValue(res))
        break
      case 'Feed':
        profileAPI.getFeedArticles(offset).then(res => setStateValue(res))
        break
      default:
        articleAPI.getArticlesByTag(artNav, offset).then(res => setStateValue(res))
    }
  }, [artNav, page, username])
  if (articles.length === 0) {
    return <div className="article-preview">No article found!</div>
  }
  return (
    <>
      {articles?.map((article, index) => (
        <ArticleRender key={index} article={article} />
      ))}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              onClick={() => setPage(index + 1)}
              className={`page-item ng-scope ${page === index + 1 && 'active'}`}
            >
              <div style={{ cursor: 'pointer' }} className="page-link ng-binding">
                {index + 1}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default ArticleList
