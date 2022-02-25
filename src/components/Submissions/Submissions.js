import React from 'react'
import {Link} from "react-router-dom";
import '../Submissions/style.css';
const Submissions = () => {
  return (
    <>
    <div className='theHead'>Assignments</div>
     
      
    <div className='usertable-container'>
        <table className='submission-table'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Total</td>
            

            </tr>
            

          </thead>
          <tbody>
            <tr>
              <td>Vana</td>
              <td>1234</td>
          
            </tr>
          </tbody>
        </table>
 
       
      </div>
      <div>
      <button className='create-assignment' type='button'><Link to="/dashboard/submitlist/1">Create New Assignment</Link></button>
      </div>
    </>
  )
}

export default Submissions