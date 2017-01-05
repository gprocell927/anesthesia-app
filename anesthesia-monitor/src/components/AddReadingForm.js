import React from 'react'

const AddReadingForm = ({ handleSubmit, readings }) => {
  let temp
  let heartRate
  let respirations
  let etco2
  let spo2
  let diastolicBP
  let systolicBP
  let meanBP
  let oxygen
  let gasFlow
  let timestamp
  let i = readings.length

  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()

        let info = {
          timestamp: new Date().getHours() + ":" + new Date().getMinutes(),
          temp: temp.value,
          heartRate: heartRate.value,
          respirations: respirations.value,
          etco2: etco2.value,
          spo2: spo2.value,
          diastolicBP: diastolicBP.value,
          systolicBP: systolicBP.value,
          meanBP: meanBP.value,
          oxygen: oxygen.value,
          gasFlow: gasFlow.value
        }

        handleSubmit(info, i)
      }}>
        <span>Oxygen Flow: </span>
        <input ref={ (node) => { oxygen = node }} /> <span>L</span>

        <span>Vaporizer Setting: </span>
        <input ref={ (node) => { gasFlow = node }} /> <span>%</span>

        <span>Body Temp: </span>
        <input ref={ (node) => { temp = node }} /> <span>°F</span>

        <span>Heart Rate: </span>
        <input ref={ (node) => { heartRate = node}} /><span>bpm</span>

        <span>Respirations: </span>
        <input ref={ (node) => { respirations = node}} /><span>bpm</span>

        <span>ETCO2: </span>
        <input ref={ (node) => { etco2 = node}} /><span>mmHg</span>

        <span>SPO2: </span>
        <input ref={ (node) => { spo2 = node}} /><span>%</span>

        <span>Blood Pressure: </span>
        <span>Systolic: </span>
        <input ref={ (node) => { systolicBP = node}} /><span>/</span>
        <span>Diastolic: </span>
        <input ref={ (node) => { diastolicBP = node}} />
        <span>Mean: </span>
        <input ref={ (node) => { meanBP = node}} />



        <button>Add Reading</button>
      </form>
    </section>
  )
}

export default AddReadingForm
