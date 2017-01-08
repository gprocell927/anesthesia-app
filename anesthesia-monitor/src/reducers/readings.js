const readings = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_READINGS':
      return action.payload
    case 'ADD_READING':
      return [...state, {
        id: action.id,
        text: action.text,
        ...action.info
      }]

  default:
    return state
  }
}

export default readings
