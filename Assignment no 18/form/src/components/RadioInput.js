import React from 'react'

function RadioInput(props) {
  // const [handleGender] = props
  // console.log(props.id)
  const {label1, label, onChange, ...inputProps} = props;
  // console.log(props.value)
  // console.log(props.value)
  return (
    <>
      <label>{label1}</label>
      <input {...inputProps} onChange={onChange} />
      <label htmlFor={props.id}>{label}</label>
    </>
  )
}

export default RadioInput