import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const configureStore = (initialState) => {
  return createStoreWithMiddleware(reducer, initialState);
};

export default configureStore;

export const store = configureStore();
