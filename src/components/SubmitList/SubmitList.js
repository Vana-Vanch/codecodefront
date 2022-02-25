import React from 'react'
import "../SubmitList/style.css";
const SubmitList = () => {
  return (
      <>
      <div className='assingment-info'>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident sapiente. Quidem rem fugiat necessitatibus officiis placeat consectetur suscipit inventore iusto autem ipsam ratione, sint, reiciendis vero ad magni quod!</p>
      </div>
    <div className='usertable-container'>
    <table className='submission-table'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Rollno</td>
        

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
  </>
  )
}

export default SubmitList