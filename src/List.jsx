import React from 'react'
let a =["apple","banana","orange","grapes","mango","litchi","guava"]

const List = () => {
    const handleDelete = (key)=>{
        alert(`whose element on ${key} is deleted`)
        
    }
  return (
    <div>
        {a.map((element,index)=>(
            <>
            <h1 key={index}>{index}:{element}</h1>
            <button onClick={()=>{handleDelete(index)}}>delete</button>
            </>
        ))}
        
    </div>
  )
}

export default List