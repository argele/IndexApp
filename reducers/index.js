//COMBINE ALL REDUCERS AUTH REDUCER MAINTIN TOKEN


import { combineReducers } from 'redux';
import auth from './auth_reducer';

export default combineReducers({
    auth
});