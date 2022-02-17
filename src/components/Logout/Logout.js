import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import '.././Logout/index.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const Logout = () => {
    let navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);
    const sendLogoutReq = () =>{
        axios.get('/sanctum/csrf-cookie').then(response=>{
            axios.post('/api/logout' ).then(res=>{
                console.log(res.data.message);
                if(res.data.message === 'success'){
                    setUser(null);
                    navigate("/login");
                }
            })
        })
    }
    return <>
    <section className='regis-body'>
  <div className='registration-container'>
        <div className="registration-title">
            Are you sure you want to log out?
        </div>
        <form action="#">
            <div className='regis-btb'>
                <button type='button' onClick={sendLogoutReq}>Logout</button>
            
            </div>
        </form>
  </div>;
  </section>
  </>;
};

export default Logout;
