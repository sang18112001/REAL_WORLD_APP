import React, { useRef, useEffect, useState } from 'react'
import { configTags } from '../../utils'
import { useNavigate, useParams } from 'react-router-dom'
import { articleAPI } from '../../api/conduit'
import { ISingleArticle } from '../../types'

const MyArticle = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState<ISingleArticle>()
  useEffect(() => {
    slug &&
      articleAPI.getArticleSlug(slug || '').then(res => {
        setArticle(res.article)
      })
  }, [slug])
  const navigate = useNavigate()
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLTextAreaElement>(null)
  const tagsRef = useRef<HTMLInputElement>(null)
  const handleNewArticle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const title = titleRef.current?.value || ''
    const description = descriptionRef.current?.value || ''
    const body = bodyRef.current?.value || ''
    const tags = tagsRef.current?.value || ''
    const tagList = configTags(tags)
    const newData = { article: { body, description, title, tagList } }
    if (!slug) {
      articleAPI.newArticle(newData).then(data => navigate(`/article/${data.article.slug}`))
    } else {
      articleAPI.editArticle(slug, newData).then(data => navigate(`/article/${data.article.slug}`))
    }
  }
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    ref={titleRef}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    defaultValue={article && article.title}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    ref={descriptionRef}
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    defaultValue={article && article.description}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    ref={bodyRef}
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    defaultValue={article && article.body}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    ref={tagsRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    defaultValue={article && article.tagList.join(',')}
                  />
                  <div className="tag-list"></div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={event => handleNewArticle(event)}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyArticle
