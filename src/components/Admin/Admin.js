import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "../Admin/style.css";
const Admin = () => {
  return (
    <div className='admin-back'>
        <div className='side-panel'>
            <h3>Menu</h3>
            <ul>
                <li>
                    <Link to="userlist">Users</Link>
                </li>
                <li>
                <Link to="assignmen">Assignments</Link>
                </li>
                {/* <li>
                <Link to="submission">Submissions</Link>
                </li> */}
                <li>
                <Link to="announcement">Announcements</Link>
                </li>
            </ul>
        </div>
        <div className='admin-body'><Outlet/></div>
    </div>
  )
}

export default Admin