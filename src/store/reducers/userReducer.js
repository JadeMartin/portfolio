
const initState = {
    authError: null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                authError: null
            };
        
        case 'CREATE_USER_ERROR':
            return {
                ...state,
                authError: action.err.message
            };
        case 'UPDATE_USER':
            return {
                ...state,
                authError: null
            };
        case 'UPDATE_USER_ERROR':
            return {
                ...state,
                authError: action.err.message
            };
        case 'DELETE_USER':
            return {
                ...state,
                authError: null
            };
        case 'DELETE_USER_ERROR':
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
}

export default userReducer