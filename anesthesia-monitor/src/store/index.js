import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import readingsReducer from './reducers/readings';
import setFilterReducer from './reducers/setFilter'
import initialState from './initialState';

export default createStore(
  combineReducers({
    readings: readingsReducer,
    setFilter: setFilterReducer
  }),
  initialState,
  applyMiddleware(thunk)
);
