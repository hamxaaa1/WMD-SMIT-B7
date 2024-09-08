import React from 'react'
import profileImage from '../assets/images/hero.png'
import Button from './Button'
function Hero() {
  return (
    <div className="hero">

      <div className="container">

        <div className="left">

          <h1 className="h1">
            Hi, I'm <b>Julia&nbsp;Walker</b>.
            <br />Web Developer
          </h1>

          <p className="h3">
            Specialized in <abbr title="Accessibility">a11y </abbr> 
             and Core Web Vitals
          </p>

          <div className="btn-group">
            
              <Button text = "Contact Me" variant = 'primary' />
              <Button text = "About Me" variant = 'secondary' />
          </div>

        </div>

        <div className="right">

          <div className="pattern-bg"></div>
          <div className="img-box">
            <img src={profileImage} alt="Julia Walker" className="hero-img" />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero