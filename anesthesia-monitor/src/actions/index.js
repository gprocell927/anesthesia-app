export const addReading = (text, id) => {
  return {
    type: 'ADD_READING',
    text,
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    filter
  }
}
