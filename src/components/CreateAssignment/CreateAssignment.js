import React from 'react'
import "../CreateAssignment/style.css";
const CreateAssignment = () => {
  return (
    <div className='create-container'>
      <h3>Create Assignment</h3>
      <div className='the-assignment'>
          <div className='create-container'>
            <div className="input-boxes">
              <span>Title</span>
              <input type="text" />
            </div>
            <div className="input-boxes">
              <span>Body</span>
              <textarea name="" id="" cols="72" rows="10"></textarea>
            </div>
            <div className="input-boxes">
              <span>Example Input</span>
              <input type="text" />
            </div>
            <div className="input-boxes">
              <span>Example Output</span>
              <input type="text" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default CreateAssignment