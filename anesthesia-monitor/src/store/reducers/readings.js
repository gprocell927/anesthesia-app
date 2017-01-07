import { initialState } from '../initialState';

export default function readingsReducer(state = initialState.readings, action) {
  switch(action.type) {
    case 'FETCH_READINGS':
      return {
        data: action.readings
      };

    case 'ADD_READING':
      return [ ...state, {
          id: action.id,
          text: action.text,
          ...action.info
        }]


    default:
      return state;
  };
};
