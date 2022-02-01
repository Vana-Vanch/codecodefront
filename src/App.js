
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Editor from './components/Editor/Editor';
import AssignmentList from './components/AssignmentList/AssignmentList';
import Announcement from './components/Announcement/Announcement';

function App() {
  return (
    <div>
    <Navbar />
    {/* <Editor /> */}
    <AssignmentList />
   
    </div>
  );
}

export default App;
