const patients = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PATIENTS':
      return
        data: action.payload

      case 'ADD_PATIENT':
      return [ ...state,  {
        id: action.id,
        text: action.text,
        ...action.info
      }]

      default:
      return state
  }
}

export default patients
