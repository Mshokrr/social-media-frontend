import api from '../lib/api';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';
export const LIKE_POST = 'LIKE_POST';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USERS = 'FETCH_USERS';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DEACTIVATE_USER = 'DEACTIVATE_USER';

export function login(user) {
  return (dispatch) => {
    api
      .post('/auth/login', { user })
      .then((response) => {
        dispatch({ type: LOGIN, data: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}

export function register(user) {
  return (dispatch) => {
    api
      .post('/auth/register', { user })
      .then((response) => {
        dispatch({ type: REGISTER, data: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getPosts(query) {
  return (dispatch) => {
    api
      .post('/search', { models: ['posts'] })
      .then((response) => {
        dispatch({ type: GET_POSTS, data: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
