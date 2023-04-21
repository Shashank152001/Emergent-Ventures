import React from 'react'
import './App.css';
// import {socket} from './socket'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import GetProfile from './Components/Profile/getProfile';
import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import Dashboard from './Components/Dashboard/Dashboard';
import ProtectRoute from './Service/ProtectRoute';
import WFHform from './Components/WFH/WFHform';
import TimesheetForm from './Components/Timesheet/TimesheetForm';
import Timesheet from './Components/Timesheet/Timesheet';
import RedirectRoute from './Service/RedirectRoute';
<<<<<<< HEAD
import LeaveForm from '../src/Components/Leaves/leaveform';
=======
import ErrorPage from './Components/ErrorComponet/ErrorPage';
>>>>>>> main


// import {LoginContext} from './Context/LoginContext'



 
function App() {
  

  

  return (
    
    <>
     {/* socket.off('connect', onConnect);
     socket.off('disconnect', onDisconnect); */}
    <Router>
      
      <Routes>
        
         <Route element={<RedirectRoute/>} path='/'>
         <Route element={<SignIn/>} path='/'></Route>
         </Route>
         <Route element={<SignUp/>} path='/signup'></Route>
         <Route element={<Profile/>} path='/profile'></Route>
         <Route element={<WFHform/>} path='/WFHform'></Route>
         <Route element={<LeaveForm/>} path='/leaveform'></Route>
         <Route element={<EmployeeTable/>} path='/table'></Route>
         <Route element={<TimesheetForm/>} path='/Timesheetform'></Route>
         <Route element={<ProtectRoute/>} path='/dashboard'>
          <Route element={<Dashboard/>} path='/dashboard'></Route>
         </Route>
         <Route element={<ProtectRoute/>} path='/getProfile'>
            <Route element={<GetProfile/>} path='/getProfile'></Route>
         </Route>
         <Route element={<ProtectRoute/>} path='/profile'>
          <Route element={<Profile/>} path='/profile'></Route>
         </Route>
         <Route element={<ProtectRoute/>} path='/leaverequest'>
          <Route element={<WFHform/>} path='/leaverequest'></Route>
         </Route>
        <Route element={<ErrorPage/>} path='*'></Route>
      </Routes>
        
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
