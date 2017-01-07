import React from 'react'

const DrugsForm = () => {
  return (
    <section>
      <form>
        <span>PA Drugs: </span><input value=""/>
        <span>Induction Drugs: </span><input value=""/>
        <span>ET Tube Size: </span><input value=""/>
        <span>Induction notes: </span><textarea value=""/>

        <button children="Submit" />
      </form>
    </section>
  )
}

export default DrugsForm
