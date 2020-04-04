import { createStore, combineReducers } from 'redux';
import User from './User';

export default createStore(
  combineReducers({
    user: User,
  }),
);
