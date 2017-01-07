import React from 'react'

const PostOp = () => {
  return (
    <section>
      <form>
        <span>Temp: </span><input/>
        <span>Total Fluids: </span><input/>
        <span>Notes: </span><textarea/>

        <button children="Submit" />
      </form>
    </section>
  )
}

export default PostOp
