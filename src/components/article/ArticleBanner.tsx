import React from 'react'
import { Link } from 'react-router-dom'
import { configTime } from '../../utils'
import { useAuthContext } from '../../hooks'
import ArticleAuthButton from './ArticleAuthButton'
import AritcleNotAuthButton from './AritcleNotAuthButton'
import { ISingleArticle } from '../../types'

interface IArticleBanner {
  article: ISingleArticle
}

const ArticleBanner = ({ article }: IArticleBanner) => {
  const [state, dispatch] = useAuthContext()
  const { currentUser } = state
  return (
    <div className="banner">
      <div className="container">
        <h1>
          {article.title}
        </h1>
        <div className="article-meta">
          <Link to={`/profile/${article.author.username}`}>
            <img src={article.author.image} />
          </Link>
          <div className="info">
            <Link to={`/profile/${article.author.username}`} className="author">
              {article.author.username}
            </Link>
            <span className="date">{configTime(article.createdAt)}</span>
          </div>
          {currentUser && currentUser.username === article.author.username ? (
            <ArticleAuthButton />
          ) : (
            <AritcleNotAuthButton article={article} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleBanner
