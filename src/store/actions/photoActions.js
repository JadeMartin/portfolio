export const uploadPhotoToDb = (url, photoName) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('images').add({
            photoName,
            url
        }).then(() => {
            dispatch({type: 'CREATE_IMAGE', url});
        }).catch((err) => {
            dispatch({type: 'CREATE_IMAGE_ERROR', err});
        })
    }
}


export const updateImage = (image, imageId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('images').doc(imageId).update({
            ...image
        }).then(() => {
            dispatch({type: 'UPDATE_PROJECT, project'});
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROJECT_ERROR', err});
        })
    }
}

export const deleteImage = (imageId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('images').doc(imageId).delete().then(() => {
            dispatch({type: 'DELETE_IMAGE', imageId});
        }).catch((err) => {
            dispatch({type: 'DELETE_IMAGE_ERROR', err});
        })
    }
}
