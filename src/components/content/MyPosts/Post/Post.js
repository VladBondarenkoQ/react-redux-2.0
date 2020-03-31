import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {
  return (

        <div className={classes.item}>
        <img src='https://cdn1-www.superherohype.com/assets/uploads/2013/11/batmane3-1.jpg' />
        {props.message}
          <div className={classes.like}><span>like {props.likescount}</span></div>
        </div>

    )
}

export default Post;
