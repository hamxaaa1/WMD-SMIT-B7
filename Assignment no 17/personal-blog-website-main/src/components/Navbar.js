import React from 'react';
import lightLogo from '../assets/images/logo-light.svg';
import darkLogo from '../assets/images/logo-dark.svg';

function Navbar() {
  return (
    <>
        <header>

<div className="container">

  <nav className="navbar">

    <a href="#">
      <img src={lightLogo} alt="SimpleBlog logo" width="150" className="logo-light" />
      <img src={darkLogo} alt="SimpleBlog logo" width="150" className="logo-dark" />
    </a>

    <div class="btn-group">

      <button class="theme-btn theme-btn-mobile light">
        <ion-icon name="moon" class="moon"></ion-icon>
        <ion-icon name="sunny" class="sun"></ion-icon>
      </button>

      <button class="nav-menu-btn">
        <ion-icon name="menu-outline"></ion-icon>
      </button>

    </div>

        <div class="flex-wrapper">

          <ul class="desktop-nav">

            <li>
              <a href="#" class="nav-link">Home</a>
            </li>

            <li>
              <a href="#" class="nav-link">About Me</a>
            </li>

            <li>
              <a href="#" class="nav-link">Contact</a>
            </li>

          </ul>

          <button class="theme-btn theme-btn-desktop light">
            <ion-icon name="moon" class="moon"></ion-icon>
            <ion-icon name="sunny" class="sun"></ion-icon>
          </button>

        </div>

    <div className="mobile-nav">

      <button className="nav-close-btn">
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="wrapper">

        <p className="h3 nav-title">Main Menu</p>

        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">About Me</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>

      </div>

      <div>

        <p className="h3 nav-title">Topics</p>

        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">Database</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">Accessibility</a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">Web Performance</a>
          </li>
        </ul>

      </div>

    </div>

  </nav>

</div>

</header>
    </>
  );
}

export default Navbar;
