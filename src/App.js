
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Editor from './components/Editor/Editor';
import AssignmentList from './components/AssignmentList/AssignmentList';
import Announcement from './components/Announcement/Announcement';
import Profile from './components/Profile/Profile';
import Practice from './components/Practice/Practice';

function App() {
  return (
    <div>
    <Navbar />
    {/* <Editor /> */}
    {/* <AssignmentList /> */}
    {/* <Profile /> */}
    <Practice />
    </div>
  );
}

export default App;
