import {ActionTypeCart} from '../Action/cartAction'

var data = JSON.parse(localStorage.getItem('CART'));
const listCart = data?data:[];

const cart =(state=listCart,action)=>{
    var {product,quantity,topping}=action;
    var index =-1;
    switch(action.type){
        case ActionTypeCart.ADD_PRODUCT_CART:
            console.log(action)
            index = findProductCart(state,product,topping);
           if(index!==-1){
               state[index].quantity+=quantity;
           }
           else{
            state.push({
                product,quantity,topping
            });
           }
           localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case ActionTypeCart.DELETE_PRODUCT_CART:
            index = findProductCart(state,product,topping);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
           
            return [...state];
            case ActionTypeCart.UPDATE_PRODUCT_CART:
                console.log('ạdkasjkd')
                index = findProductCart(state,product,topping);
                if(index!==-1){
                    state[index].quantity=quantity;

                }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case ActionTypeCart.DELETE_ALL_CART:
            state=product;
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
            default : return [...state];
    }
}

const  findProductCart=(cart,product,topping)=>{
    var index =-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                const check =equar(cart[i].topping,topping)
            if(check){
                index=i
                break
            }
                
            }
        }
    }
    return index;

}
function equar(a, b) {
    if (a.length !== b.length) {
        return false
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}

export default  cart;