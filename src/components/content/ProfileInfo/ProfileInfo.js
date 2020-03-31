import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
      <div className={classes.profileInfo}>
        <div className={classes.ava}>
        <img src='https://cdn1-www.superherohype.com/assets/uploads/2013/11/batmane3-1.jpg' />
        </div>
        <div className={classes.description}>
          Name: Bruce Waine <br/>
          Nick: Batman <br/>
          Age: 40 y.o.
        </div>
      </div>)
}

export default ProfileInfo;
