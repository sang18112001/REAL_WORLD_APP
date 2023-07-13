import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { articleAPI } from '../../api/conduit'

const ArticleAuthButton = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const handeDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    articleAPI.deleteArticle(slug || '').then(() => navigate(`/`))
  }
  return (
    <>
      <button onClick={() => navigate(`/edit_article/${slug}`)} className="btn btn-sm btn-outline-secondary">
        <span> Edit Article </span>
      </button>
      &nbsp;&nbsp;
      <button onClick={event => handeDelete(event)} className="btn btn-outline-danger btn-sm">
        <span> Delete Article </span>
      </button>
    </>
  )
}

export default ArticleAuthButton
