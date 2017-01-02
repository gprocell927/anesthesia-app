import React from 'react'

const Reading = ({ handleClick, text }) => {
  return (
    <li
      onClick={handleClick}
    >
      {text}
    </li>
  )
}

export default Reading
