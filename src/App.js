
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


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    
     <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<AssignmentList />} />
         <Route path="/practice" element={<Practice />} />
         <Route path="/profile" element={<Profile />}/>
         <Route path="/register" element={<Registration />} />
         <Route path="/login" element={<Login />}/>
  
       </Routes>
    </Router>
    </div>
  );
}

export default App;
