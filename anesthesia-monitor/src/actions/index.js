export const addReading = (info, id) => {
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
