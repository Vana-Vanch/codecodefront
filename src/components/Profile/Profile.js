import React from 'react';
import './../Profile/style.css';
import noimage from './../Profile/noimage.jpg';
const Profile = () => {
  return (
  <section className='zeBody'>
        <div className='prof-container'>
            <div className="profile-image">
                 <img src={noimage} alt="" style={{height: '300px'}}/>
            <div className='info'>
                    <div className='prof-content'>
                         <h4>Name:</h4>
                         <h4>Rollno:</h4>
                         <h4>Email:</h4>
                         <h4>Course:</h4>
                    </div>
                    <div className='prof-content'>
                         <h4>Eminem</h4>
                         <h4>NLT129</h4>
                         <h4>test@test.com</h4>
                         <h4>MCA</h4>
                    </div>
            </div>
                
                </div>
                <div className='recent-container'>
                   <h3>History</h3>
                   <table className='content-table'>
                       <thead>
                       <tr>
                           <th>S.no</th>
                           <th>Title</th>
                           <th>Date</th>
                       </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>1</td>
                               <td>Program to add two numbers</td>
                               <td>01.02.2022</td>
                           </tr>
                           <tr>
                               <td>2</td>
                               <td>Program to add two numbers</td>
                               <td>01.02.2022</td>
                           </tr>
                       </tbody>
                   </table>
                </div>
        </div>
  </section>);
};
export default Profile;
         

      

