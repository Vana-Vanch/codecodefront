import React, {useState, useEffect} from 'react';
import '../MainAssignment/style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/java';
import 'brace/mode/c_cpp';
import 'brace/mode/php';
import 'brace/mode/python';



import 'brace/theme/monokai';
import 'brace/theme/sqlserver';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/cobalt';


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';



const MainAssignment = () => {
    let {id} = useParams();
   
    const [code,setCode] = useState(''); 
    const [lang,setLang] = useState('python');
    const [theme,setTheme] = useState('cobalt');
    const [curlang,setCurlang] = useState('python');

    //Assignment useState
    const [haveSubmitted,setHaveSubmitted] = useState(false);
    const [asstitle,setTitle] = useState('');
    const [exin,setExin] = useState('');
    const [exout,setExout] = useState('');
    const [createdAt,setCreatedAt] = useState('');
    const [body,setBody] = useState('');

    //Existing Assignments




    const checkSubmit = () => {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.get('/api/checksubmit/'+id).then(res =>{
          if(res.data.message === 'null'){
            setHaveSubmitted(false);
          }else{
            // setHaveSubmitted(true);
            // console.log(res.data.current[0].id);
            console.log(res.data.code.length);
            let len = res.data.code.length;
            // document.getElementById('subout').value = res.data.code;
            // setCode(document.getElementById('subout').value);     
            for(let i = 0;i< len;i++){
              document.getElementById('secretagent').value += res.data.code[i];
              document.getElementById('secretagent').value += '\n';
            }
            setCode(document.getElementById('secretagent').value);
            setHaveSubmitted(true);
          }
        })
      })
    }


    const justSubmitted = () => {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.get('/api/checksubmit/'+id).then(res =>{
          if(res.data.message === 'null'){
            setHaveSubmitted(false);
          }else{
            setHaveSubmitted(true);
          }
        })
      })
    }


    const getCode = () => {
      console.log(curlang);
      const theTitle = asstitle;
      const codes = code;
      const language = curlang;
      const title = asstitle;
      const bodies = {
        codes,
        language,
        theTitle
      };
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/practice', bodies).then(res=>{
       
          const codeOutput = res.data[0];
          console.log(codeOutput);
          document.getElementById('subout').value = codeOutput;
        })
      })
       
    }
    

    const submitCode = () => {
      console.log(code);
      console.log(lang);
      console.log(curlang);
      const zecode = code;
      const language = curlang; 
      const theDatas = {
        zecode,
        language
      }
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/submit/'+id, theDatas).then(res =>{
          console.log(res.data);
        })
      })
      justSubmitted();
   

    }

    const getAssignment = () =>{
        axios.get('/sanctum/csrf-cookie').then(response =>{
          axios.get('/api/oneassignment/'+id).then(res => {
            setTitle(res.data.theassignment.title);
            setExin(res.data.theassignment.in);
            setExout(res.data.theassignment.out);
            setCreatedAt(res.data.theassignment.created_at);
            setBody(JSON.stringify(res.data.theassignment.description));
            // console.log(title);
            // console.log(exin);
            // console.log(exout);
            // console.log(body);
          })
        })
    }
    useEffect(()=>{
      checkSubmit();
      getAssignment();
    },[])

  return    <section className='assbody'>
  <div className='mainass-container'>
      <div className="ques">
          <h3>{asstitle}</h3>
          <div className='prop-con'>
          <div className="question">
              <p>
                 {body}
              </p>
          </div>
          <div className="outin">
              <p>Example Input: {exin}</p>
              <p>Expected output: {exout} </p>
          </div>
          </div>
      </div>
      <div className="edithor-con">
      <div className='editor-header'>
    <h3>EdiThor</h3>
    <div className='options-container'>
        Language
        <select name="dropdawn" id="dropdawn" onChange={(e)=>{
          
          const selectedLang = e.target.value;
          if(selectedLang === 'c' || selectedLang === 'cpp'){
            if(selectedLang ==='c'){
              setCurlang('c');
            }else if(selectedLang === 'cpp'){
              setCurlang('cpp');
            }
            setLang('c_cpp');
          }else{
            setLang(selectedLang);
            setCurlang(selectedLang)
          }
        }}>
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="javascript">Javascript</option>
            <option value="php">PHP</option>
        </select>
        Themes
        <select name="themes" id="themes" onChange={(e)=>{
          const selectedTheme = e.target.value;
          setTheme(selectedTheme);
        }}>
          <option value="cobalt">cobalt</option>
          <option value="monokai">monokai</option>
          <option value="sqlserver">sqlserver</option>
          <option value="solarized_dark">solarized_dark</option>
          
          <option value="dracula">dracula</option>
        </select>


    </div>
  </div>
   <div className='codemirror'>
           <AceEditor
                    mode={lang}
                    theme={theme}
                    width='650px'
                    height='500px'
                    value={code}
                    focus={true}
                    fontSize={16}
                    onChange={(newValue) => {
                      console.log('change', newValue);
                      setCode(newValue);
                      
                    }}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
  </div>;
 
 
  <div className='sub-container'>
  <button className='prac-run' onClick={getCode}>Run</button>
  {haveSubmitted ?
      <button className='ass-submit' type='button' disabled>Submitted</button>
  : 
  <button className='ass-submit' type='button' onClick={submitCode}>Submit</button>
}
 
  </div>
                    
      </div>
      <div className="outputcon">
          <h3>Output</h3>
          <textarea name="" id="subout" cols="30" rows="45" readOnly ></textarea>
          <textarea name="" id="secretagent" cols="1" rows="1" hidden></textarea>
      </div>
  </div>;
  </section> 
};

export default MainAssignment;
