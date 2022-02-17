import React,{useContext,useEffect, useState} from 'react';
import './../Profile/style.css';
import axios from 'axios';
import noimage from './../Profile/noimage.jpg';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext';


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const Profile = () => {
    const {user,setUser} = useContext(UserContext);
    const [thename,setThename] = useState('');
    const [theEmail,setTheEmail] = useState('');
    const [theRollno,setTheRollno] = useState('');
    const [propic,setPropic] = useState(false);
    const [url,setUrl] = useState('');
    const newName = user.slice(1,user.length-1);
    
    console.log(newName);

    const getUser = () => {
        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.get('api/user').then(res => {
            console.log(res.data);
            const username = JSON.stringify(res.data.user.name);
            setUser(username);
            setThename(res.data.user.name);
            setTheEmail(res.data.user.email);
            setTheRollno(res.data.user.rollno);
            if(res.data.user.profilePicture){
                setPropic(true);
                setUrl('http://localhost:8000/images/profilepics/'+res.data.user.profilePicture);
            }else{
                console.log('no');
            }
          })
        })
      }
      useEffect(()=>{
        getUser();
        getid();
        if(checkUser()){
         console.log('yes auth');
         
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


      const getid = () => {
          axios.get('sanctum/csrf-cookie').then(response => {
              axios.get('api/myassignments').then(res => {
                  console.log(res.data);
              })
          })
      }
    
    

  return (
  <section className='zeBody'>
        <div className='prof-container'>
            <div className="profile-image">

                {propic ?
                    <img src={url} alt="" style={{height: '300px'}}/>
                    :
                    <img src={noimage} alt="" style={{height: '300px'}}/>
                }
                 
            <div className='info'>
                    <div className='prof-content'>
                         <h4>Name:</h4>
                         <h4>Rollno:</h4>
                         <h4>Email:</h4>
                         <h4>Course:</h4>
                    </div>
                    <div className='prof-content'>
                         <h4>{thename}</h4>
                         <h4>{theRollno}</h4>
                         <h4>{theEmail}</h4>
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
         

      

