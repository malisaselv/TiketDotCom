import {combineReducers} from 'redux';
import ReducerCount from './ReducerCount';

const appReducer = combineReducers({
  counter: ReducerCount,
});

export default (state, action) => {
  return appReducer(state, action);
};
