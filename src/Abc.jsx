import React,{useReducer} from 'react'
import styles from "./Abc.module.css"

const Abc = () => {
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
        <button className={styles.btn1}  onClick={() =>dispatch('increment')}>Increment</button><br/> <br/>
        <button   className={styles.btn2} onClick={() => dispatch('decrement')}>Decrement</button><br/> <br/>
        <button   className={styles.btn3} onClick={() => dispatch('reset')}>Reset</button><br/> <br/>
        <p>counter value is{state}</p>
    </div>
  )
}

export default Abc


// style = {{}}