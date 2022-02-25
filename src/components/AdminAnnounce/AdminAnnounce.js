import React from 'react'
import { Link } from 'react-router-dom';
import "../AdminAnnounce/style.css";
const AdminAnnounce = () => {
  return (
    <div>
      <div className='anounce'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dicta repellendus commodi nisi ullam, ipsum officia harum eaque omnis molestiae quis laborum sint tenetur recusandae culpa asperiores iste amet aliquid!</p>
        <button>Delete</button>
      </div>
      <div className='anounce'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dicta repellendus commodi nisi ullam, ipsum officia harum eaque omnis molestiae quis laborum sint tenetur recusandae culpa asperiores iste amet aliquid!</p>
        <button>Delete</button>
      </div>
      <div className='anounce-create'>

      <button><Link to="/dashboard/createannouncement">Create</Link></button>
      </div>
    </div>
  )
}

export default AdminAnnounce