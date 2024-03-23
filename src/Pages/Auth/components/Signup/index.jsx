import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import './style.css'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
        <div className="signup_container">
          <div className="input_box">
            <label htmlFor="email" className='input_label'>Business Email<span>*</span></label>
          <div  className="input_group">
              <span className='icon'><MdOutlineEmail  color='lightgray'/></span>
              <input id='email' type="email" required />    
            </div>
          </div>

          <div className="input_box">
            <label htmlFor="password" className='input_label'>Password<span>*</span></label>
            <div className="input_group password">
              <span className='icon'><MdLockOutline color='lightgray' /></span>
              <input id='password' type={showPassword ? 'text' : 'password'} required />  
              <span className='eye_icon' onClick={()=>setShowPassword(!showPassword)}>{
                  showPassword ?  <FiEyeOff  color='lightgray' /> : <FiEye  color='lightgray'/>
                }</span>  
            </div>
          </div>
      </div>
  )
}

export default Signup;
