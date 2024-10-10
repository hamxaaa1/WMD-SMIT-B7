import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './navbar.css'
import SearchResults from "../searchResults/SearchResults";
import { date } from "yup";

function Navbar() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const fetchData = (value) => {
    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(data => {
      const result = data.filter((product) => {
        return (
        value &&
        product &&
        product.title &&
        product.title.toLowerCase().includes(value)
        ) 
      })
      setResults(result)
    })
  }
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to='/' style={{fontWeight: 'bold'}} className="navbar-brand" href="#">
            <h4>Hamza's Store</h4>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link active" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link active">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <NavLink to='/login' className="nav-link active" aria-current="page" href="#">
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {input && results.length > 0 && (
        <SearchResults results={results} />
      )}
    </>
  );
}

export default Navbar;
