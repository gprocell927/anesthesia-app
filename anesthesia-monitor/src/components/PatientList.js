import React from 'react'
import Patients from './Patient'

const PatientList = ({ patients, onPatientClick}) => {
  return(
    <ul>
    { patients.map(patients => {
      return (
        <Patient
          key={patients.id}
          info={{
            name: patients.name,
            dob: patients.dob,
            species: patients.species,
            sex: patients.sex,
            pawarnings: patients.pawarnings,
            behavior: patients.behavior
          }}
          handleClick={() => onPatientClick(patients.id)}
          />
        )
      }) }
    </ul>
  )
}
