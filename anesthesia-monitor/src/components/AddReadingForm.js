import React from 'react'

const AddReadingForm = ({ handleSubmit, readings }) => {
  let temp
  let heartRate
  let respirations
  let i = readings.length

  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()

        let info = {
          temp: temp.value,
          heartRate: heartRate.value,
          respirations: respirations.value,
        }

        handleSubmit(info, i)
      }}>
        <span>Temp: </span>
        <input ref={ (node) => { temp = node }} />

        <span>HR: </span>
        <input ref={ (node) => { heartRate = node}} />

        <span>Resp: </span>
        <input ref={ (node) => { respirations = node}} />


        <button>Add Reading</button>
      </form>
    </section>
  )
}

export default AddReadingForm
