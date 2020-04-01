const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
  users:[ {fullName:'Joker', photoUrl:'https://i.pinimg.com/originals/85/dc/4e/85dc4e1241c7d76a97fa3da3a3ede637.jpg', id:1, location:{city:'Gotham', country:'USA'}, followed:false, status:'Im just kidding'},
          {fullName:'Alfred', photoUrl:'https://vignette.wikia.nocookie.net/earth279527/images/a/ad/Alfred_Pennyworth.jpg/revision/latest?cb=20170530030743', id:2, location:{city:'Gotham', country:'USA'}, followed:true, status:'I will gently tickle you with a mustache'},
          {fullName:'Robin',  photoUrl:'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/02/Robert-Pattinson-in-The-Batman-Robin.jpg', id:3, location:{city:'Gotham', country:'USA'}, followed:true, status:'Harley Q, Im fallen in love'},
          {fullName:'Penquin',  photoUrl:'https://i.pinimg.com/originals/15/ef/cf/15efcf357406457ee9849d7a842a87c2.jpg', id:4, location:{city:'Gotham', country:'USA'}, followed:false, status:'Losing weight'}]
}

export const usersReducer = (state = initialState, action) => {

  switch(action.type) {
    case FOLLOW:
      return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed:true}
        }
        return u
      })
    }
    case UNFOLLOW:
      return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed:false}
        }
        return u
      })
    }
    case SET_USERS:
      return {
        ...state, users:[...state.users, ...action.users]
      }
    default: return state
  }

}
export const followAC = (userId) => {
  return {type: FOLLOW, userId}
}
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => {
  return { type: SET_USERS, users }
}

export default usersReducer
