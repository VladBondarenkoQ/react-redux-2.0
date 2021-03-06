const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
posts: [
 { id:1, message:'Hi, world', likescount:'4'},
 {id:2, message:'I love my car', likescount:'20'}
],
newPostText: 'hi motherfucker'
}

export const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: {
        let newPost = {
          id:5, message:state.newPostText, likescount:'0'
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''}
       }
    case UPDATE_NEW_POST_TEXT:
        return {...state,  newPostText: action.newText}
    default: return state
  }

}
export const addPostActionCreator = () => {
  return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
  return { type:UPDATE_NEW_POST_TEXT, newText: text
  }
}

export default profileReducer
