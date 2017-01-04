export const addReading = (info, id) => {
  // create new record in firebase from info
    // if successful, update the redux store
    // if failure, show an error message
  return {
    type: 'ADD_READING',
    info,
    id
  }
}

export const toggleReading = (id) => {
  return {
    type: 'TOGGLE_READING',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
