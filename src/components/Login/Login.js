import React, { useContext,useState } from 'react';
import axios from 'axios';
import './../Login/style.css';
import {useNavigate} from "react-router-dom";

import { UserContext } from '../../UserContext';


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const Login = () => {
    
    let navigate = useNavigate();
    const [umail,setmail] = useState('');
    const [upassword,setPassword] = useState('');
    const {user,setUser} = useContext(UserContext);
    console.log('user =>'+user);
    const sendLoginReq = () =>{
        const email = umail;
        const password = upassword;
        const datas = {
            email,
            password
        }
        axios.get('/sanctum/csrf-cookie').then(response=>{
            axios.post('/api/login',datas ).then(res=>{
                console.log(res.data.message);
                if(res.data.message === 'success'){
                    console.log(res.data.user.name);
                    const username = JSON.stringify(res.data.user.name);
                    setUser(username);
                    
                    navigate('/');
                }
            })
        })
    }

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
                    <input type="text" 
                    placeholder='Email'
                    value={umail}
                    onChange={e => {
                        setmail(e.target.value)
                    }}
                    required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Password
                    </span>
                    <input type="password"
                    value={upassword}
                    onChange={e =>{
                        setPassword(e.target.value);
                    }}
                    placeholder='Password'required/>
                </div>
            </div>
            <div className='regis-btb'>
                <button type='button' onClick={sendLoginReq}>Login</button>
            
            </div>
        </form>
  </div>;
  </section>
  </>
};


export default Login;
              
             