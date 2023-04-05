import {useState} from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';

import ProtectRoute from './Service/ProtectRoute';
import WFHform from './Components/WFH/WFHform';
import TimesheetForm from './Components/Timesheet/TimesheetForm';
// import Timesheet from './Components/Timesheet/Timesheet';


// import {LoginContext} from './Context/LoginContext'



 
function App() {
  
  return (
    <>
    <Router>
      
      <Routes>
         <Route element={<SignIn/>} path='/'></Route>
         <Route element={<SignUp/>} path='/signup'></Route>
         <Route element={<Profile/>} path='/profile'></Route>
         <Route element={<WFHform/>} path='/WFHform'></Route>
         <Route element={<TimesheetForm/>} path='/Timesheetform'></Route>
          <Route element={<ProtectRoute/>} path='/dashboard'> 
            <Route element={<Dashboard/>} path='/dashboard'></Route>
         </Route> 
      </Routes>
        
      
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
