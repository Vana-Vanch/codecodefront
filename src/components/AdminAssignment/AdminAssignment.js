import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "../AdminAssignment/style.css";
import { Link, Outlet } from 'react-router-dom';




axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';




const AdminAssignment = () => {


  const [assignmentss,setAssignmentss] = useState([]);


  useEffect(()=>{
    getAssignments();
  },[]);


  const getAssignments = () => {
    axios.get('sanctum/csrf-cookie').then(response=> {
      axios.get('api/assignmentlist').then(res => {
        console.log(res.data);
        setAssignmentss(res.data.assignments);
      })
    })
  }
  console.log(assignmentss);

  return (
    <>
    <div className='theHead'>Assignments</div>
     
      
    <div className='usertable-container'>
        <table className='user-table'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
            

            </tr>
            

          </thead>
          <tbody className='user-tab-body'>
            {assignmentss.map(item => {
              return <>
            <tr>
            <td> <Link to={`/dashboard/submitlist/${item.id}`}>{item.title}</Link> </td> 
              <td>1234</td>
          
            </tr>
            </>
            })}
          </tbody>
        </table>
        <button className='create-assignment' type='button'><Link to="/dashboard/createassignment">Create New Assignment</Link></button>
       
      </div>
      <div>
      <Outlet />
      </div>
    </>
  )
}

export default AdminAssignment