import React, { useState } from 'react'
import { app } from './Firebase1'
import { getFirestore, addDoc, collection, setDoc, doc } from 'firebase/firestore'

const Firestore = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const db = getFirestore(app)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Add to collection "language"
      await addDoc(collection(db, "language"), {
        name: form.name,
        email: form.email,
        password: form.password
      })

      // Set doc with ID "punjab" in "state" collection
      await setDoc(doc(db, "state", "punjab"), {
        name: form.name,
        email: form.email,
        password: form.password
      })

      alert("Data saved successfully!")

      // Reset form
      setForm({
        name: "",
        email: "",
        password: ""
      })

    } catch (error) {
      console.error("Error saving data: ", error)
      alert("Failed to save data!")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name='name' value={form.name} onChange={handleChange} type='text' placeholder='Enter your name' />
        <label>Email</label>
        <input name='email' value={form.email} onChange={handleChange} type='email' placeholder='Enter your email'/>
        <label>Password</label>
        <input name='password' value={form.password} onChange={handleChange} type='password' placeholder='Enter your password'/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default Firestore
