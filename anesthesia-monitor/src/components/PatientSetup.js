import React from 'react'

const PatientSetup = ({ handleSubmit, patients }) => {
  console.log(patients)
  let name
  let dob
  let species
  let sex
  let pawarnings
  let behavior
  let i = patients.length


  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()

        let info = {
          name: name.value,
          dob: dob.value,
          species: species.value,
          sex: sex.value,
          pawarnings: pawarnings.value,
          behavior: behavior.value
        }

        handleSubmit(info, i)
      }}>

        <span>Name: </span>
        <input ref={ (node) => { name = node }} />
        <span>DOB: </span>
        <input ref={ (node) => { dob = node }}/>
        <span>Species: </span>
        <input ref={ (node) => { species = node }}/>
        <span>Sex: </span>
        <input ref={ (node) => { sex = node }}/>
        <span>PA Warnings: </span>
        <input ref={ (node) => { pawarnings = node }}/>
        <span>Behavior Warnings: </span>
        <input ref={ (node) => { behavior = node }}/>
        <button children="Add Patient" />
      </form>
    </section>
  )
}

export default PatientSetup
