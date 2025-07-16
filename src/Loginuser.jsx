import React,{useState}from 'react'
import {app} from './Firebase1'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"

const auth =getAuth(app)

const Loginuser = () => {


      const [email,setEmail]= useState("")
      const [password,setPassword]=useState("")
  
      const handleSubmit = (e) =>{
          e.preventDefault()
          signInWithEmailAndPassword(auth,email,password)
          .then(()=>{
              console.log("user is registered successfully")
              alert("user is registered")
  
          })
          .catch((err)=>{
              console.log("user is not registered due to error",err)
              alert("user is not registered")
          })
      }
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <label htmlfor='email'>email</label>
            <input id='email' value={email} type='email' placeholder='enter your email' onChange={(e)=> setEmail(e.target.value)}/><br/>
            <label>password</label>
            <input id='password' value={password}type='password' placeholder='enter your password'onChange={(e)=> setPassword(e.target.value)}/><br/>
            <button type='submit'>register user</button>
        </form>
    </div>
  )
}

export default Loginuser