import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
function Navigation() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/about' element = {<Contact/>} />
      <Route path='/contact' element = {<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Navigation