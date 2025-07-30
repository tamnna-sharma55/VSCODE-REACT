import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Queryparameter = () => {
    const[serachParams,setSearchParams]= useSearchParams()
    const query =serachParams.get('name')
    const handleChange = (e) =>{
        const query = e.target.value
        setSearchParams({query})
    }

    const handleClear=() => {
        setSearchParams({});
    }       
  return (
    <div>
        <h2>Search Page</h2>
        <input type="text" placeholder="search params" value={query} onChange={handleChange}></input>
        <button onClick={handleClear}>Clear</button>
        <p>{query ? `Searching for ${query}`: 'Please enter a search term above'}</p>
    </div>
  )
}

export default Queryparameter