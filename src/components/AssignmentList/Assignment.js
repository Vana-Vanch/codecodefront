import React from 'react'
import '.././AssignmentList/style.css';
import { Link } from 'react-router-dom';
const Assignment = ({item}) => {
  const aide = item.id;
  return (
      <>
       
               <div className='box'>
                
              <Link to={`/mainassignment/${item.id}`}> <h4>{item.title}</h4></Link>
                <p>{item.description}</p>
                {/* <p>{item.created_at}</p> */}
           
                 </div>
                
     </>
  )

}

export default Assignment;