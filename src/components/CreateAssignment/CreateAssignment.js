import React, { useState } from 'react'
import "../CreateAssignment/style.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const CreateAssignment = () => {
  let navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [input,setInput] = useState('');
  const [output,setOutput] = useState('');


  const subAssignment = () => {
    const desc = body;
    const inpt = input;
    const outpt = output;
    const datas = {
      title,
      desc,
      inpt,
      outpt
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/assignmentcreate',datas).then(res => {
        console.log(res.data);
        navigate('/dashboard/assignmen');
      })
    })

  }
 

  return (
    <div className='create-container'>
      <h3>Create Assignment</h3>
      <div className='the-assignment'>
          <div className='create-container'>
            <div className="input-boxes">
              <span>Title*</span>
              <input type="text" 
              value={title}
              onChange={e=>{
                setTitle(e.target.value)
              }}
              />
            </div>
            <div className="input-boxes">
              <span>Body*</span>
              <textarea name="" id="" cols="72" rows="10"
              value={body}
              onChange={e => {
                setBody(e.target.value)
              }}
              ></textarea>
            </div>
            <div className="input-boxes">
              <span>Example Input</span>
              <input type="text" 
              value={input}
              onChange={e=>{
                setInput(e.target.value)
              }}
              />
            </div>
            <div className="input-boxes">
              <span>Example Output</span>
              <input type="text" 
              value={output}
              onChange={e => {
                setOutput(e.target.value)
              }}
              />

            </div>
            <div className='submit-con'> 
        <button type='button' onClick={subAssignment}>Create</button>

    </div>
          </div>
      </div>
    </div>
  )
}

export default CreateAssignment