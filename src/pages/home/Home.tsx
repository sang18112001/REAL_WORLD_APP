import React, { useEffect, useState } from 'react'
import HomeBanner from '../../components/home/HomeBanner'
import HomeArticle from '../../components/home/HomeArticle'
import HomeTagList from '../../components/home/HomeTagList'
const Home = () => {
  const [requiredTag, setRequiredTag] = useState<string>('')
  const [artNav, setArtNav] = useState<string>('Feed')
  return (
    <div className="home-page">
      <HomeBanner />
      <div className="container page">
        <div className="row">
          <HomeArticle requiredTag={requiredTag} artNav={artNav} setArtNav={setArtNav} />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <HomeTagList setRequiredTag={setRequiredTag} setArtNav={setArtNav} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
