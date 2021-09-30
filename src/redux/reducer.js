import * as actions from './actions';

const initialState = {
  token: null,
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
      return state;
    case actions.REGISTER:
      return state;
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
