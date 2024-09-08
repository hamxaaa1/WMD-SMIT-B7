import React from 'react'

function Button({text = 'Contact Me', variant = 'primary'}) {
  const className = `btn btn-${variant}`;
  return (
    <>
    <button href="#" className={className} >{text}</button>
    </>
  )
}

export default Button