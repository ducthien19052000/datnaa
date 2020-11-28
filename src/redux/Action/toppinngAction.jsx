export const ActionTypeCart = {
    ADD_TOPPING_CART :'ADD_TOPPING_CART',
    DELETE_TOPPING_CART : 'DELETE_TOPPING_CART',
    GET_NUMBERS_BASKET :'GET_NUMBERS_BASKET',
    UPDATE_TOPPING_CART:'UPDATE_TOPPING_CART',
    DELETE_ALL_TOPPING:'DELETE_ALL_TOPPING'
}



export const getNumbers=()=>{
    return (dispatch) =>{
        dispatch({
            type:ActionTypeCart.GET_NUMBERS_BASKET
        });
    }
}
export const addToping=(topping)=>{
    return{
        type: ActionTypeCart.ADD_TOPPING_CART,
        topping,
    
      
    }
}
export const removeToCart=(topping)=>{
        return{
            type: ActionTypeCart.DELETE_TOPPING_CART,
            topping
        
        }

}

export const updateToCart=(topping)=>{
    return{
        type:ActionTypeCart.UPDATE_TOPPING_CART,
        topping
    
        
    }
}
export const deleteAllCart=(topping)=>{
    return{
        type:ActionTypeCart.DELETE_ALL_TOPPING,
        topping
        
    }
}
