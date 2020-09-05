
export const createUser = (user) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user,
            mainLink: user.mainLink ? user.mainLink : false
        }).then(() => {
            dispatch({type: 'CREATE_USER', user});
        }).catch((err) => {
            dispatch({type: 'CREATE_USER_ERROR', err});
        })
    }
}

export const updateUser = (user) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(user.id).update({
            ...user
        }).then(() => {
            dispatch({type: 'UPDATE_USER', user});
        }).catch((err) => {
            dispatch({type: 'UPDATE_USER_ERROR', err});
        })
    }
}


export const deleteUser = (userId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(userId).delete().then(() => {
            dispatch({type: 'DELETE_USER', userId});
        }).catch((err) => {
            dispatch({type: 'DELETE_USER_ERROR', err});
        })
    }
}
