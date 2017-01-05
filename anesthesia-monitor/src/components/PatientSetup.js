import React from 'react'

const PatientSetup = () => {
  return (
    <section>
      <form>
        <input>Name: </input>
        <input>DOB: </input>
        <input>Species: </input>
        <input>Sex: </input>
        <input>PA Warnings: </input>
        <input>Behavior Warnings: </input>
        <button children="Submit" />
      </form>
    </section>
  )
}

export default PatientSetup
