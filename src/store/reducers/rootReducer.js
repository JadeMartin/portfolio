import authReducer from './authReducer';
import projectReducer from './projectReducer';
import photoReducer from './photoReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    photo: photoReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer