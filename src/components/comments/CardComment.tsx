import React from 'react'
import { Link } from 'react-router-dom'
import { configTime } from '../../utils'
import { FaTrash } from 'react-icons/fa'
import { commentsAPI } from '../../api/conduit'
import { IComment } from '../../types'
interface ICardComment {
  comment: IComment
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
  slug: string
}
const CardComment = ({ comment, setComments, slug }: ICardComment) => {
  const handleDelete = (id: number) => {
    commentsAPI
      .deleteComment(slug, id)
      .then(() => setComments((prev: IComment[]) => prev.filter((item: IComment) => item.id != id)))
  }
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to={`/profile/${comment.author.username}`} className="comment-author">
          <img src={comment.author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link to={`/profile/${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">{configTime(comment.createdAt)}</span>
        <FaTrash style={{ float: 'right', cursor: 'pointer' }} onClick={() => handleDelete(comment.id)} />
      </div>
    </div>
  )
}

export default CardComment
