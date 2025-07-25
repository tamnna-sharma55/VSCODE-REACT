import React from 'react'
import Child2 from './Child2'

const Child = () => {
  const name = "ram"

  return (
    <div>
      <h1>Name</h1>
      <Child2 message = {name}/>
    </div>
  )
}

export default Child