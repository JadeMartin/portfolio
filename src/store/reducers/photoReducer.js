const initState = {
    authError: null
}

const photoReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_IMAGE_ERROR':
            return {
                ...state, 
                authError: action.err.message
            }
        case 'CREATE_IMAGE':
            return {
                ...state,
                authError: null
            }
        case 'UPDATE_PROJECT':
            return {
                ...state,
                authError: null
            }
        case 'UPDATE_PROJECT_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'DELETE_IMAGE':
            return {
                ...state,
                authError: null
            }
        case 'DELETE_IMAGE_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        default: 
            return state;
    
    }
}

export default photoReducer