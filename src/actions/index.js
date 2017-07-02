import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    palyoad: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFailure(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.employeeList();
};

const loginUserFailure = (dispatch) => {
  console.log(LOGIN_USER_FAILURE);
  dispatch({
    type: LOGIN_USER_FAILURE,
  });
};
