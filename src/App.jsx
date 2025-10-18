import React, { useState } from 'react'
import './App.css'
import { use } from 'react'
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
    const PasswordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const newError = {}
    if (!formData.name) newError.name = 'Enter Your Name'
    if (!formData.email) newError.email = 'Enter Your Email'
    else if (!formData.email.includes('@') || !formData.email.includes('.com')) newError.email = 'Enter a valid Email'
    if (!formData.password) newError.password = 'Enter Your Password'
    else if (!PasswordRegex.test(formData.password)) newError.password = "Password must be at least 8 characters long, one uppercase and  lowercase letter, one number, and one special character"
    setError(newError);
    return Object.keys(newError).length === 0
  }


  const [submit, setSubmit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validition()) {
      setFormData({
        name: '',
        email: '',
        password: '',
      })
      console.log(formData);

      const notify = setInterval(() => {
        setSubmit(true);
        setTimeout(() => {
          clearInterval(notify)
          setSubmit(false);
        }, 2000);
      }, 100);


    }

  }


  const [type, setType] = useState('password')

  return (
    <>
      <div className="container relative">
        <form onSubmit={handleSubmit} >
          <h2>Registration Form</h2>
          <div className="mb-3 relative">
            <label htmlFor="name">Name :</label>
            <input type="text" id='name' value={formData.name} name='name' onChange={handleChange} className={error.name ? 'border-[3px]! border-red-500! border-solid!' : ""} />
            {error.name &&
              <div className="error-box w-40 h-10 bg-[#ff6347] absolute top-8 right-[-28%] rounded-2xl rounded-bl-[0px] ">
                <div className="flex gap-2 items-center  text-white">
                  <p className='text-[14px] text-white font-semibold text-center leading-[40px] pl-2!'>{error.name} !</p>
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
              </div>
            }
          </div>
          <div className="mb-3 relative">
            <label htmlFor="email">Email :</label>
            <input type="email" name='email' value={formData.email} id='email' onChange={handleChange} className={error.email ? 'border-[3px]! border-red-500! border-solid!' : ""} />
            {
              error.email &&
              <div className="error-box w-40 h-10 bg-[#ff6347] absolute top-8 right-[-28%] rounded-2xl rounded-bl-[0px] ">
                <div className="flex gap-1 items-center  text-white">
                  <p className='text-[14px] text-white font-semibold text-center leading-[40px] pl-2!'>{error.email} !</p>
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
              </div>
            }


          </div>
          <div className="mb-3 relative">
            <label htmlFor="password">Password :</label>
            <input type={type} name='password' value={formData.password} id='password' onChange={handleChange} className={error.password ? 'border-[3px]! border-red-500! border-solid!' : ""} />

            {error.password &&
              <div className=''>
                <div className="pt-2!  text-red-500">
                  <p className='text-[12px] font-semibold pl-2!'>{error.password} !</p>
                </div>
                <div className="absolute top-[48px] right-[37px] text-red-500">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
              </div>}
            <div className="bg-teal-500 text-white w-10 h-[44px] text-center absolute top-[37px] right-[20px] leading-[44px]  rounded-tr-[8px] rounded-br-[8px] cursor-pointer" onClick={() => type === 'password' ? setType('text') : setType('password')}>
              <i className={`fa-solid ${type === 'password' ? 'fa-eye' : "fa-eye-slash"}`}></i>
            </div>
          </div>
          <button type='submit' >Register</button>
        </form>

        <div className={`w-[95%] h-20 py-5! bg-teal-100 text-green-600 px-2! absolute left-[11px] top-[-25%] transition-all duration-300 flex items-center gap-2 justify-center ${submit ? 'top-[5%] ' : ''}  `}>
          <p className='text-2xl font-semibold capitalize '>Your registration was successful. </p>
          <i className="fa-regular fa-circle-check text-2xl"></i>
        </div>

      </div>
    </>
  )
}

export default App