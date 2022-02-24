import React from 'react'
import "../UserList/style.css";
const UserList = () => {
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
            <tr>
              <td>Vana</td>
              <td>1234</td>
              <td>MCA</td>
              <td>vana@vana.com</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList