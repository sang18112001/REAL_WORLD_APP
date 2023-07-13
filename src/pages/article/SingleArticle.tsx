import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { articleAPI } from '../../api/conduit'
import ArticleBanner from '../../components/article/ArticleBanner'
import ArticleAction from '../../components/article/ArticleAction'
import ArticleComments from '../../components/article/ArticleComments'
import ArticleTagList from '../../components/common/ArticleTagList'
import { isAuth } from '../../utils'
import { PATH } from '../../constants'
import { ISingleArticle } from '../../types'

const SingleArticle = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState<ISingleArticle>()
  useEffect(() => {
    articleAPI.getArticleSlug(slug || '').then(res => {
      setArticle(res.article)
    })
  }, [slug])
  if (article) {
    return (
      <div className="article-page">
        <ArticleBanner article={article} />
        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <p>{article?.body}</p>
            </div>
          </div>
          <ul className="tag-list" style={{ float: 'left' }}>
            <ArticleTagList tagList={article.tagList} />
          </ul>
          <br />
          <hr />
          <ArticleAction article={article} />
          {isAuth() ? (
            <ArticleComments slug={slug || ''} />
          ) : (
            <p style={{ textAlign: 'center' }}>
              <Link to={PATH.SIGNIN}>Sign in</Link> or <Link to={PATH.SIGNUP}>sign up</Link> to add comments on this article.
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default SingleArticle
