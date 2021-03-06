import React, { useContext,useState,useEffect } from 'react';
import './../Navbar/navbar.css';
import { Link } from 'react-router-dom';
import { UserContext,AdminContext } from '../../UserContext';
import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const Navbar = () => {

  const {user,setUser} = useContext(UserContext);
  const {admin,setAdmin} = useContext(AdminContext);
   
  const getUser = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.get('api/user').then(res => {
        console.log(res.data.status);
        const username = res.data.user.name;
        console.log(username);
        
        setUser(username);
        if(res.data.user.isAdmin === 1){
          console.log('Admin is ture');
          setAdmin(true);
        }
      })
    })
  }

  useEffect(()=>{
    getUser();
    if(checkUser()){
      console.log('Bello');
     
    }else{
      console.log('un-authenticated');
    }
  },[])


  const checkUser = () =>{
    if(user){
      return true;
    }else{
      return false;
    }
  }
      
   
 
  
  
  return <header>
  <div className="logo">
      <h3>CodeAssignment</h3>
    </div>
  <nav className="nav-bar">
    
    <ul className="nav-ul">

    
    
      {user ?
   <>
   <li>
    <Link to="/">Home</Link>
    </li>

     <li>
     <Link to={`/profile/${user}`}>Profile</Link>
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
    {admin ? 
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
      :
      console.log('Not Admin')
      
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
