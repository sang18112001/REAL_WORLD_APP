import React, { useState, useEffect } from 'react'
import FormComment from '../comments/FormComment'
import { commentsAPI } from '../../api/conduit'
import CardComment from '../comments/CardComment'
import { IComment } from '../../types'

const ArticleComments = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    commentsAPI.getComments(slug).then(data => setComments(data.comments))
  }, [])
  console.log(comments);
  
  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <FormComment slug={slug} setComments={setComments} />
        {comments.map(comment => (
          <CardComment slug={slug} comment={comment} setComments={setComments} />
        ))}
      </div>
    </div>
  )
}

export default ArticleComments
