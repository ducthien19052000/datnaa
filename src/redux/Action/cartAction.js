export const ActionTypeCart = {
    ADD_PRODUCT_CART :'ADD_PRODUCT_CART',
    DELETE_PRODUCT_CART : 'DELETE_PRODUCT_CART',
    GET_NUMBERS_BASKET :'GET_NUMBERS_BASKET',
    UPDATE_PRODUCT_CART:'UPDATE_PRODUCT_CART',
    DELETE_ALL_CART:'DELETE_ALL_CART'
}

export const addCart = (productName)=>{
    return (dispatch) =>{
        JSON.parse( localStorage.setItem('cart',productName));
        dispatch({
            type:ActionTypeCart.ADD_PRODUCT_CART,
            payload: productName
        });
    }
}

export const getNumbers=()=>{
    return (dispatch) =>{
        dispatch({
            type:ActionTypeCart.GET_NUMBERS_BASKET
        });
    }
}
export const addToCart=(product,quantity,topping)=>{
    return{
        type: ActionTypeCart.ADD_PRODUCT_CART,
        product,
        quantity,
        topping
    }
}
export const removeToCart=(product)=>{
        return{
            type: ActionTypeCart.DELETE_PRODUCT_CART,
            product
        
        }

}

export const updateToCart=(product,quantity,topping)=>{
    return{
        type:ActionTypeCart.UPDATE_PRODUCT_CART,
        product,
        quantity,
        topping
    }
}
export const deleteAllCart=(product)=>{
    return{
        type:ActionTypeCart.DELETE_ALL_CART,
        product
        
    }
}
