export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
}

export const updateProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(project.id).update({
            ...project
        }).then(() => {
            dispatch({type: 'UPDATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROJECT_ERROR', err});
        })
    }
}


export const deleteProject = (projectId) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).delete().then(() => {
            dispatch({type: 'DELETE_PROJECT', projectId});
        }).catch((err) => {
            dispatch({type: 'DELETE_PROJECT_ERROR', err});
        })
    }
}