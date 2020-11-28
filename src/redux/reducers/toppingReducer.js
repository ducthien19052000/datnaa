import {ActionTypeCart} from '../Action/toppinngAction'

var data = JSON.parse(localStorage.getItem('TOPPING'));
const listCart = data?data:[];

const topping =(state=listCart,action)=>{
    var {topping}=action;
    var index =-1;
    switch(action.type){
        case ActionTypeCart.ADD_TOPPING_CART:
           
          
            state.push({
                topping
            });
           
           localStorage.setItem('TOPPING',JSON.stringify(state));
            return [...state];
        case ActionTypeCart.DELETE_PRODUCT_CART:
            index = findProductCart(state,topping);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('TOPPING',JSON.stringify(state));
           
            return [...state];
            case ActionTypeCart.UPDATE_PRODUCT_CART:
              
               
            localStorage.setItem('TOPPING',JSON.stringify(state));
            return [...state];
        case ActionTypeCart.DELETE_ALL_CART:
            state=topping;
            localStorage.setItem('TOPPING',JSON.stringify(state))
            return [...state]
            default : return [...state];
    }
}

const  findProductCart=(cart,product)=>{
    var index =-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].topping.id===product.id){
                index=i;
                break;
            }
        }
    }
    return index;

}

export default  topping;