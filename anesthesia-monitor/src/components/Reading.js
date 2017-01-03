import React from 'react'

const Reading = ({ handleClick, info }) => {
  return (
    <li onClick={handleClick} >
      {info.heartRate}
    </li>
  )
}

export default Reading
