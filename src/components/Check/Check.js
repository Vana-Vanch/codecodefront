import React,{useState} from 'react'
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


const Check = () => {
  const [code,setCode] = useState('');
  const [lang,setLang] = useState('c_cpp');
  const [theme,setTheme] = useState('cobalt')
  return (
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
  )
}

export default Check