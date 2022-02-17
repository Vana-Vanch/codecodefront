import axios from 'axios';
import React, {useState} from 'react';
import './../Registration/style.css';
import {useNavigate} from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const Registration = () => {
    let navigate = useNavigate();
    const [uname,setName] = useState('');
    const [uemail,setEmail] = useState('');
    const [urollno,setRollno] = useState('');
    const [upassword,setPassword] = useState('');
    const [upasswordConfirmation, setPasswordConfirmation] = useState('');
    const [ucourse,setCourse] = useState('BCA');
    const [ppic,setPicture] = useState(null );
    const registerHandler = () =>{

        const name = uname;
        const email = uemail;
        const rollno = urollno;
        const password =upassword;
        const password_confirmation = upasswordConfirmation;

        let fd = new FormData();
        fd.append("name", name);
        fd.append("email", email);
        fd.append("rollno", rollno);
        fd.append("password", password);
        fd.append("password_confirmation", password_confirmation);
        fd.append("ppic", ppic);



        axios.get('/sanctum/csrf-cookie').then(response=>{
            axios.post('/api/register',fd ).then(res=>{
                console.log(res.data.message);
                if(res.data.message === 'success'){
                    navigate("/login");
                }
            })
        })
}

    return <>
    <section className='regis-body'>
  <div className='registration-container'>
        <div className="registration-title">
            Registration
        </div>
        <form action="#" encType='multipart/form-data'>
            <div className="user-details">
                <div className="input-box">
                    <span className="details">
                        Name
                    </span>
                    <input type="text" 
                    value={uname}
                    onChange={(e)=>{
                        setName(e.target.value);
                       
                    }}
                    placeholder='Name'
                    required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Email
                    </span>
                    <input type="text" 
                    value={uemail}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    placeholder='Email'
                    required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Rollno
                    </span>
                    <input type="text"
                        value={urollno}
                        onChange={(e)=>{
                            setRollno(e.target.value);
                        }}
                    placeholder='Roll number'required/>
                </div>
             
                <div className="input-box">
                    <span className="details">
                        Password
                    </span>
                    <input type="password" 
                    value={upassword}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder='Password'required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Confirm Password
                    </span>
                    <input type="passord" 
                    value={upasswordConfirmation}
                    onChange={e => {
                        setPasswordConfirmation(e.target.value);
                    }}
                    
                    placeholder='Confirm Password'required/>
                </div>
              
            </div>
            <div className="upload-box">
                    <span className="details">
                        Upload Profile Pictures
                    </span>
                    <input type="file" 

                    onChange={e => {

                      console.log(e.target.files[0]);
                      setPicture(e.target.files[0]);
                      
                    }}
                    />
                </div>
            <div className="course-detail">
                <input type="radio"
                value={ucourse}
           
                name="course" id="dot-1"/>
                <input type="radio"
                 value={ucourse}
               
               
                 name="course" 
                 id="dot-2"/>
                <span className="course-title">Course</span>
                <select name="select" id="" className='selection' onChange={e => {
                    setCourse(e.target.value)
                }}>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                </select>
            </div>
            <div className='regis-btb'>
                <button type='button' onClick={registerHandler}>Register</button>
            </div>
        </form>
  </div>;
  </section>
  </>
};

export default Registration;
