import React, { useRef } from 'react'
import { useAuthContext } from '../../hooks'
import { commentsAPI } from '../../api/conduit'
import { IComment } from '../../types';

interface IFormComment {
  slug: string; 
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

const FormComment = ({ slug, setComments }: IFormComment) => {
  const [state, dispatch] = useAuthContext()
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    commentsAPI.addComment(slug, { comment: { body: commentRef?.current?.value || '' } }).then(data => {
      setComments((prev: IComment[]) => [...prev, data.comment])
    })
  }
  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea ref={commentRef} className="form-control" placeholder="Write a comment..." rows={3}></textarea>
      </div>
      <div className="card-footer">
        <img src={state.currentUser.image} className="comment-author-img" />
        <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
          Post Comment
        </button>
      </div>
    </form>
  )
}

export default FormComment
