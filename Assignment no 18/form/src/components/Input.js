import React from 'react'
import { useState } from 'react'
import '../components/Input.Module.css'  

function Input(props) {
  const [isFocused, setFocused] = useState(false)
  const handleFocused = () => {
    setFocused(true)
  }
  const {label, onChange, errormessage, ...inputProps} = props
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocused} focused={isFocused.toString()} onFocus={() => inputProps.name === 'email' && setFocused(true)} />
      <span>{errormessage}</span>
    </div>
  )
}

export default Input