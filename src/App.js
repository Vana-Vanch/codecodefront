
import './App.css';


import Navbar from './components/Navbar/Navbar';
import Editor from './components/Editor/Editor';
import AssignmentList from './components/AssignmentList/AssignmentList';
import Announcement from './components/Announcement/Announcement';
import Profile from './components/Profile/Profile';
import Practice from './components/Practice/Practice';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import MainAssignment from './components/MainAssignment/MainAssignment';
import Logout from './components/Logout/Logout';
import Guest from './components/Guest/Guest';



import { UserContext } from './UserContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useMemo, useState, useEffect } from 'react';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {

  const [user,setUser] = useState('');
  const providerValue ={
    user,
    setUser
  }


  
  return ( 
    <UserContext.Provider value={providerValue} >
       
      <Router>
       
       <Navbar />
       
       <Routes>
       
         <Route path="/" element={<AssignmentList />} />
         <Route path="/practice" element={<Practice />} />
         <Route path="/profile" element={<Profile />}/>
         <Route path="/register" element={<Registration />} />
         <Route path="/login" element={<Login />}/>
         <Route path="/logout" element={<Logout />}/>
         <Route path="/about" element={<Guest />} />
          <Route path="mainassignment/:id" element={<MainAssignment />} /> 
       </Routes>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
