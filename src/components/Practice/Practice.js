import React, {useState} from 'react';
import './../Practice/style.css';

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


const Practice = () => {
    const [code,setCode] = useState('');
    const [lang,setLang] = useState('c_cpp');
    const [theme,setTheme] = useState('cobalt');

    const getCode = () => {
        console.log(code);
        const codeOutput = document.getElementById('prac-output').value = code;
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
            setLang(selectedLang);
          }}>
            <option value="c_cpp">C</option>
            <option value="c_cpp">C++</option>
            <option value="java">Java</option>
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
