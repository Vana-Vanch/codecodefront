import React, {useState} from 'react';
import '../MainAssignment/style.css';


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


const MainAssignment = () => {
    const [code,setCode] = useState('');
    const [lang,setLang] = useState('python');
    const [theme,setTheme] = useState('cobalt');
    const [curlang,setCurlang] = useState('python');

    const getCode = () => {
        console.log(code);
        const codeOutput = document.getElementById('subout').value = code;
    }

  return    <section className='assbody'>
  <div className='mainass-container'>
      <div className="ques">
          <h3>Problem</h3>
          <div className='prop-con'>
          <div className="question">
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id explicabo earum laudantium quas nisi inventore magnam eveniet quae harum. Totam dignissimos ducimus enim ipsam, modi mollitia. Voluptatibus aperiam voluptate quasi.
              </p>
          </div>
          <div className="outin">
              <p>Example Input:</p>
              <p>Expected output: </p>
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
          <option value="monokai">monokai</option>
          <option value="sqlserver">sqlserver</option>
          <option value="solarized_dark">solarized_dark</option>
          <option value="cobalt">cobalt</option>
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
  <button className='ass-submit'>Submit</button>
  </div>
                    
      </div>
      <div className="outputcon">
          <h3>Output</h3>
          <textarea name="" id="subout" cols="30" rows="45" readOnly></textarea>
      </div>
  </div>;
  </section> 
};

export default MainAssignment;
