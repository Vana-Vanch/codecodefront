import React from 'react'
import "../AdminAssignment/style.css";
import { Link, Outlet } from 'react-router-dom';
const AdminAssignment = () => {
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
          <tbody>
            <tr>
              <td>Vana</td>
              <td>1234</td>
          
            </tr>
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