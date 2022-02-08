import React, { useContext } from 'react';
import './../Navbar/navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
const Navbar = () => {
  const {user} = useContext(UserContext);
  return <header>
  <div className="logo">
      <h3>Hming ala neilo</h3>
    </div>
  <nav className="nav-bar">
    
    <ul className="nav-ul">

    
    
      {user ?
   <>
   <li>
    <Link to="/">Home</Link>
    </li>

     <li>
     <Link to="/profile">Profile</Link>
     </li>
 <li>
 <Link to="/logout">Log out</Link>
 </li>
 </>
   :   

         <>
         <li>
         <Link to="/register">Register</Link>
         </li>
         <li>
         <Link to="/login">Sign in</Link>
         </li>  
         </>
   }
  <li>
      <Link to="/practice">Practice</Link>
      </li>
    
      <li>
      <Link to="/about">About</Link>
      </li>
    </ul>
     
  </nav>

  </header>;
};

export default Navbar;
