import firebase, { reference } from '../utils/firebaseClient'

export const fetchReadings = () => {
  return dispatch => {
    firebase.on('value', snapshot => {
      dispatch({
        type: 'FETCH_READINGS',
        payload: snapshot.val()
      })
    })
  }
}

export const addReading = (reading) => {
  // create new record in firebase from info
    // if successful, update the redux store
    // if failure, show an error message
  return dispatch => {
    const id = reference.push(reading).path.o[1]
    dispatch({
      type: 'ADD_READING',
      info: reading,
      id
    })
  }
      // .then(res => console.log(res))
      // .catch(err => console.error(err))
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

export const addPatient = (patient) => {
  return dispatch => {
    const id = reference.push(patient).path.o[1]
    dispatch({
      type: 'ADD_PATIENT',
      info: patient,
      id
    })
  }
}
