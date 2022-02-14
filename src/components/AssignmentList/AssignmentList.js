import React, { useContext,useEffect,useState } from 'react';
import './../AssignmentList/style.css';
import Announcement from '../Announcement/Announcement';
import { UserContext } from '../../UserContext';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Assignment from './Assignment';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const AssignmentList = () => {
   const [tasks,setTask] = useState([]);
   let navigate = useNavigate();
   const {user,setUser} = useContext(UserContext);

   useEffect(()=>{
      if(checkUser()){
        console.log('authenticated');
        fetchAssignment();
      }else{
        navigate('/about')
      }
    },[])

    const fetchAssignment = () => {
      axios.get('/sanctum/csrf-cookie').then(response => {
         axios.get('api/assignmentlist').then(res => {
            console.log(res.data.assignments);
            setTask(res.data.assignments)
            // setTask([...tasks,res.data]);
            console.log("Task");
            console.log(tasks);
            console.log(typeof(tasks));
         })
      })
    }
  
    const checkUser = () =>{
      if(user){
        return true;
      }else{
        return false;
      }
    }

  return  <section className='container'>
        <div className='assignment-container'>
        
            <div className='assignment'>
              {tasks.map(item => {
                return <Assignment item={item} key={item.id} />
              })}
            </div>
        </div>
       <div className='announcement-con'>
                <Announcement />
          </div>
 
 </section>;

};

export default AssignmentList;

