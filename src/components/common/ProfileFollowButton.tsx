import React, { useState } from 'react'
import { followAPI } from '../../api/conduit'
import { IProfile } from '../../types'

const ProfileFollowButton = ({ profile }: { profile: IProfile }) => {
  const { username, following } = profile
  const [checkFollow, setCheckFollow] = useState(following)
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    if (checkFollow) followAPI.unFollowUser(username).then(() => setCheckFollow(false))
    else followAPI.followUser(username).then(() => setCheckFollow(true))
  }
  return (
    <button
      onClick={handleClick}
      className={`btn btn-sm ${checkFollow ? `btn-secondary` : `btn-outline-secondary`} action-btn`}
    >
      <i className="ion-plus-round"></i>
      &nbsp; {checkFollow ? 'Unfollow' : 'Follow'} {username}
    </button>
  )
}

export default ProfileFollowButton
