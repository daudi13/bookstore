import LoginDatabase from '../../../database/LoginUser';

const ADD_LOGIN_REQUEST = 'bookstore/login/GET_LOGIN_REQUEST';
const ADD_LOGIN_SUCCESS = 'bookstore/login/GET_LOGIN_SUCCESS';
const ADD_LOGIN_FAIL = 'bookstore/login/GET_LOGIN_FAIL';

const GET_LOGIN_REQUEST = 'bookstore/login/GET_LOGIN_REQUEST';
const GET_LOGIN_SUCCESS = 'bookstore/login/GET_LOGIN_SUCCESS';
const GET_LOGIN_FAIL = 'bookstore/login/GET_LOGIN_FAIL';

const intialState = {
  loading: false,
  error: '',
  user: {},
};

export const addLoginRequest = () => ({
  type: ADD_LOGIN_REQUEST,
});

export const addLoginSuccess = (user) => ({
  type: ADD_LOGIN_SUCCESS,
  payload: user,
});

export const addLoginFail = (error) => ({
  type: ADD_LOGIN_FAIL,
  payload: error,
});

export function addLogin(user) {
  return (dispatch) => {
    dispatch(addLoginRequest());
    const {
      email, password,
    } = user;
    LoginDatabase.loginUser(email, password)
      .then(() => {
        const userNew = {};
        userNew[email] = [{ email, password }];
        dispatch(addLoginSuccess(userNew));
      })
      .catch((error) => {
        dispatch(addLoginFail(error.message));
      });
  };
}
