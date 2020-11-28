import {ActionType} from '../Action/invoiceAction'

const list ={
    lists: []
}

const invoiceReducer = (state=list,action) => {
    switch (action.type){
        case ActionType.GET_INVOICE_DATA:{
            return {...state}
        }
      
        case  ActionType.GET_INVOICE_DATA_SUCCESS: {
            console.log(action.payload)
            return {...state, lists: action.payload.map((el, index) => ({...el, key: index}))}
          }
        case ActionType.GET_INVOICE_DATA_ERROR:{
            return {...state}
        }
  
        case ActionType.ADD_INVOICE_DATA:{
            console.log(action.payload);
            return {...state}
        }
        case ActionType.ADD_INVOICE_DATA_SUCCESS:{
            const newList = [...state.lists];
           
            newList.push(action.payload);
            
            return {...state, lists: newList}
        }
        case ActionType.ADD_INVOICE_DATA_ERROR:{
            return {...state}
        }
        case ActionType.DELETE_INVOICE_DATA:{
            return {...state}
        }
        case ActionType.DELETE_INVOICE_DATA_SUCCESS:{
            return {...state,lists: state.lists.filter(item=>item.id !== action.payload.id)}
        }
        case ActionType.DELETE_INVOICE_DATA_ERROR:{
            return {...state}
        }
        case ActionType.EDIT_INVOICE_DATA:{
            return {...state}
        }
        case ActionType.EDIT_INVOICE_DATA_SUCCESS:{
            console.log(action.payload);
            return {...state,lists: state.lists.map((item,index)=>{
                if(item.id === action.payload.id){
                    return {...action.payload,key: index}
                }
                return item;
            })}
        }
        case ActionType.EDIT_INVOICE_DATA_ERROR:{
            return {...state}
        }
        default:
            return state;
    }
}

export default invoiceReducer;
