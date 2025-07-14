import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
<button onClick={() => setCount(count+1)}>increase</button><br/> <br/>
<button onClick={() => setCount(count-1)}>decrease</button><br/> <br/>
<button onClick={() => setCount(0)}>reset</button><br/> <br/>
{count}
    </div>
  )
}

export default Counter