import React from 'react'

const Reading = ({ handleClick, info: { temp, heartRate, respirations, etco2, spo2, systolicBP, diastolicBP, meanBP, oxygen, gasFlow } }) => {
  return (
    <li onClick={handleClick} >
      O2 flow: {oxygen} L,
      Gas Flow:  {gasFlow} %,
      Temp: {temp} °F,
      HeartRate: {heartRate} bpm,
      Respirations: {respirations} bpm,
      ETCO2: {etco2} mmHg,
      SPO2: {spo2} %,
      Blood Pressure:{systolicBP} / {diastolicBP} Mean: {meanBP}
    </li>
  )
}

export default Reading
