import React, { useState } from 'react'
import ProfileArticleNav from './ProfileArticleNav'
import ArticleList from '../common/ArticleList'

const ProfileArticle = () => {
  const [artNav, setArtNav] = useState('MyArticles')

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <ProfileArticleNav artNav={artNav} setArtNav={setArtNav} />
          <ArticleList artNav={artNav} />
        </div>
      </div>
    </div>
  )
}

export default ProfileArticle
