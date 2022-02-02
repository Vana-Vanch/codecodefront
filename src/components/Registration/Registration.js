import React from 'react';
import './../Registration/style.css';
const Registration = () => {
  return <>
    <section className='regis-body'>
  <div className='registration-container'>
        <div className="registration-title">
            Registration
        </div>
        <form action="#">
            <div className="user-details">
                <div className="input-box">
                    <span className="details">
                        Name
                    </span>
                    <input type="text" placeholder='Name'required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Email
                    </span>
                    <input type="text" placeholder='Email'required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Rollno
                    </span>
                    <input type="text" placeholder='Roll number'required/>
                </div>
             
                <div className="input-box">
                    <span className="details">
                        Password
                    </span>
                    <input type="password" placeholder='Password'required/>
                </div>
                <div className="input-box">
                    <span className="details">
                        Confirm Password
                    </span>
                    <input type="passord" placeholder='Confirm Password'required/>
                </div>
              
            </div>
            <div className="upload-box">
                    <span className="details">
                        Upload Profile Picture
                    </span>
                    <input type="file" placeholder='Confirm Password'required/>
                </div>
            <div className="course-detail">
                <input type="radio" name="course" id="dot-1"/>
                <input type="radio" name="course" id="dot-2"/>
                <span className="course-title">Course</span>
                <div className="category">
                    <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="course">BCA</span>
                    </label>
                    <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="course">MCA</span>
                    </label>
                </div>
            </div>
            <div className='regis-btb'>
                <button type='button'>Register</button>
            </div>
        </form>
  </div>;
  </section>
  </>
};

export default Registration;
