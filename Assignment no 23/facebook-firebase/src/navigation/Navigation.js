import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import PublicNavigation from './PublicNavigation'
import PrivateNavigation from './PrivateNavigation'

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateNavigation><Home /></PrivateNavigation>}></Route>
      </Routes>
      <Routes>
        <Route path='/SignUp' element={<PublicNavigation><SignUp /></PublicNavigation>}></Route>
      </Routes>
      <Routes>
        <Route path='/Login' element={<PublicNavigation><Login /></PublicNavigation>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation