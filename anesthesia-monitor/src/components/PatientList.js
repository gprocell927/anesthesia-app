import React from 'react'
import Patients from './Patients'

const PatientList = ({ Patients, onPatientClick}) => {
  if (Patients.length === 0) {
    return (
      <h2> No registered patients </h2>
    )
  }
  return(
    <ul>
    { Patients.map(Patients => {
      return (
        <Patients
          key={Patients.id}
          info={{
            name: Patients.name,
            dob: Patients.dob,
            species: Patients.species,
            sex: Patients.sex,
            pawarnings: Patients.pawarnings,
            behavior: Patients.behavior
          }}
          handleClick={() => onPatientClick(Patients.id)}
          />
        )
      }) }
    </ul>
  )
}
