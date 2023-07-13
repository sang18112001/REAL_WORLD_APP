import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks'
import ArticleAuthButton from './ArticleAuthButton'
import AritcleNotAuthButton from './AritcleNotAuthButton'
import { configTime } from '../../utils'
import { ISingleArticle } from '../../types'

interface IArticleAction {
  article: ISingleArticle
}

const ArticleAction = ({ article }: IArticleAction) => {
  const [state, dispatch] = useAuthContext()
  const { currentUser } = state
  return (
    <div className="article-actions">
      <div className="article-meta">
        <Link to="profile.html">
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <Link to="" className="author">
            {article.author.username}
          </Link>
          <span className="date">{configTime(article.createdAt)}</span>
        </div>
        {currentUser.username === article.author.username ? (
          <ArticleAuthButton />
        ) : (
          <AritcleNotAuthButton article={article} />
        )}
      </div>
    </div>
  )
}

export default ArticleAction
