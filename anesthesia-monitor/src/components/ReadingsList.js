import React from 'react'
import Reading from './Reading'

const ReadingsList = ({ readings, onReadingClick }) => {
  if (readings.length === 0){
    return <h3> There are no saved readings for this procedure.</h3>
  }

  return(
    <ul>
      { readings.map(reading => {
        return (
          <Reading
            key={reading.id}
            info={reading.info}
            handleClick={() => onReadingClick(reading.id)}
          />
        )
      }) }
    </ul>
  )
}

export default ReadingsList
