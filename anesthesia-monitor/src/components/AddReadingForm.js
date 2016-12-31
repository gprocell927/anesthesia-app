import React from 'react'


let AddReadingForm = ({ handleSubmit }) => {
  let input

  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(input.value)
      }}>
        <input ref={ node => { input = node }} />
        <button>Add Reading</button>
      </form>
    </section>
  )
}

export default AddReadingForm
