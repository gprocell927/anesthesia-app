import React from 'react'

const PatientSetup = () => {
  return (
    <section>
      <form>
        <span>Name: </span><input/>
        <span>DOB: </span><input/>
        <span>Species: </span><input/>
        <span>Sex: </span><input/>
        <span>PA Warnings: </span><input/>
        <span>Behavior Warnings: </span><input/>
        <button children="Submit" />
      </form>
    </section>
  )
}

export default PatientSetup
