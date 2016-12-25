const readings = (state=[], action) => {
  switch (action.type) {
    case 'ADD_READING':
      return [...state, {id: action.id, text: action.text}]

  default:
    return state
  }
}
