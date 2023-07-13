import React from 'react'
import ProfileEditButton from './ProfileEditButton'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks'
import ProfileFollowButton from '../common/ProfileFollowButton'
import { IProfile } from '../../types'

const ProfileUserInfo = ({ profile }: { profile: IProfile }) => {
  const { username } = useParams()
  const [state, dispatch] = useAuthContext()
  const { currentUser } = state
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={profile.image} className="user-img" />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>
            {currentUser && username === currentUser.username ? (
              <ProfileEditButton />
            ) : (
              <ProfileFollowButton profile={profile} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserInfo
