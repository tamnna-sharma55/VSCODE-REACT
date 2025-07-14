import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
     const navigate = useNavigate()
    const handleClick = (route) => {
      navigate(route)
    }
  return (
    <div>
        <div>
        <button onClick={()=>handleClick("/")}>about</button>
        <button onClick={()=>handleClick("/contact")}>contact</button>
        <button onClick={()=>handleClick("/service")}>service</button>
    </div>
    </div>
  )
}

export default Nav