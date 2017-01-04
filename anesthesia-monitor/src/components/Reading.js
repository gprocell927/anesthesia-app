import React from 'react'

const Reading = ({ handleClick, info: { temp, heartRate, respirations } }) => {
  return (
    <li onClick={handleClick} >
      Temp: {temp},
      HeartRate: {heartRate},
      Respirations: {respirations}
    </li>
  )
}

export default Reading
