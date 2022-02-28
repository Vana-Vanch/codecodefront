import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import "../SubmitList/style.css";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const SubmitList = () => {
  let {id} = useParams();
  const [list,setList] = useState([]);
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');

  const createReq = () => {
    axios.get('sanctum/csrf-cookie').then(response => {
      axios.post('api/sublist/'+id).then(res => {
        console.log(res.data);
        setList(res.data.list);
        setTitle(res.data.main.title);
        setBody(res.data.main.description)
      })
    })
  }


  useEffect(() => {
    createReq();
  }, [])


  return (
      <>
      <div className='assingment-info'>
            <h3>{title}</h3>
            <p>{body}</p>
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