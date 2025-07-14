import React,{useState} from 'react'
import {app} from "./Firebase1"
import {getDatabase,ref,set} from "firebase/database"

const Home1 = () => {
  const [form,setForm] = useState({
    id:"",
    name:"",
    email:"",
    password:""
  })
    const db = getDatabase(app)
    


  const handleChange = (e) => {
    const {name,value} = e.target
    setForm((prev)=>({
      ...prev,[name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    set(ref(db,"student/" +form.id),{
      name:form.name,
      email:form.email,
      password:form.password
    })
    .then(()=>{
      console.log("form is submitted successfully!")
    }
    )
    .catch((err)=>{
      console.log("form is noy submitted due to errror",err)
    })
    console.log("form is submitted")
  }
  return (
    <div>
        {/* <button onClick={()=>saveData(1,"ram",44446)}>Save Data</button> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">id</label>
          <input id='id' name='id' value={form.id} type='number' placeholder='enter your id' onChange={handleChange} /><br></br>
           <label  htmlFor="id">name</label>
           <input id='name' name='name' value={form.name} type='text' placeholder='enter your name' onChange={handleChange} /><br></br>
           <label  htmlFor='id' >email</label>
           <input id='email' name='email' value={form.email} type='email' placeholder='enter your email' onChange={handleChange} /><br></br>
           <label  htmlFor="id">password</label>
           <input id='password' name='password' value={form.password} type='password' placeholder='enter your password' onChange={handleChange} /><br></br>
          <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Home1