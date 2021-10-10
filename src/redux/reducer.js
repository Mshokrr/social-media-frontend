import * as actions from './actions';

const initialState = {
  token: null,
  loggedIn: false,
  refreshToken: null,
  user: null,
  users: [],
  profile: null,
  posts: [],
  post: null,
  comments: [],
  comment: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        token: action.data.token,
        refreshToken: action.data.user.refreshToken,
        loggedIn: true,
        user: action.data.user,
      };
    case actions.LOGOUT:
      return {
        ...state,
        token: null,
        refreshToken: null,
        loggedIn: false,
        user: null,
      };
    case actions.REGISTER:
      return {
        ...state,
        token: action.data.token,
        refreshToken: action.data.user.refreshToken,
        loggedIn: true,
        user: action.data.user,
      };
    case actions.GET_POSTS:
      return {
        ...state,
        posts: action.data.posts,
      };
    case actions.CREATE_POST:
      return state;
    case actions.LIKE_POST:
      return state;
    case actions.CREATE_COMMENT:
      return state;
    case actions.FETCH_POSTS:
      return state;
    case actions.FETCH_USERS:
      return state;

    default:
      return state;
  }
}
