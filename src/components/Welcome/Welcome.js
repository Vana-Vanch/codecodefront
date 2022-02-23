import React,{useContext, useEffect} from 'react'
import axios from 'axios';
import '../Welcome/style.css';
import {useNavigate} from "react-router-dom";

import { UserContext } from '../../UserContext';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const Welcome = () => {
    let navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);

    const getUser = () => {
        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.get('api/user').then(res => {
            console.log(res.data.status);
            const username = res.data.user.name;
            setUser(username);
          })
        })
      }
    
      useEffect(()=>{
        getUser();
        if(checkUser()){
          navigate('/')
         
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
    

  return (
    <section className='welcome-back'>
        <div className='the-box'>
            <h1>Welcome To CodingAssignment</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ipsam, dolores, harum cupiditate quae eius porro commodi quos nobis ad libero dignissimos voluptatum omnis molestias corrupti perspiciatis. Placeat, laboriosam deserunt?</p>
            <button className='box-btn'>Register</button>
            <button className='box-lokin'>Login</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem nobis suscipit quaerat quasi, minima repellat exercitationem vel eius corporis, hic libero nulla maxime illo odio at culpa blanditiis doloribus!</p>
            <button className='box-btn'>EdiThor</button>
        </div>
    </section>
  )
}

export default Welcome