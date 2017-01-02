import React from 'react'


const AddReadingForm = ({ handleSubmit, readings }) => {
  let input
  let i = readings.length

  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(input.value, i)
      }}>
        <input ref={ node => { input = node }} />
        <button>Add Reading</button>
      </form>
    </section>
  )
}

export default AddReadingForm
