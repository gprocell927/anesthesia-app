const readings = (state=[], action) => {
  console.log(action)
  switch (action.type) {
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
