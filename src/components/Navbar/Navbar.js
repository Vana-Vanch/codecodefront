import React from 'react';
import './../Navbar/navbar.css';
const Navbar = () => {
  return <header>
  <div className="logo">
      <h3>Hming ala neilo</h3>
    </div>
  <nav className="nav-bar">
    
    <ul className="nav-ul">
      
      <li>
      <a href="#">Home</a>
      </li>
      <li>
      <a href="#">Profile</a>
      </li>
      <li>
          <a href="#">Practice</a>
      </li>
      <li>
          <a href="#">Register</a>
      </li>
      <li>
          <a href="#">Sign in</a>
      </li>
      <li>
          <a href="#">Log out</a>
      </li>
      <li>
           <a href="#">About</a>
      </li>
    </ul>
     
  </nav>

  </header>;
};

export default Navbar;
