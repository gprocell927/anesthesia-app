import { initialState } from '../initialState.js';

const setFilter = (state='SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter

      default:
        return state;
  }
}

export default setFilterReducer 
