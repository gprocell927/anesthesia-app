export const addReading = (text, id) => {
  return {
    type: 'ADD_READING',
    text,
    id
  }
}
