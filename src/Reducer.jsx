import React,{useReducer} from 'react'
import red from "./Reducer.module.css"

const Reducer = () => {
    let initialState = 0

    const reducer = (state,action)=>{
        switch(action){
            case 'increment':
                return state+1
                

            case 'decrement':
                return state-1
                
            case 'reset':
                return 0
                
            case 'default':
                return 0    
            }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <button   className={red.btn1} onClick={() =>dispatch('increment')}>Increment</button><br/> <br/>
        <button   className={red.btn2}  onClick={() => dispatch('decrement')}>Decrement</button><br/> <br/>
        <button   className={red.btn3}  onClick={() => dispatch('reset')}>Reset</button><br/> <br/>
        <p>counter value is{state}</p>
    </div>
  )
}

export default Reducer


// style = {{}}