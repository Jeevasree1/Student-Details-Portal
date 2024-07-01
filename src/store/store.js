// store.js
import { createStore, combineReducers } from 'redux';
import studentReducer from '../reducers/studentReducer';

const rootReducer = combineReducers({
  student: studentReducer,
  // Add other reducers if any
});

const store = createStore(rootReducer);

export default store;
