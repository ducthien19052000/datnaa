export const ActionType = {
    GET_DATE_CATEGORY : 'GET_DATE_CATEGORY',
    GET_DATE_CATEGORY_SUCCESS: 'GET_DATE_CATEGORY_SUCCESS',
    GET_DATE_CATEGORY_ERROR: 'GET_DATE_CATEGORY_ERROR',

    ADD_DATA_CATEGORY: 'ADD_DATA_CATEGORY',
    ADD_DATA_CATEGORY_SUCCESS: 'ADD_DATA_CATEGORY_SUCCESS',
    ADD_DATA_CATEGORY_ERROR: 'ADD_DATA_CATEGORY_ERROR',

    DELETE_DATA_CATEGORY: 'DELETE_DATA_CATEGORY',
    DELETE_DATA_CATEGORY_SUCCESS: 'DELETE_DATA_CATEGORY_SUCCESS',
    DELETE_DATA_CATEGORY_ERROR: 'DELETE_DATA_CATEGORY_ERROR',

    EDIT_DATA_CATEGORY: 'EDIT_DATA_CATEGORY',
    EDIT_DATA_CATEGORY_SUCCESS: 'EDIT_DATA_CATEGORY_SUCCESS',
    EDIT_DATA_CATEGORY_ERROR: 'EDIT_DATA_CATEGORY_ERROR',

    SEARCH_DATA_CATEGORY: 'SEARCH_DATA_CATEGORY'
}
export const getDataCategory = (list) => {
    return {
        type: ActionType.GET_DATE_CATEGORY,
        payload : list
    }
}
export const getDataSuccess = (list) => {
    return {
        type: ActionType.GET_DATE_CATEGORY_SUCCESS,
        payload : list
    }
}
export const getDataError = (list) => {
    return {
        type: ActionType.GET_DATE_CATEGORY_ERROR,
        payload : list
    }
}

export const addData = (list) => {
    return {
        type: ActionType.ADD_DATA_CATEGORY,
        payload : list
    }
}

export const addDataSuccess = (list) => {
    return {
        type: ActionType.ADD_DATA_CATEGORY_SUCCESS,
        payload : list
    }
}

export const addDataError = (list) => {
    return {
        type: ActionType.ADD_DATA_CATEGORY_ERROR,
        payload : list
    }
}

export const deleteData = (id) => {
    return {
        type: ActionType.DELETE_DATA_CATEGORY,
        payload : id
    }
}

export const deleteDataSuccess = (list) => {
    return {
        type: ActionType.DELETE_DATA_CATEGORY_SUCCESS,
        payload : list
    }
}

export const deleteDataError = error => {
    return {
        type: ActionType.DELETE_DATA_CATEGORY_ERROR,
        payload : {
            error,
        }
    }
}

export const editData = (list,id) => {
    return {
        type: ActionType.EDIT_DATA_CATEGORY,
        payload: {
            list,
            id
        }
    }
}
export const editDataSuccess = (list) => {
    return {
        type: ActionType.EDIT_DATA_CATEGORY_SUCCESS,
        payload: list
    }
}
export const editDataError = (list) => {
    return {
        type: ActionType.EDIT_DATA_CATEGORY_ERROR,
        payload: list
    }
}

export const searchData = (list) => {
    return {
        type: ActionType.SEARCH_DATA_CATEGORY,
        payload: list
    }
}

