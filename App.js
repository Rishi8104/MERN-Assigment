// import logo from './logo.svg';
import './App.css';
import { Dashboard } from './component/Dashboard';
import  {NavigationBar}  from './component/NavigationBar.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { TaskForm } from './component/TaskForm';
import { TaskList } from './component/TaskList';
import Profile from './component/Profile';
import ActiveLogin from './component/ActiveLogin';
import Signup from './component/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        {/* <Dashboard/> */}
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/create-task" element={<TaskForm/>} />
          <Route path="/tasks" element={<TaskList/>} />
          <Route path='/Signup' element={<Signup></Signup>} />
        <Route path='/ActiveLogin' element={<ActiveLogin></ActiveLogin>} />
        <Route path='/Profile' element={<Profile></Profile>} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
