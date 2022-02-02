import React from 'react';
import './../Login/style.css';
const Login = () => {
    return <>
    <section className='regis-body'>
  <div className='registration-container'>
        <div className="registration-title">
            Login
        </div>
        <form action="#">
            <div className="user-details">
               
                <div className="input-box">
                    <span className="details">
                        Email
                    </span>
                    <input type="text" placeholder='Email'required/>
                </div>
              
             
                <div className="input-box">
                    <span className="details">
                        Password
                    </span>
                    <input type="password" placeholder='Password'required/>
                </div>
              
              
            </div>
           
          
            <div className='regis-btb'>
                <button type='button'>Login</button>
            </div>
        </form>
  </div>;
  </section>
  </>
};


export default Login;
