import React, { useState } from 'react';

const Controlled = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
    alert("form is submitted");
    localStorage.setItem("form", JSON.stringify(form));
    setForm({
      name: "",
      email: "",
      password: ""
    });
  };

  const storage = JSON.parse(localStorage.getItem("form") || "{}");
  const { name, email, password } = storage;

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' placeholder="enter your name"  value={form.name} type='text' onChange={handleChange} /><br /><br />

        <label htmlFor='email'>Email: </label>
        <input id='email' name='email' placeholder='enter your email' value={form.email} type='text' onChange={handleChange} /><br /><br />

        <label htmlFor='password'>Password: </label>
        <input id='password' name='password' placeholder="enter your password" value={form.password} type='text' onChange={handleChange} /><br /><br />

        <button type='submit'>Save</button>
      </form>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{password}</h3>
    </div>
  );
};

export default Controlled;