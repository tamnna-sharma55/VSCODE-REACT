import React from 'react'
import {Link,useParams} from "react-router-dom"

const Dynamicrouting = () => {
    // const params = useParams()
    // console.log(params.id)
    const {id}= useParams()
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/relative">Relative</Link>
        <Link to="/location">Location</Link>
        <h1>{id}</h1>
    </div>
  )
}

export default Dynamicrouting