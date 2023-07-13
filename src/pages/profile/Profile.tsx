import React, { useState, useEffect } from "react";
import ProfileUserInfo from "../../components/profile/ProfileUserInfo";
import { Link, useParams } from "react-router-dom";
import { profileAPI } from "../../api/conduit";
import ProfileArticle from "../../components/profile/ProfileArticle";

const Profile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState();
  useEffect(() => {
    profileAPI.getProfileUser(username || "").then((response) => {
      setProfile(response.profile);
    });
  }, [username]);
  if (profile) {
    return (
      <div className="profile-page">
        <ProfileUserInfo profile={profile} />
        <ProfileArticle/>
      </div>
    );
  }
};

export default Profile;
