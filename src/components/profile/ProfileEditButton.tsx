import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants'

const ProfileEditButton = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(PATH.SETTINGS)}
      className="btn btn-sm btn-outline-secondary action-btn"
    >
      <i className="ion-gear-a"></i>
      &nbsp; Edit Profile Settings
    </button>
  )
}

export default ProfileEditButton
