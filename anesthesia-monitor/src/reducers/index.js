import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import readings from './readings'
import setFilter from './setFilter'

const reducers = combineReducers({
  readings,
  setFilter,
  firebase
})

export default reducers
