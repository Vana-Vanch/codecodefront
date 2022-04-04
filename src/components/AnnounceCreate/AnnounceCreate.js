import React, { useState } from 'react'
import "../AnnounceCreate/style.css";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const AnnounceCreate = () => {
  const [anBody,setAnBody] = useState('');
  const subAnnounce = () => {
    const announceBody = anBody;
    const data = {
      announceBody
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/postAnnouncement',data).then(res => {
        console.log(res.data);
      })
    })
  }


  return (
    <div className='announce-container'>
    <h3>Server Announcement</h3>
   
        <div className='create-container'>
         
          <div className="input-boxes">
            <span>Body</span>
            <textarea name="theAnnounce" id="" cols="72" rows="10" value={anBody} onChange={e => {
              setAnBody(e.target.value)
              console.log(anBody);
            }}></textarea>
          </div>
        
        </div>
   
    <div className='submit-con'> 
        <button type='button' onClick={subAnnounce}>Submit</button>

    </div>
  </div>
        
  )
}

export default AnnounceCreate