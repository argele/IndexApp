import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';
import{
FACEBOOK_LOGIN_SUCCESS,
FACEBOOK_LOGIN_FAIL
}    from './Types' ;

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyA3SMFotGBEKqp2XE8fddeQiZLfWTRpUB4',
    authDomain: 'inde-2c15f.firebaseapp.com',
    databaseURL: 'https://inde-2c15f.firebaseio.com',
    projectId: 'inde-2c15f',
    storageBucket: 'inde-2c15f.appspot.com',
    messagingSenderId: '1023684797693'
  };

export const facebookLogin = () => async dispatch => {

    let token = await AsyncStorage.getItem('fb_token');
    
    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
        //Dispatch an action saying FB login is done
    }  else {
        //Start Up FB LOGIN PROCESS
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync
    ('618627531803233',{
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch ({ type: FACEBOOK_LOGIN_FAIL });
    }
       await AsyncStorage.setItem('fb_token', token);
       dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};