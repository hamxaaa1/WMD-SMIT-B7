import React from 'react'
import searchIcon from '../../assets/search.svg'
import NavbarStyle from './Navbar.module.css'
function Navbar() {
  return (
    <div id='nav'>
      <nav id={NavbarStyle.topnav} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a id={NavbarStyle.navTitle} className="navbar-brand" href="#nav">Hamza.</a>
        <button id={NavbarStyle.navTogglerbtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a id={NavbarStyle.navLinks} className="nav-link active" aria-current="page" href="#nav">Home</a>
            </li>
            <li className="nav-item">
              <a id={NavbarStyle.navLinks} className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a id={NavbarStyle.navLinks} className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a id={NavbarStyle.navLinks} className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <form id={NavbarStyle.navForm} className="d-flex" role="search">
            <input id={NavbarStyle.navSearchInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: '#F1A63B'}}/>
            <button className="btn btn-outline-success" type="submit" style={{color: '#FEF6C6'}}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar