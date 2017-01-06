import React from 'react'

const DrugsForm = () => {
  return (
    <section>
      <form>
        <span>PA Drugs: </span><input/>
        <span>Induction Drugs: </span><input/>
        <span>ET Tube Size: </span><input/>
        <span>Induction notes: </span><textarea/>

        <button children="Submit" />
      </form>
    </section>
  )
}
