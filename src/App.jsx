import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [error, setError] = useState({})

  const validition = () => {
    const newError = {}
    if (!formData.name) newError.name = 'Enter Your Name'
    setError(newError);

  }

  const handleSubmit = (e) => {
    if (validition()) {
      e.preventDefault();
      console.log(formData);
      
    }

  }




  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div className="mb-3">
            <label htmlFor="">Name :</label>
            <input type="text" name='name' onChange={handleChange} />
            {error.name && <strong style={{color: 'red'}}>{error.name}</strong>}
          </div>
          <div className="mb-3">
            <label htmlFor="">Email :</label>
            <input type="email" name='email' onChange={handleChange} required />

          </div>
          <div className="mb-3">
            <label htmlFor="">Password :</label>
            <input type="password" name='password' onChange={handleChange} required />

          </div>
          <button type='submit' >Register</button>
        </form>
      </div>
    </>
  )
}

export default App