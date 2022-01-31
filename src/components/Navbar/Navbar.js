import React from 'react';
import './../Navbar/navbar.css';
const Navbar = () => {
  return <header>
  <div class="logo">
      <h3>Coding Assignment</h3>
    </div>
  <nav class="nav-bar">
    
    <ul class="nav-ul">
      
      <li>
      <a href="#">Home</a>
      </li>
      <li>
      <a href="#">Profile</a>
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
