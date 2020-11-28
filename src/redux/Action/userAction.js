export const ActionType = {
    GET_USER : 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERROR: 'GET_USER_ERROR',

    
}
export const getData = (list) => {
    return {
        type: ActionType.GET_USER,
        payload : list
    }
}
export const getDataSuccess = (list) => {
    return {
        type: ActionType.GET_USER_SUCCESS,
        payload : list
    }
}
export const getDataError = (list) => {
    return {
        type: ActionType.GET_USER_ERROR,
        payload : list
    }
}