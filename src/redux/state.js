import sidebarReducer from './sidebar-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'


let store = {
  _state: {
    profilePage: {
    posts: [
     { id:1, message:'Hi, world', likescount:'4'},
     {id:2, message:'I love my car', likescount:'20'}
   ],
   newPostText: 'hi motherfucker'
  },
  dialogsPage: {
    dialogs: [
      {name:'Alfred', id:'1'},
      {name:'Joker', id:'2'},
      {name:'Pinquin', id:'3'}
    ], //dialogs
    messages: [
      {message:'Your batCar waiting for', id:1},
      {message:'Hi, dollie', id:2},
      {message:'Mailrow str. tonight at 2am', id:3}
    ],
    newMessageBody: ''
  },
  sidebar: {}
},
_callSubscriber(){console.log('state changed')},
  getState(){
    return this._state
  },
  subscribe(observer){
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage =  profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)


} }


window.store=store

export default store
