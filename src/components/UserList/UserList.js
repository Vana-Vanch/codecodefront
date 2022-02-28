import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "../UserList/style.css";





axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const UserList = () => {
  const [theUsers,setTheUsers] = useState([]);
  const [theRole,setTheRole] = useState('');

useEffect(()=> {
  getAllUsers();
},[])
console.log(theUsers);

  const getAllUsers = () => {
    axios.get('sanctum/csrf-cookie').then(response => {
      axios.get('/api/allusers').then(res => {
        console.log(res.data);
        setTheUsers(res.data.users);
      })
    })
  }

  return (
    <>
    <div className='theHead'>List of Users</div>
     
      
    <div className='usertable-container'>
        <table className='user-table'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Rollno</td>
              <td>Course</td>
              <td>Email</td>
              <td>Role</td>

            </tr>
            

          </thead>
          <tbody>
            {theUsers.map(item => {
              // if(item.isAdmin === 1){
              //  setTheRole('Admin')
              // }else{
              //   setTheRole('User')
              // }
              return <>
            <tr >
              <td key={item.id}>{item.name}</td>
              <td>{item.rollno}</td>
              <td>MCA</td>
              <td>{item.email}</td>
            
              <td>ppop</td>
            </tr>
              </>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList