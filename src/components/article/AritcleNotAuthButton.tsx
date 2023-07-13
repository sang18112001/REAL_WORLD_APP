import React from 'react'
import ArticleFavouriteBtn from '../common/ArticleFavouriteBtn'
import ProfileFollowButton from '../common/ProfileFollowButton';
import { ISingleArticle } from '../../types';

const AritcleNotAuthButton = (article: { article: ISingleArticle }) => {
  return (
    <>
      <ProfileFollowButton profile={article.article.author}/>
      &nbsp;&nbsp;
      <ArticleFavouriteBtn article={article.article} typeText={false} />
    </>
  )
}   

export default AritcleNotAuthButton
