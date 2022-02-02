
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Editor from './components/Editor/Editor';
import AssignmentList from './components/AssignmentList/AssignmentList';
import Announcement from './components/Announcement/Announcement';
import Profile from './components/Profile/Profile';
import Practice from './components/Practice/Practice';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
function App() {
  return (
    <div>
    <Navbar />
    {/* <Editor /> */}
    {/* <AssignmentList /> */}
    {/* <Profile /> */}
    {/* <Practice /> */}
    {/* <Registration /> */}
    <Login />
    </div>
  );
}

export default App;
