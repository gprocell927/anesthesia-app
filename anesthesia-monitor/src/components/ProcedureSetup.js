import React from 'react'

const ProcedureSetup = () => {
  return (
    <section>
      <form>
        <span>Surgeon: </span><input/>
        <span>Assistant: </span><input/>
        <span>Anesthetist: </span><input/>
        <span>Pre-anesthetic Diagnosis: </span><input/>
        <span>Proposed Procedure: </span><input/>
        <button children="Submit" />
      </form>
    </section>
  )
}

export default ProcedureSetup
