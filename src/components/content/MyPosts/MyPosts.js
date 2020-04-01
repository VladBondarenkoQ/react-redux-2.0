import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer'

let newPostElement = React.createRef()



const MyPosts = (props) => {
  let onAddPost = () => {
    //let text = newPostElement.current.value;
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
   }
  let postElements = props.posts.map( p => <Post message={p.message} likescount={p.likescount} key={p.id} /> )
  return (

      <div className={classes.myPosts}> My posts <br/>
        <div><textarea onChange={onPostChange} value={props.newPostText}  ref={newPostElement} /> </div>
        <div><button onClick={onAddPost} >Add post </button></div>
        {postElements}
      </div>
    )
}

export default MyPosts;
