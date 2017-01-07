import React from 'react'

const PAVitals = () => {
  return (
    <section>
      <form>
        <span>Body Weight: </span><input/>
        <span>Temp: </span><input/>
        <span>Pulse: </span><input/>
        <span>MM: </span><input/>
        <span>CRT: </span><input/>
        <span>Species: </span><input/>
        <span>Sex: </span><input/>
        <span>Physical Status: </span><input/>
        <span>Drugs within the last 24 hours: </span><input/>

        <button children="Submit" />
      </form>
    </section>
  )
}

export default PAVitals
