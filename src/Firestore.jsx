import React,{useState} from 'react'
import { app } from './Firebase'
import {getFirestore,query,deleteDoc,collection,setDoc,doc,getDoc, where,getDocs,updateDoc} from "firebase/firestore"




const db = getFirestore(app)

const FireStore = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target 
        setForm((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        // await addDoc(collection(db,"users"),{
        //     name:form.name,
        //     email:form.email,
        //     password:form.password
        // })
        await setDoc(doc(db,"food","sugar"), {
            name: form.name,
            email: form.email,
            password: form.password
        })
        alert("Document saved successfully")
    } catch (error) {
        console.error("Error writing document: ", error)
    }
}

const handleData = () =>{
   getDoc(doc(db,"food","sugar"))
   .then((data)=>{
    console.log("data is fetched successfully",data.id)
    alert("data is fetched successfully")
    if(data.exists()){
        alert("data is exist")
    }
   })
   .catch((err)=>{
    console.log("data is not fetched due to some error",err)
   })
}

const handleFilteredData = () =>{
    const coll = collection(db,"food")
    const q = query(coll,where("name","==","ram"))
    const snapshot = getDocs(q)
    snapshot.then((data)=>{
        console.log("all data is fecthed",data)
        alert("all data is fetched")
    })
    .catch((err)=>{
        console.log("all data is not fetched",err)
    })
}

const handleUpdate = () =>{
   updateDoc(doc(db,"food","sugar"),{
    name:"shyam",
    email:"shyam@gmail.com",
    password:"sdjbgsdfgg"
   })
   .then(()=>{
    alert("data is update successfully")
   })
   .catch((err)=>{
    console.log(err)
   })
}

const handleDelete = () =>{
     deleteDoc(doc(db,"food","sugar"))
     .then(()=>{
        alert("data is deleted successfully")
     })
     .catch((err)=>{
        console.log(err)
     })
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input name='name' value={form.name} onChange={handleChange}  type='text' placeholder='enter your name'/>
            <label>email</label>
            <input name='email' value={form.email} onChange={handleChange} type='email' placeholder='enter your email'/>
            <label>password</label>
            <input name='password' value={form.password} onChange={handleChange} type='password' placeholder='enter your password' />
            <button type='submit'>save </button>
            <button type='button' onClick={handleData}>get data</button>
            <button type='button' onClick={handleFilteredData}>get filtered data</button>
            <button type='button' onClick={handleUpdate} >update data</button>
            <button type='button' onClick={handleDelete} >delete data</button>
        </form>
    </div>
  )
}

export default FireStore