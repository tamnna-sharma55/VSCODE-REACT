import React, { useRef, useState } from 'react'

const Refexample = () => {
  const myRef = useRef(0)
  const [display, setDisplay] = useState(myRef.current)

  const handleClick = () => {
    myRef.current += 1
    setDisplay(myRef.current) 
  }

  return (
    <div>
      <p>Value: {display}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Refexample
