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
    e.preventDefault();
    if (validition()) {
      console.log(formData);
    }

  }




  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} >
          <h2>Registration Form</h2>
          <div className="mb-3 relative">
            <label htmlFor="name">Name :</label>
            <input type="text" id='name' name='name' onChange={handleChange} />
            {error.name &&
             <div className="error-box w-80 h-10 bg-[#ff6347] absolute top-8 right-[-55%] rounded-2xl rounded-bl-[0px]">
              <p className='text-2xl text-white font-semibold text-center leading-[40 px]'>{error.name} !</p>
            </div>

            }
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email :</label>
            <input type="email" name='email'id='email' onChange={handleChange} />

          </div>
          <div className="mb-3">
            <label htmlFor="password">Password :</label>
            <input type="password" name='password' id='password' onChange={handleChange} />

          </div>
          <button type='submit' >Register</button>
        </form>
      </div>
    </>
  )
}

export default App