import { combineReducers } from 'redux'
import readings from './readings'
import setFilter from './setFilter'
import patients from './patients'

const reducers = combineReducers({
  readings,
  setFilter,
  patients
})

export default reducers
