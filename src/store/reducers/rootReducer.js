import authReducer from './authReducer';
import projectReducer from './projectReducer';
import photoReducer from './photoReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    photo: photoReducer,
    user: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer