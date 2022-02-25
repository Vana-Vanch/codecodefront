import React from 'react'
import "../AnnounceCreate/style.css";
const AnnounceCreate = () => {
  return (
    <div className='announce-container'>
    <h3>Server Announcement</h3>
   
        <div className='create-container'>
         
          <div className="input-boxes">
            <span>Body</span>
            <textarea name="" id="" cols="72" rows="10"></textarea>
          </div>
        
        </div>
   
    <div className='submit-con'> 
        <button>Submit</button>

    </div>
  </div>
        
  )
}

export default AnnounceCreate