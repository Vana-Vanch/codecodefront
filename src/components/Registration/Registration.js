import React, {useState} from 'react';
import './../Registration/style.css';
const Registration = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [rollno,setRollno] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [course,setCourse] = useState('');
    const [picture,setPicture] = useState([]);
  return <>
    <section className='regis-body'>
  <div className='registration-container'>
        <div className="registration-title">
            Registration
        </div>
        <form action="#" >
            <div className="user-details">
                <div className="input-box">
                    <span className="details">
                        Name
                    </span>
                    <input type="text" 
                    value={name}
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
                    value={email}
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
                        value={rollno}
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
                    value={password}
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
                    value={passwordConfirmation}
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
                 
                        setPicture([...picture,e.target.files[0]]);
                    }}
                    />
                </div>
            <div className="course-detail">
                <input type="radio"
                value={course}
           
                name="course" id="dot-1"/>
                <input type="radio"
                 value={course}
               
               
                 name="course" 
                 id="dot-2"/>
                <span className="course-title">Course</span>
                <select name="select" id="" className='selection' onChange={e => {
                    setCourse(e.target.value)
                }}>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                </select>
                {/* <div className="category">
                    <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="course">BCA</span>
                    </label>
                    <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="course">MCA</span>
                    </label>
                </div> */}
            </div>
            <div className='regis-btb'>
                <button type='button' onClick={()=>{
                    console.log(name);
                    console.log(email);
                    console.log(password);
                    console.log(picture);
                    console.log(course);
                }}>Register</button>
            </div>
        </form>
  </div>;
  </section>
  </>
};

export default Registration;
