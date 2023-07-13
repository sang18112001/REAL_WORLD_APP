import React, { useState, useEffect } from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import { articleAPI, favoriteAPI } from '../../api/conduit'
import { ISingleArticle } from '../../types';

const ArticleFavouriteBtn = ({ article, typeText }: { article: ISingleArticle; typeText: boolean }) => {
  const { favorited, favoritesCount } = article
  const [checkFavorited, setCheckFavorited] = useState<boolean>(false)
  const [newFavoritesCount, setNewFavoritesCount] = useState<number>(0)
  useEffect(() => {
    setCheckFavorited(favorited)
    setNewFavoritesCount(favoritesCount)
  }, [article])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleFavourite = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIsLoading(true)
    if (!checkFavorited) {
      favoriteAPI.setFavouriteArticle(article.slug).then(() => {
        setNewFavoritesCount(cur => cur + 1)
        setCheckFavorited(cur => !cur)
        setIsLoading(false)
      })
    } else {
      favoriteAPI.deleteFavouriteArticle(article.slug).then(() => {
        setNewFavoritesCount(cur => cur - 1)
        setCheckFavorited(cur => !cur)
        setIsLoading(false)
      })
    }
  }
  return (
    <button
      onClick={event => handleFavourite(event)}
      className={`btn ${checkFavorited ? 'btn-primary' : 'btn-outline-primary'} btn-sm ${typeText && 'pull-xs-right'}`}
      disabled={isLoading}
    >
      {typeText ? (
        <>
          <AiTwotoneHeart /> {newFavoritesCount}
        </>
      ) : (
        <span>Favourite Post - {newFavoritesCount}</span>
      )}
    </button>
  )
}

export default ArticleFavouriteBtn
