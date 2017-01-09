import React from 'react'

const Patients = ({ handleClick, info: { name, dob, species, sex, pawarnings, behavior} }) => {
  return (
    <li onClick = {handleClick}>
      {name}, {dob}, {species}, {sex}, {pawarnings}, {behavior}
    </li>
  )
}

export default Patients
