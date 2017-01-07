import React from 'react'

const PatientSetup = () => {
  return (
    <section>
      <form>
        <span>Name: </span><input value="Name"/>
        <span>DOB: </span><input value = "DOB"/>
        <span>Species: </span><input value="Species"/>
        <span>Sex: </span><input value="Sex"/>
        <span>PA Warnings: </span><input value="PA Warnings"/>
        <span>Behavior Warnings: </span><input value="Behavior Warnings"/>
        <button children="Submit" />
      </form>
    </section>
  )
}

export default PatientSetup
