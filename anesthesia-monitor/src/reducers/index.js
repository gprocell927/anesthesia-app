import { combineReducers } from 'redux'
import readings from './readings'
import setFilter from './setFilter'

const reducers = combineReducers({
  readings,
  setFilter
})

export default reducers
