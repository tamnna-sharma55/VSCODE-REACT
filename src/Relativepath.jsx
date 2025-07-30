import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Relativepath = () => {
  return (
    <div>
        <Link to="pent">pent</Link>
        <Link to="shirt">shirt</Link>
        <Link to="t-shirt">t-shirt</Link>
        <Outlet></Outlet>



    </div>
  )
}

export default Relativepath