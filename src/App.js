
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
import Welcome from './components/Welcome/Welcome';
import Admin from './components/Admin/Admin';
import AdminAssignment from './components/AdminAssignment/AdminAssignment';
import AdminAnnounce from './components/AdminAnnounce/AdminAnnounce';
import UserList from './components/UserList/UserList';
import Submissions from './components/Submissions/Submissions';
import CreateAssignment from './components/CreateAssignment/CreateAssignment';
import Check from './components/Check/Check';
import SubmitList from './components/SubmitList/SubmitList';
import AnnounceCreate from './components/AnnounceCreate/AnnounceCreate';


import { UserContext,AdminContext } from './UserContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext, useMemo, useState, useEffect } from 'react';

import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {

  const [user,setUser] = useState('');
  const [admin,setAdmin] = useState(false);

  const adminProvider = {
    admin,
    setAdmin
  }

  const providerValue ={
    user,
    setUser
  }


  
  return ( 
    <UserContext.Provider value={providerValue} >
       <AdminContext.Provider value={adminProvider} >
      <Router>
       
       <Navbar />
       
       <Routes>
       
        <Route path="/" element={<AssignmentList />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/about" element={<Guest />} />
        <Route path="mainassignment/:id" element={<MainAssignment />} /> 
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/dashboard" element={<Admin/>}>
          <Route path="userlist" element={<UserList />} />
          <Route path="assignmen" element={<AdminAssignment />} />
          <Route path="createassignment" element={<CreateAssignment />} />
          <Route path="submission" element={<Submissions />} />
          <Route path="submitlist/:id" element={<SubmitList />} />
          <Route path="check/:username/:id" element={<Check />} />
        
          <Route path="announcement" element={<AdminAnnounce />} />
          <Route path="createannouncement" element={<AnnounceCreate />} />
        </Route>
       </Routes>
      
    </Router>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
