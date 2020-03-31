import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import classes from './content.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

  return (
    <div className={classes.content}>
      <img src="https://website.noxium.es/wp-content/uploads/2017/08/fondo-banner-NBAgua.jpg" />
      <ProfileInfo />
      <MyPostsContainer  />
    </div> )
}

export default Profile;
