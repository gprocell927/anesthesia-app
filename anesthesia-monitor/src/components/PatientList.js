import React from 'react'
import Patient from './Patient'

const PatientList = ({ patients, onPatientClick}) => {
  return(
    <ul> 
    { patient.map(patient => {
      return (
        <Patient
          key={patient.id}
          info={{
            name: patient.name,
            dob: patient.dob,
            species: patient.species,
            sex: patient.sex,
            pawarnings: patient.pawarnings,
            behavior: patient.behavior
          }}
          handleClick={() => onPatientClick(patient.id)}
          />
        )
      }) }
    </ul>
  )
}
