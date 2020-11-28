import {ActionType} from '../Action/userAction'

const list ={
    lists: []
}

const userReducer = (state=list,action) => {
    switch (action.type){
        case ActionType.GET_USER:{
            return {...state}
        }
      
        case  ActionType.GET_USER_SUCCESS: {
            console.log(action.payload)
        
            return {...state, lists: action.payload}
          }
        case ActionType.GET_USER_ERROR:{
            return {...state}
        }
        default:
            return state;
    }
}

export default userReducer;