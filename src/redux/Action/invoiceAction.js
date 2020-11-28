export const ActionType = {
    GET_INVOICE_DATA : 'GET_INVOICE_DATA',
    GET_INVOICE_DATA_SUCCESS: 'GET_INVOICE_DATA_SUCCESS',
    GET_INVOICE_DATA_ERROR: 'GET_INVOICE_DATA_ERROR',

    ADD_INVOICE_DATA: 'ADD_INVOICE_DATA',
    ADD_INVOICE_DATA_SUCCESS: 'ADD_INVOICE_DATA_SUCCESS',
    ADD_INVOICE_DATA_ERROR: 'ADD_INVOICE_DATA_ERROR',

    DELETE_INVOICE_DATA: 'DELETE_INVOICE_DATA',
    DELETE_INVOICE_DATA_SUCCESS: 'DELETE_INVOICE_DATA_SUCCESS',
    DELETE_INVOICE_DATA_ERROR: 'DELETE_INVOICE_DATA_ERROR',

    EDIT_INVOICE_DATA: 'EDIT_INVOICE_DATA',
    EDIT_INVOICE_DATA_SUCCESS: 'EDIT_INVOICE_DATA_SUCCESS',
    EDIT_INVOICE_DATA_ERROR: 'EDIT_INVOICE_DATA_ERROR',

    

    SEARCH_DATA: 'SEARCH_DATA'
}
export const getData = (list) => {
    return {
        type: ActionType.GET_INVOICE_DATA,
        payload : list
    }
}
export const getDataSuccess = (list) => {
    return {
        type: ActionType.GET_INVOICE_DATA_SUCCESS,
        payload : list
    }
}
export const getDataError = (list) => {
    return {
        type: ActionType.GET_INVOICE_DATA_ERROR,
        payload : list
    }
}



export const addData = (list) => {
    return {
        type: ActionType.ADD_INVOICE_DATA,
        payload : list
    }
}

export const addDataSuccess = (list) => {
    return {
        type: ActionType.ADD_INVOICE_DATA_SUCCESS,
        payload : list
    }
}

export const addDataError = (list) => {
    return {
        type: ActionType.ADD_INVOICE_DATA_ERROR,
        payload : list
    }
}

export const deleteData = (id) => {
    return {
        type: ActionType.DELETE_INVOICE_DATA,
        payload : id
    }
}

export const deleteDataSuccess = (list) => {
    return {
        type: ActionType.DELETE_INVOICE_DATA_SUCCESS,
        payload : list
    }
}

export const deleteDataError = error => {
    return {
        type: ActionType.DELETE_INVOICE_DATA_ERROR,
        payload : {
            error,
        }
    }
}

export const editData = (list,id) => {
    return {
        type: ActionType.EDIT_INVOICE_DATA,
        payload: {
            list,
            id
        }
    }
}
export const editDataSuccess = (list) => {
    return {
        type: ActionType.EDIT_INVOICE_DATA_SUCCESS,
        payload: list
    }
}
export const editDataError = (list) => {
    return {
        type: ActionType.EDIT_INVOICE_DATA_ERROR,
        payload: list
    }
}

export const searchData = (list) => {
    return {
        type: ActionType.SEARCH_DATA,
        payload: list
    }
}

