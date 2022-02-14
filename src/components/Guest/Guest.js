import React,{useContext, useEffect} from 'react';
import '.././Guest/style.css';
import theimage from '.././Guest/about.jpg';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const Guest = () => {
  let navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);
  const getUser = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.get('api/user').then(res => {
        console.log(res.data);
        const username = JSON.stringify(res.data.user.name);
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



  return <div className='guest-container'>
      <div className='inner-box'>
     <p> Education through online mode has become a big deal these days, as technology advances every day, the need for a good education platform is required day by day. E-learning coding project is a school/college/institute coding assignment system that includes some of the most popular programming languages. This project aims to improve the experience of online  education.</p>
      </div>
      <div className='more-info'>
        <h3>Objective</h3>
        <div className='image-con'>
            <div className='objective-con'>
            <p>This project aims at developing an online coding platform for school/institution where a teacher can create coding assignments. The students will be able to code in the website or copy/paste their code from their local machine on the editor on the website and execute their code on the web browser and submit the code. The teacher will be able to check their program and give ratings as per desire. Some parts of this project have been successfully tested and a working prototype have been developed.</p>
    
            </div>
            <div className='about-img-con'>
                <img src={theimage} alt="" style={{height:'400px'}}/>
            </div>
        </div>
      </div>
      <div>
          <h3>Contact us</h3>
      </div>
  </div>;
};

export default Guest;
