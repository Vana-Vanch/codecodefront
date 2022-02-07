import React, {useState} from 'react';
import './../Practice/style.css';
import axios from 'axios';



import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/java';
import 'brace/mode/c_cpp';
import 'brace/mode/javascript';
import 'brace/mode/php';
import 'brace/mode/python';


import 'brace/theme/monokai';
import 'brace/theme/sqlserver';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/cobalt';
import 'brace/theme/dracula';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';




const Practice = () => {
    const [defaultmode,setDefaultMode] = useState('c_cpp');
    const [code,setCode] = useState('');
    const [lang,setLang] = useState('c_cpp');
    const [theme,setTheme] = useState('cobalt');

    const getCode = () => {

   
        const codes = code;
        const language = lang;
        const bodies = {
          codes,
          language
        };
        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post('/api/practice', bodies).then(res=>{
         
            const codeOutput = res.data[0];
            console.log(codeOutput);
            document.getElementById('prac-output').value = codeOutput;
          })
        })
  
  
    }

    return <>
    <section className='prac-body'>
    <div className='prac-container'>
    <div className='editor-header'>
      <h3>EdiThor</h3>
      <div className='options-container'>
          Language
          <select name="dropdawn" id="dropdawn" onChange={(e)=>{

            const selectedLang = e.target.value;
            if(selectedLang === 'c' || selectedLang === 'cpp'){
              setLang('c_cpp');
            }else{
              setLang(selectedLang);
            }
            
            
          }}>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="javascript">Javascript</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
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
     <div className='prac-ace'>
             <AceEditor
                      mode={lang}
                      theme={theme}
                      width='850px'
                      height='450px'
                      value={code}
                      focus={true}
                      fontSize={16}
                      onChange={(newValue) => {
                       
                        setCode(newValue);
                        
                      }}
                      name="UNIQUE_ID_OF_DIV"
                      editorProps={{
                          $blockScrolling: true
                      }}
                  />
                  <button className='prac-run' onClick={getCode}>Run</button>
    </div>;
         <h3>output</h3>
         <textarea name="" id="prac-output" cols="104" rows="10" readOnly></textarea>
    </div>
    </section>
    </>
    
};

export default Practice;
