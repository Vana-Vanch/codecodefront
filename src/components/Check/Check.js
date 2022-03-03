import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "../Check/style.css";

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
import 'brace/theme/dracula';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';




const Check = () => {
  let {id} = useParams();
  let {username} = useParams();
  console.log(id);
  console.log(username);
  const [code,setCode] = useState('');
  const [lang,setLang] = useState('python');
  const [theme,setTheme] = useState('cobalt')
  const [curlang,setCurlang] = useState('python')
  
  const getStuCode = () => {
    const stuName = username;
    const datas = {
      stuName
    }
    axios.get('sanctum/csrf-cookie').then(response => {
      axios.post('api/studentcode/'+id, datas).then(res => {
        console.log(res.data);
      })
    })
  }


  useEffect(()=>{
    getStuCode();
  }, [])


  


  return (
    <>
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
            <option value="monokai">monokai</option>
            <option value="sqlserver">sqlserver</option>
            <option value="solarized_dark">solarized_dark</option>
            <option value="cobalt">cobalt</option>
            <option value="dracula">dracula</option>
          </select>
  
  
      </div>
    </div>
    <div>
         <div className='codemirror'>
           <AceEditor
                    mode={lang}
                    theme={theme}
                    width='100%'
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
  </div>
    </div>
    </>
  )
}

export default Check