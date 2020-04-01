const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return  {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {message:body, id:4} ]
        }
       }
    case UPDATE_NEW_MESSAGE_BODY:
       return {
        ...state,
        newMessageBody: action.body
        }

    default: return state

  }

}
export const sendMessageCreator = () => {
  return {type: SEND_MESSAGE}
      }
export const updateNewMessageBodyCreator = (text) => {
  return { type:UPDATE_NEW_MESSAGE_BODY, body: text}
}

export default dialogsReducer
