import React, { useEffect, useState } from 'react'
import { tagsAPI } from '../../api/conduit'

interface ITagList {
  setRequiredTag: React.Dispatch<React.SetStateAction<string>>
  setArtNav: React.Dispatch<React.SetStateAction<string>>
}
const HomeTagList = ({ setRequiredTag, setArtNav }: ITagList) => {
  const [tags, setTags] = useState<string[]>([])
  useEffect(() => {
    tagsAPI.getTags().then(tags => setTags(tags.tags))
  }, [])
  const tagHandler = (tag: string) => {
    setRequiredTag(tag)
    setArtNav(tag)
  }
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <p key={index} className="tag-pill tag-default" style={{ cursor: 'pointer' }} onClick={() => tagHandler(tag)}>
          {tag}
        </p>
      ))}
    </div>
  )
}

export default HomeTagList
